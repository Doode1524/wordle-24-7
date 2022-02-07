/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Form from "./components/form";
import { LetterContainer } from "./components/gameboard/LetterContainer";
import { dictionary } from "./dictionary";
import { checkWord } from "./helpers";
import { BASE_URL } from "./helpers/constants";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { SignUp } from "./components/userForm/SignUp";
import { Login } from "./components/userForm/Login";
import { StatsWrapper } from "./components/stats/StatsWrapper";
import { RequireLogin } from "./components/userForm/RequireLogin";

const App = () => {
  const [curWord, setCurWord] = useState("");
  const [word, setWord] = useState(["", "", "", "", "", "", ""]);
  const [curRow, setCurRow] = useState(0);
  const [user, setUser] = useState({});
  const [loginObj, setLoginObj] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  let form = document.getElementById("word-form");

  // const getWinPercentage = () => {
  //   let gamesPlayed = user.wins + user.losses
  //   if (gamesPlayed > 0 ){
  //     let winPercentage = (user.wins / (user.wins + user.losses)) * 100;
  //     return winPercentage.toFixed(0);
  //   }
  // };

  useEffect(() => {
    fetchWord();
  }, []);

  useEffect(() => {
    console.log(curWord);
  }, [word]);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${BASE_URL}/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  };

  const fetchWord = () => {
    const randWord =
      dictionary.solutions[
        Math.floor(Math.random() * dictionary.solutions.length)
      ];
    setCurWord(randWord.toUpperCase());
  };

  const isValidGuess = (guess) => {
    return (
      dictionary.guesses.includes(guess.toLowerCase()) ||
      dictionary.solutions.includes(guess.toLowerCase())
    );
  };

  const handleChange = (e) => {
    let newWord = [...word];
    newWord[curRow] = e.target.value.toUpperCase();
    setWord(newWord);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValidGuess(word[curRow])) {
      setCurRow(curRow + 1);
      await checkWord(word[curRow], curWord, curRow);
      if (word[curRow] === curWord) {
        handleUserWin(user);
      } else if (curRow === 5) {
        handleUserLose(user);
      }
      form.reset();
    }
  };

  const handleUserWin = (user) => {
    let checkBestStreak =
      user.best_streak <= user.current_streak
        ? user.best_streak + 1
        : user.best_streak;

    let newObj = {
      ...user,
      wins: user.wins + 1,
      current_streak: user.current_streak + 1,
      best_streak: checkBestStreak,
      // win_percentage: (((user.wins + 1) / (user.wins + user.losses)) * 100).toFixed(0)
    };

    setUser(newObj);

    fetch(`${BASE_URL}/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newObj),
    }).then((res) => res.json());
  };

  const handleUserLose = (user) => {
    let newObj = {
      ...user,
      losses: user.losses + 1,
      current_streak: 0,
      // win_percentage: (user.wins / (user.wins + user.losses + 1) * 100).toFixed(0)
    };

    setUser(newObj);

    fetch(`${BASE_URL}/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newObj),
    });
  };

  const handleUserFormChange = (e) => {
    const { name, value } = e.target;
    setLoginObj({
      ...loginObj,
      [name]: value,
    });
  };

  const handleSignUpFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt !== undefined) {
          localStorage.setItem("token", data.jwt);
          setUser(data.user);
          navigate("/");
        } else {
          navigate("/signup");
        }
      });
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(loginObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        if (data.jwt !== undefined) {
          localStorage.setItem("token", data.jwt);
          setUser(data.user);
          navigate("/");
        } else {
          navigate("/login");
        }
      });
  };

  const handleReset = (event) => {
    event.preventDefault();
    window.location.reload();
    // TODO: this, obviously.
  };

  return (
    <div
      className="app"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1 className="app-header">
        HELLO-WORDLE{" "}
        {user.username ? (
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("token");
              setUser({});
            }}
          >
            LOGOUT {user.username}
          </button>
        ) : null}
      </h1>
      <LetterContainer word={word} curRow={curRow} />
      {user.username ? (
        <div>
          <Form
            handleChange={handleChange}
            handleReset={handleReset}
            word={word}
            handleSubmit={handleSubmit}
            curRow={curRow}
          />
          <StatsWrapper user={user.username && user} />
        </div>
      ) : (
        <div>
          <RequireLogin navigate={navigate} />
          <Routes>
            <Route
              exact
              path="/signup"
              element={
                <SignUp
                  handleChange={handleUserFormChange}
                  value={loginObj}
                  handleSubmit={handleSignUpFormSubmit}
                />
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Login
                  handleChange={handleUserFormChange}
                  value={loginObj}
                  handleSubmit={handleLoginFormSubmit}
                />
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;

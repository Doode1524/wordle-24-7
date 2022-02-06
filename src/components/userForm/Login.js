import React from 'react';

export const Login = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={props.value.username}
            onChange={props.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={props.value.password}
            onChange={props.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      );
};

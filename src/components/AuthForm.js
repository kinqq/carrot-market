import React from "react";

export const AuthForm = () => {
  return (
    <form action={login()}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div id="passwordHelpBlock" class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers.
      </div>
      <button type="submit" class="btn btn-primary">
        로그인
      </button>
    </form>
  );
};

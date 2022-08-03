import React from 'react';

export default function ErrorPage(props) {
    return (
    <section className="centered">
  <h1>Oops Something Went Wrong</h1>
  <div className="container">
    <p className="message" >{props.message}</p>
  </div>
</section>
    );
}
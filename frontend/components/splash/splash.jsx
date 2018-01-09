import React from 'react';

const Splash = () => (
  <div className='splash-page'>
    <h1>Welcome to Poke Log!</h1>
    <h2>An app for people with Hemophilia.</h2>
    <main>
      <section className='feature feature--poke'>
        <div className='feature__icon'></div>
        <article>
          <h3>Log your treatments</h3>
          <p>Record your infusions (pokes) and injuries (bleeds).</p>
        </article>
      </section>
      <section className='feature feature--log'>
        <div className='feature__icon'></div>
        <article>
          <h3>See your log</h3>
          <p>Review your pokes and bleeds by month.</p>
        </article>
      </section>
      <section className='feature feature--share'>
        <div className='feature__icon'></div>
        <article>
          <h3>Share your poke log</h3>
          <p>Share your pokes and bleeds with caregivers and loved ones.</p>
          <p className='splash-page__coming-soon'>Coming soon!</p>
        </article>
      </section>
    </main>
    <button className='splash-page__try-it'>Try It</button>
    <footer>
      <p><a href="https://github.com/ashvalejohn/poke-log" target="_blank">Poke Log</a> was built by <a href="https://github.com/bucknermr" target="_blank">Matthew Buckner</a>, <a href="https://github.com/ashvalejohn" target="_blank">Ashley Johnson</a> and <a href="https://github.com/nwilliams770" target="_blank">Nicholas Williams</a>.</p>
    </footer>
  </div>
)

export default Splash;
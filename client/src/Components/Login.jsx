import {Link} from 'react-router-dom'

export default function Login() {

  function handleSubmit(){

  }

  function handleChange(){

  }

  return (
    <>
      <section className="container">
        <form className="form" onSubmit={(event)=>[
          handleSubmit(event)
        ]} action="">
          <div>
            <img src="" alt="" />
            <h1>Login to Bharat-Games</h1>
          </div>
          <input className="inp" type="email" name="email" placeholder="E-mail" onChange={handleChange}/>
          <input className="inp" type="password" name="password" placeholder="Password" onChange={handleChange}/>          
          <button className="btn" type="submit">Login</button>
          <p className="span-term">Don&apos;t Have any Account ?  <Link  to='/register'>Register</Link></p>
        </form>
      </section>
    </>
  )
}

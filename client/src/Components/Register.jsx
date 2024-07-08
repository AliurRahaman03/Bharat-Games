
export default function Register() {


    function handleSubmit(){

    }

    function handleInput(){
      alert("jnfr")
    }


  return (
    <>
        <section className="container">
            
            <form className="form" >

                <h1>Login</h1>

                <input type="text" className="inp" required placeholder="Enter Name" name="name" onChange={handleInput}  />

                <input type="email" className="inp" required placeholder="Enter Email" name="email" onChange={handleInput} />

                <input type="password" className="inp" required placeholder="Enter Password" name="password" onChange={handleInput} />

                <input type="number" className="inp" required placeholder="Enter Your Age" name="age" onChange={handleInput} />

                <button className="btn" onClick={handleSubmit}>JOIN</button>

            </form>

        </section>
    </>
  )
}

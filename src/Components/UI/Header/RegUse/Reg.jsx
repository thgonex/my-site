import React, { useEffect, useState } from 'react'
import "./Reg.css"

const Reg = () => {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("auth", success)
        if(saved){
            const user = JSON.parse(saved)
            setEmail(user.email)
            setSuccess(true)
        }
    }, [])

    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    }, [open])

   function checkInput() {
    setErr("") 

    if (email.trim() === "" || pass.trim() === "") {
        setErr("Заповніть усі поля")
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        setErr("Введіть коректну email адресу")
        return
    }

    if (pass.length < 8 || pass.length > 16) {
        setErr("Пароль має бути від 8 до 16 символів")
        return
    }

    const user = {email}
    localStorage.setItem("auth", JSON.stringify(user))
    setSuccess(true)
}


    return (
      <div>
        <img
          src="src/Components/UI/Header/logo/free-icon-avatar-6386976.png"
          className="logoReg"
          onClick={() => setOpen(true)}
        />
        {open && (
          <div className="modalReg" onClick={() => setOpen(false)}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <button className="closeBtn" onClick={() => setOpen(false)}>×</button>
              {success ? (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h2 style={{marginBottom: "0px", textAlign:"center"}}>Ви зареєстровані ✅</h2>
                  <p style={{textAlign: "center"}}>Ваш email: {email}</p>
                  <button className="btnReg" onClick={() => setOpen(false)}>Продовжити перегляд товару</button>
                </div>
              ) : (
                <>
                  <div className="shopReg">
                    <p style={{ textAlign: "center" }}>Вхід у систему / Реєстрація</p>
                  </div>
                  <p style={{ fontSize: "20px", margin: "20px 5px" }}>
                    Введи свій номер телефону або адресу ел. пошти
                  </p>

                  <div className="inputWrapper">
                    <input
                      type="text"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email або телефон</label>
                  </div>

                  <div className="inputWrapper">
                    <input
                      type="password"
                      id="pass"
                      required
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <label htmlFor="pass">Ваш пароль</label>
                  </div>

                  {err && (
                    <p style={{ color: "red", fontSize: "14px" }}>{err}</p>
                  )}

                  <button className="btnNext" onClick={checkInput}>
                    Далі
                  </button>

                  <p style={{ textAlign: "center" }}>
                    Перегляньте{" "}
                    <a
                      href="#"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      тут
                    </a>{" "}
                    свої замовлення та повернення, здійснені без реєстрації.
                  </p>

                  <p
                    style={{
                      fontSize: "12px",
                      marginTop: "60px",
                      textAlign: "center",
                    }}
                  >
                    Ми надішлемо код підтвердження на вказаний номер телефону чи
                    адресу електронної пошти.
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
}

export default Reg

import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Logo from '@/presentation/components/spinner/logo/logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>Enquetes para Programadores</h1>

      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit" className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar Conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Login

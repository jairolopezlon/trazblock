import 'regenerator-runtime/runtime';
import React from 'react';
import { MainHeader, Home, RegisterForm, NearBanner, CompanyInterface, UserInterface } from './components'
import { useState } from 'react';

// import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App({ isSignedIn, helloNEAR, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [isLogin, setIsLogin] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [isMinter, setIsMinter] = useState(false)
  const [isStudent, setIsStudent] = useState(false)

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // // Get blockchian state once on component load
  React.useEffect(() => {
    helloNEAR.getGreeting()
      .then(setValueFromBlockchain)
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setUiPleaseWait(false);
      });
  }, []);

  // /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    console.log(valueFromBlockchain)
    // return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()} />;
  }

  // function changeGreeting(e) {
  //   e.preventDefault();
  //   setUiPleaseWait(true);
  //   const { greetingInput } = e.target.elements;
  //   helloNEAR.setGreeting(greetingInput.value)
  //     .then(async () => { return helloNEAR.getGreeting(); })
  //     .then(setValueFromBlockchain)
  //     .finally(() => {
  //       setUiPleaseWait(false);
  //     });
  // }


  return (
    <>
      {/* <Header />
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} />
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <h1>
          The contract says: <span className="greeting">{valueFromBlockchain}</span>
        </h1>
        <form onSubmit={changeGreeting} className="change">
          <label>Change greeting:</label>
          <div>
            <input
              autoComplete="off"
              defaultValue={valueFromBlockchain}
              id="greetingInput"
            />
            <button>
              <span>Save</span>
              <div className="loader"></div>
            </button>
          </div>
        </form>
        <EducationalText />
      </main> */}
      <MainHeader />
      <div className="main-bg">
        <main>
          {!isLogin && <Home />}
          {isLogin && !isRegister && <RegisterForm />}
          {isLogin && isRegister && isMinter && <CompanyInterface />}
          {isLogin && isRegister && isStudent && <UserInterface />}
        </main>
      </div>
      <NearBanner />
    </>
  );
}


import '../src/assets/styles/App.css';
import '../src/components/Header/header.css';
import '../src/components/Intro/intro.css';
import '../src/components/TargetConsumer/target.css';
import '../src/components/Programs/programs.css';
import '../src/components/Features/features.css';
import '../src/components/Facilities/facilities.css';
import '../src/components/Versions/versions.css';
import '../src/components/Contacts/contacts.css';
import '../src/components/Footer/footer.css';

function MyApp({ Component, pageProps }) {
  return <>
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      />
  <Component {...pageProps} />;
  </> 
}
export default MyApp;
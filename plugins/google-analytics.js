/* eslint-disable */
export default ({ app }) => {
  if (process.browser) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-ZP030NNLMF');
  }
};

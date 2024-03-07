import date from "../util/date";

function Footer() {
  return ( 
    <footer aria-label="Page Footer">
      <p className="text-right font-amatic pr-4">&copy; Agnieszka Wilczek {date()} - I made this and it's my precious.</p>
    </footer>
   );
}

export default Footer;
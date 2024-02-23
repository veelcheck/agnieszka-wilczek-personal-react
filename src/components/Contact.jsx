import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  const mail = 'veelcheck@gmail.com';

  return ( 
    <div className="mx-auto flex items-center">
    <ul className="p-5 text-2xl md:text-3xl text-center leading-loose bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] rounded-md">
      <li className="bg-transparent border-b border-nice-nude pb-2"><a href={`mailto:${mail}`} aria-label="Send Email" className="bg-transparent">{mail}</a></li>
      <li className="bg-transparent pt-2 md:mt-4 animate-wiggle">
        <a href="https://github.com/veelcheck" target="_blank" rel="noopener noreferrer" className="bg-transparent">
          <GitHubIcon alt="GitHub Icon" style={{ fontSize: '5rem', backgroundColor: 'rgba(255,255,255,0)'}}/>
        </a>
      </li>
    </ul>
    </div>
   );
}

export default Contact;
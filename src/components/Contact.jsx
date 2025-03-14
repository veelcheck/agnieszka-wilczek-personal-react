import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const mail = "veelcheck@gmail.com";

  const contactData = [
    {
      type: "email",
      label: "Send Email",
      href: `mailto:${mail}`,
      content: mail,
      icon: null,
      animation: "",
    },
    {
      type: "github",
      label: "GitHub",
      href: "https://github.com/veelcheck",
      content: (
        <GitHubIcon
          alt="GitHub Icon"
          style={{
            fontSize: "5rem",
            backgroundColor: "rgba(255,255,255,0)",
          }}
        />
      ),
      animation: "animate-wiggle",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/veelcheck",
      content: (
        <LinkedInIcon
          alt="Linkedin Icon"
          style={{
            fontSize: "5rem",
            backgroundColor: "rgba(255,255,255,0)",
          }}
        />
      ),
      animation: "animate-wiggle",
    },
  ];

  return (
    <section className="mx-auto flex items-center flex-col justify-center gap-2">
      {contactData.map(({ type, label, href, content, animation }, index) => (
        <div
          key={index}
          className="p-5 w-full max-w-sm text-2xl md:text-3xl text-center leading-loose bg-bg-opacity hover:bg-bg-opacity-hover rounded-md">
          <ul>
            <li
              className={`bg-transparent ${animation ? animation : ""} ${type === "email" ? "border-b border-nice-nude pb-2" : "pt-2 md:mt-4"}`}>
              <a
                href={href}
                target={type !== "email" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="bg-transparent"
                aria-label={label}>
                {content}
              </a>
            </li>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Contact;

import styles from "./Cta.module.css";

type CtaProps = {
  href: string;
  children: string;
  variant?: "solid" | "ghost" | "solidDark" | "text";
  onClick?: () => void;
};

function isExternal(href: string) {
  return href.startsWith("http");
}

export function Cta({ href, children, variant = "solid", onClick }: CtaProps) {
  const external = isExternal(href);

  return (
    <a
      href={href}
      className={`${styles.cta} ${styles[variant]}`}
      onClick={onClick}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        <svg viewBox="0 0 18 10" fill="none" aria-hidden="true">
          <path
            d="M0 5h16M12.5 1.5 17 5l-4.5 3.5"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </span>
    </a>
  );
}

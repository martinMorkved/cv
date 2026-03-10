type CVHeaderProps = {
  name: string;
  title: string;
  birthDate: string;
  email: string;
  phone: string;
  website: string;
  websiteUrl: string;
};

export function CVHeader({
  name,
  title,
  birthDate,
  email,
  phone,
  website,
  websiteUrl,
}: CVHeaderProps) {
  return (
    <header className="border-b border-[var(--card-border)] pb-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
        {name}
      </h1>
      <p className="mt-2 text-lg text-[var(--muted)]">{title}</p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-[var(--muted)]">
        <li>Født: {birthDate}</li>
        <li>
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </li>
        <li>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:underline">
            {phone}
          </a>
        </li>
        <li>
          <a
            href={websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {website}
          </a>
        </li>
      </ul>
    </header>
  );
}

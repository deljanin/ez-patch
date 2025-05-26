export function H1({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h1 className={`font-montserrat text-4xl sm:text-5xl ${styles}`}>
      {children}
    </h1>
  );
}

export function H2({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h2 className={`font-montserrat text-4xl sm:text-5xl ${styles}`}>
      {children}
    </h2>
  );
}

export function H3({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h3 className={`font-montserrat text-xl sm:text-3xl ${styles}`}>
      {children}
    </h3>
  );
}

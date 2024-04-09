const Imprint = () => {
  return (
    <div className="h-svh flex flex-col items-center py-28 px-8">
      <h1 className="text-3xl mb-10">Impressum</h1>

      <p>
        Pascal Morgan
        <br />
        Richardstr. 99
        <br />
        12043 Berlin
      </p>

      <h2 className="text-2xl mt-10 mb-8">Kontakt</h2>
      <p className="mb-8 text-center">
        Telefon: 030 74923373
        <br />
        E-Mail: pascaliscoding@gmail.com
      </p>

      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <div className="text-center">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
        </p>
      </div>
    </div>
  );
};
export default Imprint;

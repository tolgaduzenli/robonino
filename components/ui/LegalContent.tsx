import { colors } from '@/lib/content/colors';

/** A section block is either a paragraph (string) or a bullet list (string[]). */
export type LegalBlock = string | string[];
export type LegalSection = { heading: string; blocks: LegalBlock[] };

/** Shared prose renderer for legal pages (Privacy Policy, Terms & Conditions). */
export function LegalContent({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="px-7 pb-24 pt-16">
      <div className="mx-auto max-w-[760px]">
        <h1
          className="m-0 mb-2.5 font-poppins text-[clamp(28px,3.8vw,42px)] font-extrabold tracking-tight"
          style={{ color: colors.textDark }}
        >
          {title}
        </h1>
        <p className="m-0 mb-8 text-sm font-bold" style={{ color: colors.textFaint }}>
          {lastUpdated}
        </p>
        <p className="m-0 mb-10 text-[15.5px] leading-[1.75]" style={{ color: colors.textBody }}>
          {intro}
        </p>

        <div className="flex flex-col gap-9">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2
                className="m-0 mb-3 font-poppins text-[19px] font-bold"
                style={{ color: colors.textDark }}
              >
                {section.heading}
              </h2>
              <div className="flex flex-col gap-3">
                {section.blocks.map((block, i) =>
                  Array.isArray(block) ? (
                    <ul key={i} className="m-0 flex flex-col gap-2 pl-5" style={{ listStyleType: 'disc' }}>
                      {block.map((item) => (
                        <li key={item} className="text-[15.5px] leading-[1.7]" style={{ color: colors.textBody }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={i}
                      className="m-0 text-[15.5px] leading-[1.75]"
                      style={{ color: colors.textBody, whiteSpace: 'pre-line' }}
                    >
                      {block}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

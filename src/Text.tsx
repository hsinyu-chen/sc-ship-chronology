import { useMemo } from "react";

function Text({ text }: { text: string | undefined }) {
    const html = useMemo(() => {
        if (!text) return '';

        const fragment = text.split(/(?=\[[^\]]+\]\([^\)]+\))|(?<=\[[^\]]+\]\([^\)]+\))/g);
        const fragments: JSX.Element[] = [];
        let i = 0;
        for (const f of fragment) {
            if (f) {
                i++;
                const m = /\[([^\]]+)\]\(([^\)]+)\)/.exec(f);
                fragments.push(m ? (<a key={i} href={m[2]} target="galactapedia" > {m[1]}</a>) : (<span key={i} >{f}</span>))
            }
        }
        return fragments;
    }, [text]);
    return <span className="text">{html}</span>
}

export default Text;
import { useEffect, useState } from "react";

type Props = {
  command: string;
  output: string[];
  start: boolean;
  speed?: number;
  prompt?: string;
};

const TerminalTyping = ({
  command,
  output,
  start,
  speed = 25,
  prompt = "kemal@cyber:~$",
}: Props) => {
  const [cmdText, setCmdText] = useState("");
  const [lines, setLines] = useState<string[]>([""]);
  const [cmdDone, setCmdDone] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  /* TYPE COMMAND */
  useEffect(() => {
    if (!start || cmdDone) return;
    if (cmdText.length >= command.length) {
      setCmdDone(true);
      return;
    }

    const t = setTimeout(() => {
      setCmdText(prev => prev + command[prev.length]);
    }, speed);

    return () => clearTimeout(t);
  }, [start, cmdText, cmdDone, command, speed]);

  /* TYPE OUTPUT */
  useEffect(() => {
    if (!start || !cmdDone) return;
    if (lineIndex >= output.length) return;

    const current = output[lineIndex];

    if (current === "") {
      const t = setTimeout(() => {
        setLines(prev => [...prev, ""]);
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      }, speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLines(prev => {
        const updated = [...prev];
        updated[lineIndex] =
          (updated[lineIndex] ?? "") + current[charIndex];
        return updated;
      });

      if (charIndex + 1 < current.length) {
        setCharIndex(prev => prev + 1);
      } else {
        setCharIndex(0);
        setLineIndex(prev => prev + 1);
        setLines(prev => [...prev, ""]);
      }
    }, speed);

    return () => clearTimeout(t);
  }, [start, cmdDone, lineIndex, charIndex, output, speed]);

  return (
    <div className="terminal">
      <p className="terminal-line">
        <span className="prompt">{prompt}</span>{" "}
        <span className="command">{cmdText}</span>
        {!cmdDone && <span className="cursor">█</span>}
      </p>

      {cmdDone && (
        <div className="terminal-output">
          {lines.map((l, i) => (
            <p key={i}>
              {l || "\u00A0"}
              {i === lines.length - 1 && (
                <span className="cursor">█</span>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default TerminalTyping;

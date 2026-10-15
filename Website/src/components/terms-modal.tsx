import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import paragraphs from "@/lib/terms-document.json";

export function TermsModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="terms-modal" aria-describedby="terms-description">
      <div className="terms-toolbar">
        <DialogTitle className="terms-title">{paragraphs[0]?.map(run => run.text).join("")}</DialogTitle>
        <Button asChild variant="outline" className="terms-download"><a href={`${import.meta.env.BASE_URL}documents/TermsAndConditions.docx`} download="TermsAndConditions.docx"><Download />Download .docx</a></Button>
      </div>
      <div className="terms-scroll">
        {paragraphs.slice(1).map((runs, index) => {
          const content = runs.map((run, runIndex) => <span key={runIndex} className={`${run.bold ? "font-bold" : ""} ${run.italic ? "italic" : ""} ${run.underline ? "underline" : ""}`}>{run.text}</span>);
          return index === 0 ? <DialogDescription id="terms-description" className="terms-subtitle" key={index}>{content}</DialogDescription> : <p className="terms-paragraph" key={index}>{content}</p>;
        })}
      </div>
    </DialogContent>
  </Dialog>;
}
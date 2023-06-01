"use client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { useNotification } from "ui/assets/utils";
import { Snackbar } from "ui/atoms/snackbar/snackbar";

export const CopyButton = ({ value }: { value: string }) => {
  const [copyNoteText, setCopyNoteText] = useNotification("", 5000);

  return (
    <>
      <CopyToClipboard text={value || ""}>
        <DocumentDuplicateIcon
          onClick={() => setCopyNoteText(`Copied: "${value}"`)}
          className="cursor-pointer h-4 w-4 text-onSurfaceMedium hover:text-onSurfacePrimaryMedium focus:text-accentPrimary text-surfacePrimaryDark text-xs"
        />
      </CopyToClipboard>
      {copyNoteText !== "" && (
        <Snackbar message={copyNoteText} toggleState={setCopyNoteText} />
      )}
    </>
  );
};

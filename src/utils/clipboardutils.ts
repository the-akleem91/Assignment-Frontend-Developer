import { toast } from "react-toastify";

export async function handleClipboardCopy(url: string) {
  try {
    await navigator.clipboard.writeText(url);
    console.log("Text copied to clipboard: " + url);
    toast.success("Copied to Clipboard", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (err) {
    console.error("Failed to copy text: " + err);
    toast.error("Something went wrong ", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

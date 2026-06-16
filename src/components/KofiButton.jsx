import { KOFI_USERNAME } from '../lib/constants';
export default function KofiButton() {
  return (
    <a href={`https://ko-fi.com/${KOFI_USERNAME}`} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#cc0000] hover:bg-[#aa0000] text-white px-5 py-3 rounded-full font-bold shadow-lg transition text-sm">
      ☕ Support Us
    </a>
  );
}

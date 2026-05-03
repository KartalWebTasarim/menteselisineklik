export default function MobileSticky() {
  return (
    <div className="mobile-sticky" role="navigation" aria-label="Hızlı iletişim">
      {/* Phone */}
      <a
        href="tel:+905403363873"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-brand-dark text-white py-3 transition-colors hover:bg-brand-slate active:bg-black"
        aria-label="Hemen Ara: +90 540 336 38 73"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
        <span className="text-[10px] font-semibold">Ara</span>
      </a>

      {/* Divider */}
      <div className="w-px bg-white/10 flex-shrink-0" aria-hidden="true" />

      {/* WhatsApp */}
      <a
        href="https://wa.me/905403363873?text=Merhaba%2C%20menteşeli%20sineklik%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#25D366] text-white py-3 transition-colors hover:bg-[#1ebe5e] active:bg-[#18a352]"
        aria-label="WhatsApp ile mesaj gönder"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 0C5.374 0 0 5.373 0 12c0 2.107.546 4.09 1.502 5.814L.057 23.776a.5.5 0 00.607.637l6.098-1.598A11.95 11.95 0 0012.004 24C18.63 24 24 18.627 24 12S18.63 0 12.004 0zm0 21.818a9.815 9.815 0 01-5.003-1.369l-.356-.213-3.712.974.992-3.618-.234-.375A9.819 9.819 0 012.182 12c0-5.42 4.402-9.818 9.822-9.818 5.419 0 9.814 4.398 9.814 9.818 0 5.42-4.395 9.818-9.814 9.818z" />
        </svg>
        <span className="text-[10px] font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}

// Fixed ambient backdrop: soft drifting glows over a faint console grid.
// Purely decorative, sits behind all content, ignores pointer events.
export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg pointer-events-none">
      <div className="absolute inset-0 bg-console-grid bg-grid opacity-60" />

      <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-gold/10 blur-[120px] animate-drift" />
      <div
        className="absolute top-1/2 -right-40 w-[460px] h-[460px] rounded-full bg-teal/10 blur-[120px] animate-drift"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-gold/5 blur-[100px] animate-drift"
        style={{ animationDelay: '6s' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
    </div>
  )
}

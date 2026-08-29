import { useMemo } from 'react'

export default function Particles({ count = 45 }) {
  const particles = useMemo(() => {
    const rand = (n) => {
      const x = Math.sin(n) * 10000
      return x - Math.floor(x)
    }
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: rand(i + 1) * 100,
      size: 1.5 + rand(i + 2) * 2.5,
      duration: 9 + rand(i + 3) * 13,
      delay: rand(i + 4) * 18,
      gold: rand(i + 5) > 0.4,
    }))
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-full rounded-full"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.gold ? 'rgba(212,175,55,0.8)' : 'rgba(180,180,180,0.55)',
            boxShadow: p.gold
              ? '0 0 8px 1px rgba(212,175,55,0.55)'
              : '0 0 6px 1px rgba(200,200,200,0.3)',
            animation: `ember ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

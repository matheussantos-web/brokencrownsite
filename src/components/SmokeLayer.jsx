import { useMemo } from 'react'

export default function SmokeLayer({ count = 6 }) {
  const blobs = useMemo(() => {
    const rand = (n) => {
      const x = Math.sin(n) * 10000
      return x - Math.floor(x)
    }
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: rand(i + 1) * 100,
      top: 15 + rand(i + 2) * 70,
      size: 240 + rand(i + 3) * 320,
      duration: 18 + rand(i + 4) * 20,
      delay: rand(i + 5) * 12,
    }))
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {blobs.map((b) => (
        <span
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: b.size,
            height: b.size,
            background:
              'radial-gradient(circle, rgba(120,120,125,0.16) 0%, rgba(90,90,95,0.08) 45%, transparent 70%)',
            filter: 'blur(30px)',
            animation: `smokeDrift ${b.duration}s ease-in-out ${b.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}

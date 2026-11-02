import { usages } from '../data/praktikum'

export function UsageTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface-raised">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-surface-muted/60 px-5 py-4 sm:px-6">
        <p className="font-mono text-label uppercase text-ink-soft">
          Takaran untuk 1 liter air
        </p>
        <p className="font-mono text-label uppercase text-primary">
          Encerkan sebelum dipakai
        </p>
      </div>

      <div className="hidden md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Takaran pengenceran eco-enzyme untuk pembersih lantai, sabun cuci
            piring, dan pupuk cair semprot
          </caption>
          <thead>
            <tr className="border-b border-line">
              <th
                scope="col"
                className="px-6 py-3 font-mono text-label uppercase text-ink-soft"
              >
                Keperluan
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-mono text-label uppercase text-ink-soft"
              >
                Takaran
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-mono text-label uppercase text-ink-soft"
              >
                Cara pakai
              </th>
            </tr>
          </thead>
          <tbody>
            {usages.map((usage) => {
              const Icon = usage.icon

              return (
                <tr
                  key={usage.id}
                  className="border-b border-line last:border-b-0"
                >
                  <th scope="row" className="px-6 py-4 align-top font-normal">
                    <span className="flex items-center gap-3 text-sm font-medium text-ink">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-primary">
                        <Icon className="size-4" strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      {usage.use}
                    </span>
                  </th>
                  <td className="whitespace-nowrap px-6 py-4 align-top">
                    <span className="font-mono text-sm text-ink">{usage.dose}</span>
                    <span className="text-sm text-ink-soft"> + 1 L air</span>
                    <span className="mt-1 block font-mono text-label uppercase text-ink-soft">
                      Rasio {usage.ratio}
                    </span>
                  </td>
                  <td className="max-w-xs px-6 py-4 align-top text-sm leading-relaxed text-ink-soft">
                    {usage.method}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-line md:hidden">
        {usages.map((usage) => {
          const Icon = usage.icon

          return (
            <li key={usage.id} className="min-w-0 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-primary">
                  <Icon className="size-4" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="text-sm font-medium text-ink">{usage.use}</h3>
                <span className="ml-auto shrink-0 font-mono text-label uppercase text-ink-soft">
                  {usage.ratio}
                </span>
              </div>

              <p className="mt-3 text-sm text-ink">
                <span className="font-mono">{usage.dose}</span>
                <span className="text-ink-soft"> + 1 L air</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {usage.method}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

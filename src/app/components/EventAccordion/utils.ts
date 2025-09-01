export type SectionStart = {
  id: string;
  title: string;
  start: number; // inclusive yyyymmdd
};

export type SectionBoundary = SectionStart & {
  endExclusive?: number; // next section's start; value must be < endExclusive to belong
};

export function buildSectionBoundaries(
  sectionStarts: SectionStart[]
): SectionBoundary[] {
  const sorted = [...sectionStarts].sort((a, b) => b.start - a.start);
  return sorted.map((section, index) => {
    const prev = sorted[index - 1];
    return {
      ...section,
      endExclusive: prev ? prev.start : undefined
    };
  });
}

export function isDateInSection(
  dateInt: number,
  section: SectionBoundary
): boolean {
  if (dateInt < section.start) return false;
  if (section.endExclusive !== undefined && dateInt >= section.endExclusive)
    return false;
  return true;
}

export function toComparableDate(value: number | string): number {
  if (typeof value === 'number') return value;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function formatDateFromInt(dateInt: number): string {
  const dateStr = dateInt.toString();
  const year = parseInt(dateStr.slice(0, 4), 10);
  const month = parseInt(dateStr.slice(4, 6), 10) - 1;
  const day = parseInt(dateStr.slice(6), 10);

  const date = new Date(year, month, day);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
}

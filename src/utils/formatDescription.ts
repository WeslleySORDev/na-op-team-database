export function formatDescription(description: string) {
  return description
    .replace(
      /<Damage>(.*?)<Damage>/g,
      '<span class="text-red-500 font-bold">$1</span>'
    )
    .replace(
      /<Defense>(.*?)<Defense>/g,
      '<span class="text-green-500 font-bold">$1</span>'
    )
    .replace(
      /<Effects>(.*?)<Effects>/g,
      '<span class="text-yellow-500 font-bold">$1</span>'
    )
    .replace(
      /<Improvements>(.*?)<Improvements>/g,
      '<span class="text-blue-500 font-bold">$1</span>'
    )
    .replace(
      /<Classes>(.*?)<Classes>/g,
      '<span class="text-purple-500 font-bold">$1</span>'
    )
    .replace(
      /<SkillName>(.*?)<SkillName>/g,
      '<span class="text-orange-500 font-bold">$1</span>'
    );
}

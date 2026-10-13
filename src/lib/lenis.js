// Référence partagée vers l'instance Lenis (défilement fluide)
export const lenisRef = { current: null }

export function scrollToTop(immediate = true) {
  if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate })
  else window.scrollTo(0, 0)
}

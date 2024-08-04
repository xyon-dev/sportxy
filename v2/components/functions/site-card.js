/**
 * This template is meant to be used with ContentLoop--
 * IN: data obj :: site name, site initial, checked | bool--
 * OUT: player card template with data
 */

export function siteCard(checked, site){
checked ? checked = "checked" : checked = "";
return `
  <label for="${site.initials}">
    <input type="radio" id="${site.initials}" name="site-select" value="${site.initials}" ${checked}></label>
    <p class="site-options__link">${site.title}</p>
  </label>\
`
}

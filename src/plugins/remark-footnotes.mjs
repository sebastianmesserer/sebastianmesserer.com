/**
 * Remark plugin: transforms <footnote id="N">text</footnote> in markdown into:
 * 1. Superscript references with CSS tooltip on hover
 * 2. An endnotes section appended at the bottom of the document
 */
export function remarkFootnotes() {
  return function (tree) {
    const footnotes = [];

    function escapeAttr(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    function processNode(node) {
      if (node.type === 'html') {
        node.value = node.value.replace(
          /<footnote[^>]*id="(\d+)"[^>]*>([\s\S]*?)<\/footnote>/g,
          (_, id, content) => {
            const num = footnotes.length + 1;
            const text = content.trim();
            footnotes.push({ num, text });
            return `<sup class="fn-ref" data-content="${escapeAttr(text)}" id="fnref-${num}"><a href="#fn-${num}" class="fn-link">${num}</a></sup>`;
          }
        );
      }
      if (node.children) {
        node.children.forEach(processNode);
      }
    }

    processNode(tree);

    if (footnotes.length > 0) {
      const items = footnotes
        .map(
          (f) =>
            `<li id="fn-${f.num}" class="fn-item"><span class="fn-num">${f.num}.</span> ${f.text}</li>`
        )
        .join('\n');

      tree.children.push({
        type: 'html',
        value: `<div class="footnotes"><p class="footnotes-label">Notes</p><ol class="fn-list">${items}</ol></div>`,
      });
    }
  };
}

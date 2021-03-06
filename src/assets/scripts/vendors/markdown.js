function markdownTranspiler(md){
  //UL
  const list = md.match(/^\>(.+)/g)

  if(list){
    const match = [...list[0].matchAll(/([^\>])+/g)]
    let listHtml = '<ul class="list">';

    for(const li of match){
      let text = li[0].trim()
      const hasBullet = !!text.match(/●/g)

      if(hasBullet){
        const noBulletText = text.replace(/●/g,'')
        text = noBulletText
      }
      
      listHtml = listHtml + `<li>${!!hasBullet && '<span>●</span>'}<p>${text}</p></li>`;
    }

    listHtml = listHtml + '</ul>'

    md = listHtml;
  }

  //ol
  md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
  md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
  md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
  
  //blockquote
  md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
  
  //Viñetas
  md = md.replace(/\●/g, '<img class="img-bullet" src="/dist/images/icons/bullet.png" alt="icon">')

  //h
  md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
  md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
  md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
  md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
  md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
  md = md.replace(/[\#]{1}(.+)/g, '<h1>$1</h1>');
  
  //alt h
  md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
  md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
  
  //images
  md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
  
  //links
  md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
  
  //font styles
  md = md.replace(/[\*]{3}([^\*]+)[\*]{3}/g, '<b>$1</b>');
  md = md.replace(/[\*]{2}([^]*)[\*]{2}/g, '<em>$1</em>');
  md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
  md = md.replace(/[\_]{1}([^\_]+)[\_]{1}/g, '<u>$1</u>');
  
  //pre
  md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
  md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
  
  //code
  md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');

  //Breack Row
  md = md.replace(/\\n/g, '<br/>')
  
  
  return md;
}
//p
// md = md.replace(/^\s*(\n)?(.+)/gm, function(m){
//   return  /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
// });

//strip p from pre
//md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');

// var rawMode = true;
//     mdEl = document.getElementById('markdown'),
//     outputEl = document.getElementById('output-html'),
//     parse = function(){
//       outputEl[rawMode ? "innerText" : "innerHTML"] = parseMd(mdEl.innerText);
//     };

// parse();
// mdEl.addEventListener('keyup', parse, false);

//Raw mode trigger btn
(function(){
  
  // var trigger = document.getElementById('raw-switch'),
  //     status = trigger.getElementsByTagName('span')[0],
  //     updateStatus = function(){
  //       status.innerText = rawMode ? 'On' : 'Off';
  //     };

  // updateStatus();

  // trigger.addEventListener('click', function(e){
  //   e.preventDefault();
  //   rawMode = rawMode ? false : true;
  //   updateStatus();
  //   parse();
  // }, false);
}());
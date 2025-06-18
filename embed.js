(function () {
  const html = `
    <!-- ここに価格表のHTMLを貼る --><table style="width:100%; border-collapse: collapse;" border="1">
  <tr>
    <th style="width:60%;">商品名</th>
    <th style="width:13%;">通常価格</th>
    <th style="width:13%;">セール価格</th>
    <th style="width:14%;">割引率</th>
  </tr>
<tr>
  <td><a href="https://www.dospara.co.jp/TC30/MC18484-SN4783.html" target="_blank">GALLERIA RM7R-R56T 7700搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  ...
</tr><tr>
  <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18484-SN4783.html" target="_blank">GALLERIA RM7R-R56T 7700搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  <td style="width:13%;">¥224,780</td>
  <td style="width:13%;">¥224,780</td>
  <td style="width:14%;">0.0%</td>
</tr><tr>
  <td><a href="https://www.dospara.co.jp/TC30/MC18485-SN4737.html" target="_blank">GALLERIA RM7R-R57 5700X搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  ...
</tr><tr>
  <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18485-SN4737.html" target="_blank">GALLERIA RM7R-R57 5700X搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  <td style="width:13%;">¥281,480</td>
  <td style="width:13%;">¥281,480</td>
  <td style="width:14%;">0.0%</td>
</tr><tr>
  <td><a href="https://www.dospara.co.jp/TC30/MC18486-SN4767.html" target="_blank">GALLERIA XA7C-R56T Intel Core Ultra/RTX5060Ti 16GB搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  ...
</tr><tr>
  <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18486-SN4767.html" target="_blank">GALLERIA XA7C-R56T Intel Core Ultra/RTX5060Ti 16GB搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  <td style="width:13%;">¥325,480</td>
  <td style="width:13%;">¥325,480</td>
  <td style="width:14%;">0.0%</td>
</tr><tr>
  <td><a href="https://www.dospara.co.jp/TC30/MC18488-SN4757.html" target="_blank">GALLERIA XA7C-R58 Intel Core Ultra搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』<span style="margin-left: 6px; background-color:#e53935; color: #fff; font-weight:bold; padding:2px 6px; border-radius:4px; font-size: 12px;">買い時！</span></a></td>
  ...
</tr><tr>
  <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18488-SN4757.html" target="_blank">GALLERIA XA7C-R58 Intel Core Ultra搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a><span style="background-color:#ffeb3b; font-weight:bold; padding:4px 6px; border-radius:4px; margin-left:6px;">今が買い時！</span></td>
  <td style="width:13%;">¥545,180</td>
  <td style="width:13%;">¥300,000</td>
  <td style="width:14%;">45.0%</td>
</tr><tr>
  <td><a href="https://www.dospara.co.jp/TC30/MC18483-SN4821.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  ...
</tr><tr>
  <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18483-SN4821.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  <td style="width:13%;">¥181,980</td>
  <td style="width:13%;">¥181,980</td>
  <td style="width:14%;">0.0%</td>
</tr><tr>
  <td><a href="https://www.dospara.co.jp/TC30/MC18483.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  ...
</tr><tr>
  <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18483.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
  <td style="width:13%;">¥181,980</td>
  <td style="width:13%;">¥181,980</td>
  <td style="width:14%;">0.0%</td>
</tr></table>
  <p style="margin-top:10px; font-size:0.9em;">
    提供元：<a href="https://kidukeba.co.jp/" target="_blank" rel="dofollow">合同会社気づけば</a>
  </p>


  
  `;

  const container = document.createElement('div');
  container.innerHTML = html;

  document.currentScript.parentNode.insertBefore(container, document.currentScript.nextSibling);
})();

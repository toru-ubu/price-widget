(function () {
  const html = `
    <!-- ここに価格表のHTMLを貼る --><table style="width:100%; border-collapse: collapse;" border="1">
  <tr>
    <th>商品名</th>
    <th>現在価格</th>
    <th>取得日</th>
    <th>提供元</th>
  </tr>
<tr>
      <td><a href="https://www.dospara.co.jp/TC30/MC18484-SN4783.html" target="_blank">GALLERIA RM7R-R56T 7700搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
      <td>¥224,780</td>
      <td>2025/06/18</td>
      <td><a href="https://yourdomain.com" target="_blank" rel="dofollow">〇〇株式会社</a></td>
    </tr>
<tr>
      <td><a href="https://www.dospara.co.jp/TC30/MC18485-SN4737.html" target="_blank">GALLERIA RM7R-R57 5700X搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
      <td>¥281,480</td>
      <td>2025/06/18</td>
      <td><a href="https://yourdomain.com" target="_blank" rel="dofollow">〇〇株式会社</a></td>
    </tr>
<tr>
      <td><a href="https://www.dospara.co.jp/TC30/MC18486-SN4767.html" target="_blank">GALLERIA XA7C-R56T Intel Core Ultra/RTX5060Ti 16GB搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
      <td>¥325,480</td>
      <td>2025/06/18</td>
      <td><a href="https://yourdomain.com" target="_blank" rel="dofollow">〇〇株式会社</a></td>
    </tr>
<tr>
      <td><a href="https://www.dospara.co.jp/TC30/MC18488-SN4757.html" target="_blank">GALLERIA XA7C-R58 Intel Core Ultra搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
      <td>¥545,180</td>
      <td>2025/06/18</td>
      <td><a href="https://yourdomain.com" target="_blank" rel="dofollow">〇〇株式会社</a></td>
    </tr>
<tr>
      <td><a href="https://www.dospara.co.jp/TC30/MC18483-SN4821.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
      <td>¥181,980</td>
      <td>2025/06/18</td>
      <td><a href="https://yourdomain.com" target="_blank" rel="dofollow">〇〇株式会社</a></td>
    </tr>
<tr>
      <td><a href="https://www.dospara.co.jp/TC30/MC18483.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
      <td>¥181,980</td>
      <td>2025/06/18</td>
      <td><a href="https://yourdomain.com" target="_blank" rel="dofollow">〇〇株式会社</a></td>
    </tr>
</table>
  `;

  const container = document.createElement('div');
  container.innerHTML = html;

  document.currentScript.parentNode.insertBefore(container, document.currentScript.nextSibling);
})();

(function () {
  const html = `
    <!-- ここに価格表のHTMLを貼る --><style>
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  th {
    font-size: 16px;
    font-weight: bold;
    background-color: #e3f2fd;
    padding: 10px;
    border: 1px solid #ccc;
    white-space: nowrap;
  }

  td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ccc;
    min-width: 80px;
    white-space: nowrap;
  }

  /* 商品名：ちょっと広め、折り返しOK */
  td:nth-child(1) {
    min-width: 180px;
    max-width: 260px;
    word-break: break-word;
    white-space: normal;
  }

  /* 通常価格・セール価格・割引率：強調 */
  td:nth-child(2),
  td:nth-child(3),
  td:nth-child(4) {
    font-size: 22px;
    font-weight: bold;
    color: #000;
  }

  td:nth-child(n+2):nth-child(-n+5),
  th:nth-child(n+2):nth-child(-n+5) {
    min-width: 90px;
    white-space: nowrap;
  }

  @media screen and (max-width: 600px) {
    table {
      font-size: 13px;
    }
    th, td {
      padding: 6px;
    }
    td:nth-child(2),
    td:nth-child(3),
    td:nth-child(4) {
      font-size: 18px;
    }
  }
</style>

<table style="width:100%; border-collapse: collapse;" border="1">
  <tr>
    <th style="width:60%;">商品名</th>
    <th style="width:13%;">通常価格</th>
    <th style="width:13%;">現在の価格</th>
    <th style="width:14%;">割引率</th>
  </tr>

  <tr>
    <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18484-SN4783.html" target="_blank">GALLERIA RM7R-R56T 7700搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
    <td>¥224,780</td>
    <td>¥224,780</td>
    <td>0.0%</td>
  </tr>

  <tr>
    <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18485-SN4737.html" target="_blank">GALLERIA RM7R-R57 5700X搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
    <td>¥281,480</td>
    <td>¥281,480</td>
    <td>0.0%</td>
  </tr>

  <tr>
    <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18486-SN4767.html" target="_blank">GALLERIA XA7C-R56T Intel Core Ultra/RTX5060Ti 16GB搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
    <td>¥325,480</td>
    <td>¥325,480</td>
    <td>0.0%</td>
  </tr>

  <tr>
    <td style="width:60%;">
      <a href="https://www.dospara.co.jp/TC30/MC18488-SN4757.html" target="_blank">
        GALLERIA XA7C-R58 Intel Core Ultra搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』
      </a>
      <span style="background-color:#e53935; color:#fff; font-weight:bold; padding:4px 6px; border-radius:4px; margin-left:6px;">今が買い時！</span>
    </td>
    <td>¥545,180</td>
    <td>¥300,000</td>
    <td>45.0%</td>
  </tr>

  <tr>
    <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18483-SN4821.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
    <td>¥181,980</td>
    <td>¥181,980</td>
    <td>0.0%</td>
  </tr>

  <tr>
    <td style="width:60%;"><a href="https://www.dospara.co.jp/TC30/MC18483.html" target="_blank">GALLERIA RM5R-R56T 4500搭載 夏の準備応援祭特別モデル 『Minecraft: Java ＆ Bedrock Edition for PC、PC Game Pass同梱版』</a></td>
    <td>¥181,980</td>
    <td>¥181,980</td>
    <td>0.0%</td>
  </tr>
</table>

<p style="margin-top:10px; font-size:0.9em;">
  提供元：<a href="https://kidukeba.co.jp/" target="_blank" rel="dofollow">合同会社気づけば</a>
</p>


  
  `;

  const container = document.createElement('div');
  container.innerHTML = html;

  document.currentScript.parentNode.insertBefore(container, document.currentScript.nextSibling);
})();

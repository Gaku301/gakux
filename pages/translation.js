import Head from 'next/head';
import axios from 'axios';
import style from '../styles/Translation.module.css';
import { useState } from 'react';


export default function Translation() {

  const [translatedText, setTranslatedText] = useState('');
  // GAS TranslateApi
  const url = 'https://script.google.com/macros/s/AKfycbxWN6IoDLCGByj68Vw7C3Xc76PMmQ_D0eDvPvay4GmsVgLzLXuwDZi15mkAaUnVd3fwug/exec';
  // option tag
  const options = [
    {value: 'en', text: '英語'},
    {value: 'ar', text: 'アラビア語'},
    {value: 'it', text: 'イタリア語'},
    {value: 'id', text: 'インドネシア語'},
    {value: 'nl', text: 'オランダ語'},
    {value: 'es', text: 'スペイン語'},
    {value: 'th', text: 'タイ語'},
    {value: 'de', text: 'ドイツ語'},
    {value: 'fr', text: 'フランス語'},
    {value: 'vi', text: 'ベトナム語'},
    {value: 'pt', text: 'ポルトガル語'},
    {value: 'ru', text: 'ロシア語'},
    {value: 'ko', text: '韓国語'},
    {value: 'zh-CN', text: '中国語'},
  ];

  const beforeTranslate = (event) => {
    let value = event.target.value;
    // 改行ごとに配列化
    let text_array = value.split('\n');

    let bind_array = [];
    let bind_text = '';
    text_array.forEach((value) => {
      if(value != ''){
        // 値がある場合
        bind_text += value + '\n';
      } else{
        bind_array.push(bind_text);
        // テキストを初期化
        bind_text = '';
      };
    })

    const translated_array = [];
    const target_language = document.getElementById('target_language').value;
    bind_array.forEach((value, index) => {
      // 改行ごとに配列化
      let array = value.split('\n');
      array.forEach((val, index) => {
        if(val == ""){
          // 最後の空文字を排除
          array.splice(index, 1);
        }
      });
      array.forEach((val, index) => {
        // 1,2行目以外を翻訳する
        if(index > 1){
          let request_data = {
            crossDomain: true,
            params: {
              text: val,
              source: 'ja',
              target: target_language,
            },
          };
          // TranslateApi接続
          axios.get(url, request_data).then((res) => {
            let translated_text = res.data.text;
            array.splice(index, 1, translated_text);
          }).catch((error) => { console.log(error)});
        }
      });
      // 翻訳後のテキストを結合(setTimeoutしないとaxios通信の前に処理が走ってしまう)
      setTimeout(() => {
        let joined_array = array.join('\n');
        translated_array.push(joined_array);
      }, 2000);
    });
    // 全ての翻訳テキストを結合
    setTimeout(() => {
      const translated = translated_array.join('\n\n');
      setTranslatedText(translated);
    }, 2500);
  }

  return (
    <div>
      <Head>
        <title>翻訳</title>
      </Head>
      <main>
        <div className={style.text_center}>
          <div>
            <label htmlFor="input_label">翻訳する言語</label>
            <select id="target_language">
              {options.map(({value, text}, index) => 
                <option key={index} value={value}>{text}</option>
              )};
            </select>
          </div>
          <textarea 
            className={style.text_area}
            rows="10"
            onChange={beforeTranslate}
          >
          </textarea>
          {/* 翻訳後のデータ */}
          <textarea 
            className={style.text_area}
            rows="10"
            readOnly
            defaultValue={translatedText}
          >
          </textarea>
        </div>
      </main>
    </div>
  );
}
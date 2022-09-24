import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [] // 初期値は空の配列とする

  add(message: string) { // 文字列でメッセージを受け取る
    this.messages.push(message)  // messegesプロパティに、受け取ったメッセージを追加する
  }

  clear() { // 自身のmessagesプロパティをクリアするメソッド
    this.messages = []
  }
}

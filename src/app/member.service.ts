import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Member }         from './member';
import { MEMBERS }        from './mock-members';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  // memberServiceの中でmessageServiceが使えるようにDIする
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { } 

  // メッセージを追加する
  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: 社員一覧データを取得しました')
    return of(MEMBERS)
  }

  // 社員データを取得する
  getMember(id: number): Observable<Member | any> {
    this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました`)
    return of(MEMBERS.find(member => member.id === id))
  }
}

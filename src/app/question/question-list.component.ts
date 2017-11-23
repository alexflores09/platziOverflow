import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: [`
      i{
        font-size: 48px;
      }
      i.help{
        width: 48px !important;
        height: 48px !important;
        padding: 0 !important;
        font-size: 48px !important;
      }
      .add-question{
        position: fixed;
        bottom: 30px;
        right: 30px;
        font-size: 25px;
      }
    `],
  providers: [ QuestionService ]
})

export class QuestionListComponent implements OnInit {
  questions: Question[];
  loading = true;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService
      .getQuestions()
      .then((question: Question[]) => {
        this.questions = question;
        this.loading = false;
      });
  }
}

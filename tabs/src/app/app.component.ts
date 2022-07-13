import { Component } from '@angular/core';
import * as microsoftTeams from "@microsoft/teams-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tab';

  public shareToTeams()
  {
    microsoftTeams.initialize(() => {
      microsoftTeams.sharing.shareWebContent({
        content: [
          {
            type: 'URL',
            url: 'https://my.url',
            message: 'Some message',
            preview: true
          }
        ]
      });
    });
    /*microsoftTeams.getContext((context: microsoftTeams.Context) => {
      context.
    });*/
  }
}

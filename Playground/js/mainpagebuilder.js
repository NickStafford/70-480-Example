function populateMain() {
          var msg = new Windows.UI.Popups.MessageDialog("Tested");
       //   msg.showAsync();

          var msg = new Windows.UI.Popups.MessageDialog("Some error has occurred.");
          
          buildTabs(msg);
};

function buildTabs(msgBox) {
          if (msgBox == typeof Windows.UI.Popups.MessageDialog) {
                    msgBox.Content = "buildTabs Tested";
          }

          msgBox.showAsync();
};
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.name = '';
            this.position = '';
            this.img = 'http://imgur.com/N0JqEb7.png';
            this.phone = '';
            this.facebook = '';
            this.github = '';
            this.linkedin = '';
            this.twitter = '';
            this.instagram = '';
        }
        Object.defineProperty(App.prototype, "formattedPhone", {
            get: function () {
                return this.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            },
            enumerable: true,
            configurable: true
        });
        App.prototype.copyToClipboard = function () {
            window.getSelection().selectAllChildren(this.signature);
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('Copying text command was ' + msg);
            }
            catch (err) {
                alert('Oops, unable to copy');
            }
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBRUUsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxRQUFHLEdBQUcsOEJBQThCLENBQUM7WUFDckMsVUFBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osYUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7WUFDYixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBY2pCLENBQUM7UUFiQyxzQkFBSSwrQkFBYztpQkFBbEI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQyxDQUFDO1lBQ25FLENBQUM7OztXQUFBO1FBQ0QsNkJBQWUsR0FBZjtZQUNFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDO2dCQUNILElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLElBQUksR0FBRyxHQUFHLFVBQVUsR0FBRyxZQUFZLEdBQUcsY0FBYyxDQUFDO2dCQUNyRCxLQUFLLENBQUMsMkJBQTJCLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNILENBQUM7UUFDSCxVQUFDO0lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtJQXhCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcbiAgc2lnbmF0dXJlO1xuICBuYW1lID0gJyc7XG4gIHBvc2l0aW9uID0gJyc7XG4gIGltZyA9ICdodHRwOi8vaW1ndXIuY29tL04wSnFFYjcucG5nJztcbiAgcGhvbmUgPSAnJztcbiAgZmFjZWJvb2sgPSAnJztcbiAgZ2l0aHViID0gJyc7XG4gIGxpbmtlZGluID0gJyc7XG4gIHR3aXR0ZXIgPSAnJztcbiAgaW5zdGFncmFtID0gJyc7XG4gIGdldCBmb3JtYXR0ZWRQaG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waG9uZS5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCAnKCQxKSAkMi0kMycpO1xuICB9XG4gIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuc2VsZWN0QWxsQ2hpbGRyZW4odGhpcy5zaWduYXR1cmUpO1xuICAgIHRyeSB7XG4gICAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICB2YXIgbXNnID0gc3VjY2Vzc2Z1bCA/ICdzdWNjZXNzZnVsJyA6ICd1bnN1Y2Nlc3NmdWwnO1xuICAgICAgYWxlcnQoJ0NvcHlpbmcgdGV4dCBjb21tYW5kIHdhcyAnICsgbXNnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KCdPb3BzLCB1bmFibGUgdG8gY29weScpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><form class=\"form form-horizontal\"><h1>Create a Email Signature</h1><div class=\"form-group\"><label for=\"name\">Full Name:</label><input type=\"text\" name=\"name\" value.bind=\"name\"></div><div class=\"form-group\"><label for=\"position\">Position:</label><input type=\"text\" name=\"position\" value.bind=\"position\"></div><div class=\"form-group\"><label for=\"phone\">Phone:</label><input type=\"text\" name=\"phone\" value.bind=\"phone\"></div><div class=\"form-group\"><label for=\"facebook\">Facebook Link:</label><input type=\"text\" name=\"facebook\" value.bind=\"facebook\"></div><div class=\"form-group\"><label for=\"github\">Github Link:</label><input type=\"text\" name=\"github\" value.bind=\"github\"></div><div class=\"form-group\"><label for=\"linkedin\">LinkedIn Link:</label><input type=\"text\" name=\"linkedin\" value.bind=\"linkedin\"></div><div class=\"form-group\"><label for=\"twitter\">Twitter Link:</label><input type=\"text\" name=\"twitter\" value.bind=\"twitter\"></div><div class=\"form-group\"><label for=\"instagram\">Instagram Link:</label><input type=\"text\" name=\"instagram\" value.bind=\"instagram\"></div><button type=\"button\" name=\"button\" click.trigger=\"copyToClipboard()\"><i class=\"fa fa-clipboard\"></i> Copy to Clipboard</button></form><div class=\"preview\"><h2>Preview:</h2><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"470\" style=\"width:470px;border-top:1px solid #45668e\" ref=\"signature\"><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr valign=\"top\"><td style=\"padding-left:10px;width:10px;padding-right:10px\"><img src=\"${img ||'http://imgur.com/N0JqEb7.png'}\" width=\"65\" height=\"65\" alt=\"photo\" style=\"-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%\"></td><td style=\"border-right:1px solid #45668e\"></td><td style=\"text-align:initial;font:14px Arial;color:#646464;padding:0 10px\"><div if.bind=\"name || position\"><b class=\"text-color theme-font\" if.bind=\"name\">${name}</b><br><span if.bind=\"position\">${position}</span><br></div><div style=\"color:#8d8d8d;font-size:13px;padding:5px 0 0 0\"><a href=\"tel:${formattedPhone}\" style=\"color:#8d8d8d;text-decoration:none\">${formattedPhone}</a><span if.bind=\"phone\" style=\"color:#45668e;display:inline-block\">&nbsp;|&nbsp;</span> <span><a href=\"http://www.vivvo.com\" target=\"_blank\" style=\"color:#8d8d8d;text-decoration:none\">www.vivvo.com</a></span></div><div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td align=\"left\" style=\"text-align:center\"><a href=\"http://www.vivvo.com\" target=\"_blank\"><img style=\"padding-top:5px\" height=\"16\" src=\"http://imgur.com/CSoTzzZ.png\"></a></td><td if.bind=\"facebook || linkedin || twitter || instagram\" align=\"left\" style=\"padding:5px;text-align:center\"><span style=\"color:#45668e;display:inline-block\">|</span></td><td if.bind=\"facebook\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${facebook}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/2UJrwMf.png\"></a></td><td if.bind=\"github\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${github}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://imgur.com/lXYrnWk.png\"></a></td><td if.bind=\"linkedin\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${linkedin}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/ksLvq7c.png\"></a></td><td if.bind=\"twitter\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${twitter}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/PZfIGAn.png\"></a></td><td if.bind=\"instagram\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${instagram}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://imgur.com/AqphLeH.png\"></a></td></tr></tbody></table></div></td></tr></tbody></table></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
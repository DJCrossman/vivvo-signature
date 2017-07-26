define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.name = '';
            this.position = '';
            this.img = 'http://imgur.com/N0JqEb7.png';
            this._phone = '';
            this._facebook = '';
            this._github = '';
            this._linkedin = '';
            this._twitter = '';
            this._instagram = '';
        }
        Object.defineProperty(App.prototype, "facebook", {
            get: function () {
                return this._facebook ? 'https://www.facebook.com/' + this._facebook : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "github", {
            get: function () {
                return this._github ? 'https://github.com/' + this._github : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "linkedin", {
            get: function () {
                return this._linkedin ? 'https://www.linkedin.com/in/' + this._linkedin : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "twitter", {
            get: function () {
                return this._twitter ? 'https://twitter.com/' + this._twitter : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "instagram", {
            get: function () {
                return this._instagram ? 'https://www.instagram.com/' + this._instagram : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "phone", {
            get: function () {
                return this._phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBRUUsU0FBSSxHQUFHLEVBQUUsQ0FBQztZQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxRQUFHLEdBQUcsOEJBQThCLENBQUM7WUFDckMsV0FBTSxHQUFHLEVBQUUsQ0FBQztZQUNaLGNBQVMsR0FBRyxFQUFFLENBQUM7WUFDZixZQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsY0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNmLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBNkJsQixDQUFDO1FBNUJDLHNCQUFJLHlCQUFRO2lCQUFaO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUEyQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQzVFLENBQUM7OztXQUFBO1FBQ0Qsc0JBQUksdUJBQU07aUJBQVY7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEUsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBSSx5QkFBUTtpQkFBWjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUMvRSxDQUFDOzs7V0FBQTtRQUNELHNCQUFJLHdCQUFPO2lCQUFYO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3JFLENBQUM7OztXQUFBO1FBQ0Qsc0JBQUksMEJBQVM7aUJBQWI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDL0UsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBSSxzQkFBSztpQkFBVDtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDcEUsQ0FBQzs7O1dBQUE7UUFDRCw2QkFBZSxHQUFmO1lBQ0UsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxHQUFHLEdBQUcsVUFBVSxHQUFHLFlBQVksR0FBRyxjQUFjLENBQUM7Z0JBQ3JELEtBQUssQ0FBQywyQkFBMkIsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNoQyxDQUFDO1FBQ0gsQ0FBQztRQUNILFVBQUM7SUFBRCxDQXZDQSxBQXVDQyxJQUFBO0lBdkNZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xuICBzaWduYXR1cmU7XG4gIG5hbWUgPSAnJztcbiAgcG9zaXRpb24gPSAnJztcbiAgaW1nID0gJ2h0dHA6Ly9pbWd1ci5jb20vTjBKcUViNy5wbmcnO1xuICBfcGhvbmUgPSAnJztcbiAgX2ZhY2Vib29rID0gJyc7XG4gIF9naXRodWIgPSAnJztcbiAgX2xpbmtlZGluID0gJyc7XG4gIF90d2l0dGVyID0gJyc7XG4gIF9pbnN0YWdyYW0gPSAnJztcbiAgZ2V0IGZhY2Vib29rKCkge1xuICAgIHJldHVybiB0aGlzLl9mYWNlYm9vayA/ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vJyArIHRoaXMuX2ZhY2Vib29rIDogJyc7XG4gIH1cbiAgZ2V0IGdpdGh1YigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2l0aHViID8gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgdGhpcy5fZ2l0aHViIDogJyc7XG4gIH1cbiAgZ2V0IGxpbmtlZGluKCkge1xuICAgIHJldHVybiB0aGlzLl9saW5rZWRpbiA/ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vJyArIHRoaXMuX2xpbmtlZGluIDogJyc7XG4gIH1cbiAgZ2V0IHR3aXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R3aXR0ZXIgPyAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdGhpcy5fdHdpdHRlciA6ICcnO1xuICB9XG4gIGdldCBpbnN0YWdyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhZ3JhbSA/ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLycgKyB0aGlzLl9pbnN0YWdyYW0gOiAnJztcbiAgfVxuICBnZXQgcGhvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bob25lLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sICcoJDEpICQyLSQzJyk7XG4gIH1cbiAgY29weVRvQ2xpcGJvYXJkKCkge1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5zZWxlY3RBbGxDaGlsZHJlbih0aGlzLnNpZ25hdHVyZSk7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIHZhciBtc2cgPSBzdWNjZXNzZnVsID8gJ3N1Y2Nlc3NmdWwnIDogJ3Vuc3VjY2Vzc2Z1bCc7XG4gICAgICBhbGVydCgnQ29weWluZyB0ZXh0IGNvbW1hbmQgd2FzICcgKyBtc2cpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoJ09vcHMsIHVuYWJsZSB0byBjb3B5Jyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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

define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6\"><h1>Create a Email Signature</h1><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"name\">Full Name:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"name\" value.bind=\"name\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"position\">Position:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"position\" value.bind=\"position\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_phone\">Phone:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"_phone\" value.bind=\"_phone\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_facebook\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/2UJrwMf.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.facebook.com/</span> <input class=\"form-control\" type=\"text\" name=\"_facebook\" value.bind=\"_facebook\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_github\"><img width=\"16\" height=\"16\" src=\"http://imgur.com/lXYrnWk.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://github.com/</span> <input class=\"form-control\" type=\"text\" name=\"_github\" value.bind=\"_github\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_linkedin\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/ksLvq7c.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.linkedin.com/in/</span> <input class=\"form-control\" type=\"text\" name=\"_linkedin\" value.bind=\"_linkedin\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_twitter\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/PZfIGAn.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://twitter.com/</span> <input class=\"form-control\" type=\"text\" name=\"_twitter\" value.bind=\"_twitter\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_instagram\"><img width=\"16\" height=\"16\" src=\"http://imgur.com/AqphLeH.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.instagram.com/</span> <input class=\"form-control\" type=\"text\" name=\"_instagram\" value.bind=\"_instagram\"></div></div></div><button class=\"btn btn-default pull-right\" type=\"button\" name=\"button\" click.trigger=\"copyToClipboard()\"><i class=\"fa fa-clipboard\"></i> Copy to Clipboard</button></form></div><div class=\"col-sm-6\"><div class=\"preview\"><h2>Preview:</h2><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"470\" style=\"width:470px;border-top:1px solid #45668e\" ref=\"signature\"><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr valign=\"top\"><td style=\"padding-left:10px;width:10px;padding-right:10px\"><img src=\"${img ||'http://imgur.com/N0JqEb7.png'}\" width=\"65\" height=\"65\" alt=\"photo\" style=\"-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%\"></td><td style=\"border-right:1px solid #45668e\"></td><td style=\"text-align:initial;font:14px Arial;color:#646464;padding:0 10px\"><div if.bind=\"name || position\"><b class=\"text-color theme-font\" if.bind=\"name\">${name}</b><br><span if.bind=\"position\">${position}</span><br></div><div style=\"color:#8d8d8d;font-size:13px;padding:5px 0 0 0\"><a href=\"tel:${phone}\" style=\"color:#8d8d8d;text-decoration:none\">${phone}</a><span if.bind=\"phone\" style=\"color:#45668e;display:inline-block\">&nbsp;|&nbsp;</span> <span><a href=\"http://www.vivvo.com\" target=\"_blank\" style=\"color:#8d8d8d;text-decoration:none\">www.vivvo.com</a></span></div><div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td align=\"left\" style=\"text-align:center\"><a href=\"http://www.vivvo.com\" target=\"_blank\"><img style=\"padding-top:5px\" height=\"16\" src=\"http://imgur.com/CSoTzzZ.png\"></a></td><td if.bind=\"facebook || linkedin || twitter || instagram\" align=\"left\" style=\"padding:5px;text-align:center\"><span style=\"color:#45668e;display:inline-block\">|</span></td><td if.bind=\"facebook\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${facebook}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/2UJrwMf.png\"></a></td><td if.bind=\"github\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${github}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://imgur.com/lXYrnWk.png\"></a></td><td if.bind=\"linkedin\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${linkedin}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/ksLvq7c.png\"></a></td><td if.bind=\"twitter\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${twitter}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://i.imgur.com/PZfIGAn.png\"></a></td><td if.bind=\"instagram\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${instagram}\" target=\"_blank\"><img style=\"padding-top:5px\" width=\"16\" height=\"16\" src=\"http://imgur.com/AqphLeH.png\"></a></td></tr></tbody></table></div></td></tr></tbody></table></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        Object.defineProperty(App.prototype, "name", {
            get: function () {
                return this.profile.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "position", {
            get: function () {
                return this.profile.position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "img", {
            get: function () {
                return this.profile.img;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "confidential", {
            get: function () {
                return this.profile.confidential;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "phone", {
            get: function () {
                return this.profile._phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "facebook", {
            get: function () {
                this.profile._facebook = this.profile._facebook.replace('https://www.facebook.com/', '');
                return this.profile._facebook ? 'https://www.facebook.com/' + this.profile._facebook : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "github", {
            get: function () {
                this.profile._github = this.profile._github.replace('https://github.com/', '');
                return this.profile._github ? 'https://github.com/' + this.profile._github : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "linkedin", {
            get: function () {
                this.profile._linkedin = this.profile._linkedin.replace('https://www.linkedin.com/in/', '');
                return this.profile._linkedin ? 'https://www.linkedin.com/in/' + this.profile._linkedin : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "twitter", {
            get: function () {
                this.profile._twitter = this.profile._twitter.replace('https://twitter.com/', '');
                return this.profile._twitter ? 'https://twitter.com/' + this.profile._twitter : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "instagram", {
            get: function () {
                this.profile._instagram = this.profile._instagram.replace('https://www.instagram.com/', '');
                return this.profile._instagram ? 'https://www.instagram.com/' + this.profile._instagram : '';
            },
            enumerable: true,
            configurable: true
        });
        App.prototype.activate = function () {
            this.profile = localStorage.profile ? JSON.parse(localStorage.profile) : {
                name: '',
                position: '',
                img: 'http://imgur.com/N0JqEb7.png',
                _phone: '',
                _facebook: '',
                _github: '',
                _linkedin: '',
                _twitter: '',
                _instagram: '',
                confidential: false
            };
        };
        App.prototype.copyToClipboard = function () {
            if (this.profile)
                localStorage.setItem('profile', JSON.stringify(this.profile));
            window.getSelection().selectAllChildren(this.signature);
            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                this.copyMessage = 'Copying text command was ' + msg;
            }
            catch (err) {
                this.copyMessage = 'Oops, unable to copy';
            }
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHNpZ25hdHVyZTtcbiAgY29weU1lc3NhZ2U7XG4gIHByb2ZpbGU6IGFueTtcblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlLm5hbWU7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUucG9zaXRpb247XG4gIH1cbiAgZ2V0IGltZygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlLmltZztcbiAgfVxuICBnZXQgY29uZmlkZW50aWFsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUuY29uZmlkZW50aWFsO1xuICB9XG4gIGdldCBwaG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlLl9waG9uZS5yZXBsYWNlKC8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkvLCAnKCQxKSAkMi0kMycpO1xuICB9XG4gIGdldCBmYWNlYm9vaygpIHtcbiAgICB0aGlzLnByb2ZpbGUuX2ZhY2Vib29rID0gdGhpcy5wcm9maWxlLl9mYWNlYm9vay5yZXBsYWNlKCdodHRwczovL3d3dy5mYWNlYm9vay5jb20vJywgJycpO1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUuX2ZhY2Vib29rID8gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8nICsgdGhpcy5wcm9maWxlLl9mYWNlYm9vayA6ICcnO1xuICB9XG4gIGdldCBnaXRodWIoKSB7XG4gICAgdGhpcy5wcm9maWxlLl9naXRodWIgPSB0aGlzLnByb2ZpbGUuX2dpdGh1Yi5yZXBsYWNlKCdodHRwczovL2dpdGh1Yi5jb20vJywgJycpO1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUuX2dpdGh1YiA/ICdodHRwczovL2dpdGh1Yi5jb20vJyArIHRoaXMucHJvZmlsZS5fZ2l0aHViIDogJyc7XG4gIH1cbiAgZ2V0IGxpbmtlZGluKCkge1xuICAgIHRoaXMucHJvZmlsZS5fbGlua2VkaW4gPSB0aGlzLnByb2ZpbGUuX2xpbmtlZGluLnJlcGxhY2UoJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi8nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZS5fbGlua2VkaW4gPyAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luLycgKyB0aGlzLnByb2ZpbGUuX2xpbmtlZGluIDogJyc7XG4gIH1cbiAgZ2V0IHR3aXR0ZXIoKSB7XG4gICAgdGhpcy5wcm9maWxlLl90d2l0dGVyID0gdGhpcy5wcm9maWxlLl90d2l0dGVyLnJlcGxhY2UoJ2h0dHBzOi8vdHdpdHRlci5jb20vJywgJycpO1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUuX3R3aXR0ZXIgPyAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdGhpcy5wcm9maWxlLl90d2l0dGVyIDogJyc7XG4gIH1cbiAgZ2V0IGluc3RhZ3JhbSgpIHtcbiAgICB0aGlzLnByb2ZpbGUuX2luc3RhZ3JhbSA9IHRoaXMucHJvZmlsZS5faW5zdGFncmFtLnJlcGxhY2UoJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJywgJycpO1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUuX2luc3RhZ3JhbSA/ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLycgKyB0aGlzLnByb2ZpbGUuX2luc3RhZ3JhbSA6ICcnO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5wcm9maWxlID0gbG9jYWxTdG9yYWdlLnByb2ZpbGUgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5wcm9maWxlKSA6IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgaW1nOiAnaHR0cDovL2ltZ3VyLmNvbS9OMEpxRWI3LnBuZycsXG4gICAgICBfcGhvbmU6ICcnLFxuICAgICAgX2ZhY2Vib29rOiAnJyxcbiAgICAgIF9naXRodWI6ICcnLFxuICAgICAgX2xpbmtlZGluOiAnJyxcbiAgICAgIF90d2l0dGVyOiAnJyxcbiAgICAgIF9pbnN0YWdyYW06ICcnLFxuICAgICAgY29uZmlkZW50aWFsOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb3B5VG9DbGlwYm9hcmQoKSB7XG4gICAgaWYodGhpcy5wcm9maWxlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZmlsZSkpO1xuICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5zZWxlY3RBbGxDaGlsZHJlbih0aGlzLnNpZ25hdHVyZSk7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIHZhciBtc2cgPSBzdWNjZXNzZnVsID8gJ3N1Y2Nlc3NmdWwnIDogJ3Vuc3VjY2Vzc2Z1bCc7XG5cbiAgICAgIHRoaXMuY29weU1lc3NhZ2UgPSAnQ29weWluZyB0ZXh0IGNvbW1hbmQgd2FzICcgKyBtc2c7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmNvcHlNZXNzYWdlID0gJ09vcHMsIHVuYWJsZSB0byBjb3B5JztcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsU0FBZ0IsU0FBUyxDQUFDLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLElBQUkscUJBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxxQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWRELDhCQWNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxTQUFnQixTQUFTLENBQUMsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6\"><h1>Create a Email Signature</h1><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"name\">Full Name:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"name\" value.bind=\"profile.name\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"position\">Position:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"position\" value.bind=\"profile.position\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_phone\">Phone:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"_phone\" value.bind=\"profile._phone\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_facebook\"><img src=\"http://i.imgur.com/Oda5OW2.png\" alt=\"facebook\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.facebook.com/</span> <input class=\"form-control\" type=\"text\" name=\"_facebook\" value.bind=\"profile._facebook\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_github\"><img src=\"http://i.imgur.com/6UFCm8k.png\" alt=\"github\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://github.com/</span> <input class=\"form-control\" type=\"text\" name=\"_github\" value.bind=\"profile._github\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_linkedin\"><img src=\"http://i.imgur.com/jJmFye0.png\" alt=\"linkedIn\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.linkedin.com/in/</span> <input class=\"form-control\" type=\"text\" name=\"_linkedin\" value.bind=\"profile._linkedin\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_twitter\"><img src=\"http://i.imgur.com/yhbpeWC.png\" alt=\"twitter\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://twitter.com/</span> <input class=\"form-control\" type=\"text\" name=\"_twitter\" value.bind=\"profile._twitter\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_instagram\"><img src=\"http://i.imgur.com/odBkwq5.png\" alt=\"instagram\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.instagram.com/</span> <input class=\"form-control\" type=\"text\" name=\"_instagram\" value.bind=\"profile._instagram\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-9 col-sm-offset-3\" for=\"confidential\"><input type=\"checkbox\" name=\"confidential\" checked.bind=\"profile.confidential\"> Confidential Message</label></div><div class=\"form-group\"><div class=\"col-sm-12\"><button class=\"btn btn-default pull-right\" type=\"button\" name=\"button\" click.trigger=\"copyToClipboard()\"><i class=\"fa fa-clipboard\"></i> Copy to Clipboard</button></div></div><div class=\"form-group\"><div class=\"col-sm-12 text-center\"><p class.bind=\"copyMessage == 'Oops, unable to copy' ? 'bg-danger' : 'bg-info'\">${copyMessage}</p></div></div></form></div><div class=\"col-sm-6\"><div class=\"preview\"><h2>Preview:</h2><div ref=\"signature\"><p if.bind=\"confidential\" style=\"font-size:10px\">This email including attachments is confidential. If you are not the intended recipient, any redistribution or copying of this message is prohibited. If you have received this email in error please notify me immediately, by return email, and delete this email.</p><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"470\" style=\"width:470px\"><tbody><tr><td colspan=\"3\"></td></tr><tr valign=\"top\"><td style=\"padding-left:10px;width:10px;padding-right:10px\"><img src=\"${img ||'http://imgur.com/N0JqEb7.png'}\" width=\"65\" height=\"65\" alt=\"photo\" style=\"-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%\"></td><td style=\"border-right:1px solid #1c5a7d\"></td><td style=\"text-align:initial;font:14px Arial;color:#646464;padding:0 10px\"><div if.bind=\"name || position\"><b class=\"text-color theme-font\" if.bind=\"name\">${name}</b><br><span if.bind=\"position\">${position}</span><br></div><div style=\"color:#8d8d8d;font-size:13px;padding:5px 0\"><span>300A - 2221 Cornwall Street<br>Regina, SK. S4P 2L1</span></div><div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td style=\"font:13px Arial;color:#646464\"><a href=\"tel:${phone}\" style=\"color:#8d8d8d;text-decoration:none\"><span style=\"\"> ${phone} </span></a></td><td if.bind=\"phone\" align=\"left\" style=\"padding:0 5px;text-align:center\"><span style=\"color:#1c5a7d;display:inline-block\">・</span></td><td align=\"left\" style=\"text-align:center\"><a href=\"http://www.vivvo.com\" target=\"_blank\"><img height=\"16px\" src=\"http://i.imgur.com/2ZbpMtk.png\" alt=\"vivvo\"></a></td><td if.bind=\"facebook || linkedin || twitter || instagram\" align=\"left\" style=\"padding:0 5px;text-align:center\"><span style=\"color:#1c5a7d;display:inline-block\">・</span></td><td if.bind=\"facebook\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${facebook}\" target=\"_blank\"><img height=\"16px\" width=\"16px\" src=\"http://i.imgur.com/Oda5OW2.png\" alt=\"facebook\"></a></td><td if.bind=\"github\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${github}\" target=\"_blank\"><img height=\"16px\" width=\"16px\" src=\"http://i.imgur.com/6UFCm8k.png\" alt=\"github\"></a></td><td if.bind=\"linkedin\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${linkedin}\" target=\"_blank\"><img height=\"16px\" width=\"16px\" src=\"http://i.imgur.com/jJmFye0.png\" alt=\"linkedIn\"></a></td><td if.bind=\"twitter\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${twitter}\" target=\"_blank\"><img height=\"16px\" width=\"16px\" src=\"http://i.imgur.com/yhbpeWC.png\" alt=\"twitter\"></a></td><td if.bind=\"instagram\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${instagram}\" target=\"_blank\"><img height=\"16px\" width=\"16px\" src=\"http://i.imgur.com/odBkwq5.png\" alt=\"instagram\"></a></td></tr></tbody></table></div></td></tr></tbody></table></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
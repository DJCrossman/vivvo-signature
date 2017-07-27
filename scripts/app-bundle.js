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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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IHtcbiAgc2lnbmF0dXJlO1xuICBjb3B5TWVzc2FnZTtcbiAgcHJvZmlsZTogYW55O1xuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUubmFtZTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZS5wb3NpdGlvbjtcbiAgfVxuICBnZXQgaW1nKCkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUuaW1nO1xuICB9XG4gIGdldCBjb25maWRlbnRpYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZS5jb25maWRlbnRpYWw7XG4gIH1cbiAgZ2V0IHBob25lKCkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGUuX3Bob25lLnJlcGxhY2UoLyhcXGR7M30pKFxcZHszfSkoXFxkezR9KS8sICcoJDEpICQyLSQzJyk7XG4gIH1cbiAgZ2V0IGZhY2Vib29rKCkge1xuICAgIHRoaXMucHJvZmlsZS5fZmFjZWJvb2sgPSB0aGlzLnByb2ZpbGUuX2ZhY2Vib29rLnJlcGxhY2UoJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZS5fZmFjZWJvb2sgPyAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLycgKyB0aGlzLnByb2ZpbGUuX2ZhY2Vib29rIDogJyc7XG4gIH1cbiAgZ2V0IGdpdGh1YigpIHtcbiAgICB0aGlzLnByb2ZpbGUuX2dpdGh1YiA9IHRoaXMucHJvZmlsZS5fZ2l0aHViLnJlcGxhY2UoJ2h0dHBzOi8vZ2l0aHViLmNvbS8nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZS5fZ2l0aHViID8gJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgdGhpcy5wcm9maWxlLl9naXRodWIgOiAnJztcbiAgfVxuICBnZXQgbGlua2VkaW4oKSB7XG4gICAgdGhpcy5wcm9maWxlLl9saW5rZWRpbiA9IHRoaXMucHJvZmlsZS5fbGlua2VkaW4ucmVwbGFjZSgnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luLycsICcnKTtcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlLl9saW5rZWRpbiA/ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vJyArIHRoaXMucHJvZmlsZS5fbGlua2VkaW4gOiAnJztcbiAgfVxuICBnZXQgdHdpdHRlcigpIHtcbiAgICB0aGlzLnByb2ZpbGUuX3R3aXR0ZXIgPSB0aGlzLnByb2ZpbGUuX3R3aXR0ZXIucmVwbGFjZSgnaHR0cHM6Ly90d2l0dGVyLmNvbS8nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZS5fdHdpdHRlciA/ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyB0aGlzLnByb2ZpbGUuX3R3aXR0ZXIgOiAnJztcbiAgfVxuICBnZXQgaW5zdGFncmFtKCkge1xuICAgIHRoaXMucHJvZmlsZS5faW5zdGFncmFtID0gdGhpcy5wcm9maWxlLl9pbnN0YWdyYW0ucmVwbGFjZSgnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8nLCAnJyk7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZS5faW5zdGFncmFtID8gJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJyArIHRoaXMucHJvZmlsZS5faW5zdGFncmFtIDogJyc7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLnByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UucHJvZmlsZSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2ZpbGUpIDoge1xuICAgICAgbmFtZTogJycsXG4gICAgICBwb3NpdGlvbjogJycsXG4gICAgICBpbWc6ICdodHRwOi8vaW1ndXIuY29tL04wSnFFYjcucG5nJyxcbiAgICAgIF9waG9uZTogJycsXG4gICAgICBfZmFjZWJvb2s6ICcnLFxuICAgICAgX2dpdGh1YjogJycsXG4gICAgICBfbGlua2VkaW46ICcnLFxuICAgICAgX3R3aXR0ZXI6ICcnLFxuICAgICAgX2luc3RhZ3JhbTogJycsXG4gICAgICBjb25maWRlbnRpYWw6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgICBpZih0aGlzLnByb2ZpbGUpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9maWxlKSk7XG4gICAgd2luZG93LmdldFNlbGVjdGlvbigpLnNlbGVjdEFsbENoaWxkcmVuKHRoaXMuc2lnbmF0dXJlKTtcbiAgICB0cnkge1xuICAgICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgdmFyIG1zZyA9IHN1Y2Nlc3NmdWwgPyAnc3VjY2Vzc2Z1bCcgOiAndW5zdWNjZXNzZnVsJztcblxuICAgICAgdGhpcy5jb3B5TWVzc2FnZSA9ICdDb3B5aW5nIHRleHQgY29tbWFuZCB3YXMgJyArIG1zZztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuY29weU1lc3NhZ2UgPSAnT29wcywgdW5hYmxlIHRvIGNvcHknO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><div class=\"row\"><div class=\"col-sm-6\"><h1>Create a Email Signature</h1><form class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"name\">Full Name:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"name\" value.bind=\"profile.name\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"position\">Position:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"position\" value.bind=\"profile.position\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_phone\">Phone:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"text\" name=\"_phone\" value.bind=\"profile._phone\"></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_facebook\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/2UJrwMf.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.facebook.com/</span> <input class=\"form-control\" type=\"text\" name=\"_facebook\" value.bind=\"profile._facebook\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_github\"><img width=\"16\" height=\"16\" src=\"http://imgur.com/lXYrnWk.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://github.com/</span> <input class=\"form-control\" type=\"text\" name=\"_github\" value.bind=\"profile._github\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_linkedin\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/ksLvq7c.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.linkedin.com/in/</span> <input class=\"form-control\" type=\"text\" name=\"_linkedin\" value.bind=\"profile._linkedin\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_twitter\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/PZfIGAn.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://twitter.com/</span> <input class=\"form-control\" type=\"text\" name=\"_twitter\" value.bind=\"profile._twitter\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"_instagram\"><img width=\"16\" height=\"16\" src=\"http://imgur.com/AqphLeH.png\"></label><div class=\"col-sm-9\"><div class=\"input-group\"><span class=\"input-group-addon\">https://www.instagram.com/</span> <input class=\"form-control\" type=\"text\" name=\"_instagram\" value.bind=\"profile._instagram\"></div></div></div><div class=\"form-group\"><label class=\"col-sm-3 control-label\" for=\"confidential\">Confidential Message:</label><div class=\"col-sm-9\"><input class=\"form-control\" type=\"checkbox\" name=\"confidential\" checked.bind=\"profile.confidential\"></div></div><div class=\"form-group\"><div class=\"col-sm-12\"><button class=\"btn btn-default pull-right\" type=\"button\" name=\"button\" click.trigger=\"copyToClipboard()\"><i class=\"fa fa-clipboard\"></i> Copy to Clipboard</button></div></div><div class=\"form-group\"><div class=\"col-sm-12 text-center\"><p class.bind=\"copyMessage == 'Oops, unable to copy' ? 'bg-danger' : 'bg-info'\">${copyMessage}</p></div></div></form></div><div class=\"col-sm-6\"><div class=\"preview\"><h2>Preview:</h2><div ref=\"signature\"><p if.bind=\"confidential\" style=\"font-size:10px\">This email including attachments is confidential. If you are not the intended recipient, any redistribution or copying of this message is prohibited. If you have received this email in error please notify me immediately, by return email, and delete this email.</p><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"470\" style=\"width:470px\"><tbody><tr><td colspan=\"3\"></td></tr><tr valign=\"top\"><td style=\"padding-left:10px;width:10px;padding-right:10px\"><img src=\"${img ||'http://imgur.com/N0JqEb7.png'}\" width=\"65\" height=\"65\" alt=\"photo\" style=\"-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%\"></td><td style=\"border-right:1px solid #45668e\"></td><td style=\"text-align:initial;font:14px Arial;color:#646464;padding:0 10px\"><div if.bind=\"name || position\"><b class=\"text-color theme-font\" if.bind=\"name\">${name}</b><br><span if.bind=\"position\">${position}</span><br></div><div style=\"color:#8d8d8d;font-size:13px;padding:5px 0 0 0\"><a href=\"tel:${phone}\" style=\"color:#8d8d8d;text-decoration:none\">${phone}</a><span if.bind=\"phone\" style=\"color:#45668e;display:inline-block\">&nbsp;|&nbsp;</span> <span><a href=\"http://www.vivvo.com\" target=\"_blank\" style=\"color:#8d8d8d;text-decoration:none\">www.vivvo.com</a></span></div><div><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td align=\"left\" style=\"text-align:center\"><a href=\"http://www.vivvo.com\" target=\"_blank\"><img style=\"padding-top:5px\" height=\"16\" src=\"http://imgur.com/CSoTzzZ.png\"></a></td><td if.bind=\"facebook || linkedin || twitter || instagram\" align=\"left\" style=\"padding:5px;text-align:center\"><span style=\"color:#45668e;display:inline-block\">|</span></td><td if.bind=\"facebook\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${facebook}\" target=\"_blank\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/2UJrwMf.png\"></a></td><td if.bind=\"github\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${github}\" target=\"_blank\"><img width=\"16\" height=\"16\" src=\"http://imgur.com/lXYrnWk.png\"></a></td><td if.bind=\"linkedin\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${linkedin}\" target=\"_blank\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/ksLvq7c.png\"></a></td><td if.bind=\"twitter\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${twitter}\" target=\"_blank\"><img width=\"16\" height=\"16\" src=\"http://i.imgur.com/PZfIGAn.png\"></a></td><td if.bind=\"instagram\" align=\"left\" style=\"padding-left:5px;text-align:center\"><a href=\"${instagram}\" target=\"_blank\"><img width=\"16\" height=\"16\" src=\"http://imgur.com/AqphLeH.png\"></a></td></tr></tbody></table></div></td></tr></tbody></table></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
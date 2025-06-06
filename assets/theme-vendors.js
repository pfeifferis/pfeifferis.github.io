/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.3/customize/?id=1be474de61c0629256765ac76fef2ce8)
 * Config saved to config.json and https://gist.github.com/1be474de61c0629256765ac76fef2ce8
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    e[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.alert");
        n || i.data("bs.alert", (n = new s(this))),
          "string" == typeof e && n[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      s = function (e) {
        t(e).on("click", i, this.close);
      };
    (s.VERSION = "3.3.7"),
      (s.TRANSITION_DURATION = 150),
      (s.prototype.close = function (e) {
        function i() {
          a.detach().trigger("closed.bs.alert").remove();
        }
        var n = t(this),
          o = n.attr("data-target");
        o || ((o = n.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")));
        var a = t("#" === o ? [] : o);
        e && e.preventDefault(),
          a.length || (a = n.closest(".alert")),
          a.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (a.removeClass("in"),
            t.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(s.TRANSITION_DURATION)
              : i());
      });
    var n = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = s),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = n), this;
      }),
      t(document).on("click.bs.alert.data-api", i, s.prototype.close);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var s = t(this),
          n = s.data("bs.button"),
          o = "object" == typeof e && e;
        n || s.data("bs.button", (n = new i(this, o))),
          "toggle" == e ? n.toggle() : e && n.setState(e);
      });
    }
    var i = function (e, s) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, s)),
        (this.isLoading = !1);
    };
    (i.VERSION = "3.3.7"),
      (i.DEFAULTS = { loadingText: "loading..." }),
      (i.prototype.setState = function (e) {
        var i = "disabled",
          s = this.$element,
          n = s.is("input") ? "val" : "html",
          o = s.data();
        (e += "Text"),
          null == o.resetText && s.data("resetText", s[n]()),
          setTimeout(
            t.proxy(function () {
              s[n](null == o[e] ? this.options[e] : o[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0),
                    s.addClass(i).attr(i, i).prop(i, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    s.removeClass(i).removeAttr(i).prop(i, !1));
            }, this),
            0
          );
      }),
      (i.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type")
            ? (i.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == i.prop("type") &&
              (i.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            t && i.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var s = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = i),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = s), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (i) {
            var s = t(i.target).closest(".btn");
            e.call(s, "toggle"),
              t(i.target).is('input[type="radio"], input[type="checkbox"]') ||
                (i.preventDefault(),
                s.is("input,button")
                  ? s.trigger("focus")
                  : s
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var s = t(this),
          n = s.data("bs.carousel"),
          o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e),
          a = "string" == typeof e ? e : o.slide;
        n || s.data("bs.carousel", (n = new i(this, o))),
          "number" == typeof e
            ? n.to(e)
            : a
            ? n[a]()
            : o.interval && n.pause().cycle();
      });
    }
    var i = function (e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (i.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
          s =
            ("prev" == t && 0 === i) ||
            ("next" == t && i == this.$items.length - 1);
        if (s && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
          o = (i + n) % this.$items.length;
        return this.$items.eq(o);
      }),
      (i.prototype.to = function (t) {
        var e = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : i == t
          ? this.pause().cycle()
          : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
      }),
      (i.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (i.prototype.slide = function (e, s) {
        var n = this.$element.find(".item.active"),
          o = s || this.getItemForDirection(e, n),
          a = this.interval,
          r = "next" == e ? "left" : "right",
          l = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var d = o[0],
          h = t.Event("slide.bs.carousel", { relatedTarget: d, direction: r });
        if ((this.$element.trigger(h), !h.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), a && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var c = t(this.$indicators.children()[this.getItemIndex(o)]);
            c && c.addClass("active");
          }
          var p = t.Event("slid.bs.carousel", {
            relatedTarget: d,
            direction: r,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(e),
                o[0].offsetWidth,
                n.addClass(r),
                o.addClass(r),
                n
                  .one("bsTransitionEnd", function () {
                    o.removeClass([e, r].join(" ")).addClass("active"),
                      n.removeClass(["active", r].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(p);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (n.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(p)),
            a && this.cycle(),
            this
          );
        }
      });
    var s = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = i),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = s), this;
      });
    var n = function (i) {
      var s,
        n = t(this),
        o = t(
          n.attr("data-target") ||
            ((s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (o.hasClass("carousel")) {
        var a = t.extend({}, o.data(), n.data()),
          r = n.attr("data-slide-to");
        r && (a.interval = !1),
          e.call(o, a),
          r && o.data("bs.carousel").to(r),
          i.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", n)
      .on("click.bs.carousel.data-api", "[data-slide-to]", n),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var i = t(this);
          e.call(i, i.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i = e.attr("data-target");
      i ||
        ((i = e.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var s = i && t(i);
      return s && s.length ? s : e.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (t(n).remove(),
        t(o).each(function () {
          var s = t(this),
            n = e(s),
            o = { relatedTarget: this };
          n.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              t.contains(n[0], i.target)) ||
              (n.trigger((i = t.Event("hide.bs.dropdown", o))),
              i.isDefaultPrevented() ||
                (s.attr("aria-expanded", "false"),
                n
                  .removeClass("open")
                  .trigger(t.Event("hidden.bs.dropdown", o)))));
        }));
    }
    function s(e) {
      return this.each(function () {
        var i = t(this),
          s = i.data("bs.dropdown");
        s || i.data("bs.dropdown", (s = new a(this))),
          "string" == typeof e && s[e].call(i);
      });
    }
    var n = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (a.VERSION = "3.3.7"),
      (a.prototype.toggle = function (s) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
          var o = e(n),
            a = o.hasClass("open");
          if ((i(), !a)) {
            "ontouchstart" in document.documentElement &&
              !o.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", i);
            var r = { relatedTarget: this };
            if (
              (o.trigger((s = t.Event("show.bs.dropdown", r))),
              s.isDefaultPrevented())
            )
              return;
            n.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r));
          }
          return !1;
        }
      }),
      (a.prototype.keydown = function (i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var s = t(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !s.is(".disabled, :disabled"))
          ) {
            var n = e(s),
              a = n.hasClass("open");
            if ((!a && 27 != i.which) || (a && 27 == i.which))
              return (
                27 == i.which && n.find(o).trigger("focus"), s.trigger("click")
              );
            var r = " li:not(.disabled):visible a",
              l = n.find(".dropdown-menu" + r);
            if (l.length) {
              var d = l.index(i.target);
              38 == i.which && d > 0 && d--,
                40 == i.which && d < l.length - 1 && d++,
                ~d || (d = 0),
                l.eq(d).trigger("focus");
            }
          }
        }
      });
    var r = t.fn.dropdown;
    (t.fn.dropdown = s),
      (t.fn.dropdown.Constructor = a),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = r), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, a.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, a.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          a.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e, s) {
      return this.each(function () {
        var n = t(this),
          o = n.data("bs.modal"),
          a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        o || n.data("bs.modal", (o = new i(this, a))),
          "string" == typeof e ? o[e](s) : a.show && o.show(s);
      });
    }
    var i = function (e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (i.prototype.show = function (e) {
        var s = this,
          n = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(n),
          this.isShown ||
            n.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              s.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var n = t.support.transition && s.$element.hasClass("fade");
              s.$element.parent().length || s.$element.appendTo(s.$body),
                s.$element.show().scrollTop(0),
                s.adjustDialog(),
                n && s.$element[0].offsetWidth,
                s.$element.addClass("in"),
                s.enforceFocus();
              var o = t.Event("shown.bs.modal", { relatedTarget: e });
              n
                ? s.$dialog
                    .one("bsTransitionEnd", function () {
                      s.$element.trigger("focus").trigger(o);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : s.$element.trigger("focus").trigger(o);
            }));
      }),
      (i.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (i.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function (e) {
        var s = this,
          n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var o = t.support.transition && n;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + n)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          o
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var a = function () {
            s.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", a)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : a();
        } else e && e();
      }),
      (i.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var s = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = s), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (i) {
          var s = t(this),
            n = s.attr("href"),
            o = t(
              s.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            a = o.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(n) && n }, o.data(), s.data());
          s.is("a") && i.preventDefault(),
            o.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function () {
                  s.is(":visible") && s.trigger("focus");
                });
            }),
            e.call(o, a, this);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var s = t(this),
          n = s.data("bs.tab");
        n || s.data("bs.tab", (n = new i(this))),
          "string" == typeof e && n[e]();
      });
    }
    var i = function (e) {
      this.element = t(e);
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          s = e.data("target");
        if (
          (s ||
            ((s = e.attr("href")), (s = s && s.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var n = i.find(".active:last a"),
            o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            a = t.Event("show.bs.tab", { relatedTarget: n[0] });
          if (
            (n.trigger(o),
            e.trigger(a),
            !a.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var r = t(s);
            this.activate(e.closest("li"), i),
              this.activate(r, r.parent(), function () {
                n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] });
              });
          }
        }
      }),
      (i.prototype.activate = function (e, s, n) {
        function o() {
          a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            n && n();
        }
        var a = s.find("> .active"),
          r =
            n &&
            t.support.transition &&
            ((a.length && a.hasClass("fade")) || !!s.find("> .fade").length);
        a.length && r
          ? a
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : o(),
          a.removeClass("in");
      });
    var s = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = s), this;
      });
    var n = function (i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', n)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var s = t(this),
          n = s.data("bs.affix"),
          o = "object" == typeof e && e;
        n || s.data("bs.affix", (n = new i(this, o))),
          "string" == typeof e && n[e]();
      });
    }
    var i = function (e, s) {
      (this.options = t.extend({}, i.DEFAULTS, s)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (i.VERSION = "3.3.7"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = { offset: 0, target: window }),
      (i.prototype.getState = function (t, e, i, s) {
        var n = this.$target.scrollTop(),
          o = this.$element.offset(),
          a = this.$target.height();
        if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != i
            ? n + this.unpin <= o.top
              ? !1
              : "bottom"
            : t - s >= n + a
            ? !1
            : "bottom";
        var r = null == this.affixed,
          l = r ? n : o.top,
          d = r ? a : e;
        return null != i && i >= n
          ? "top"
          : null != s && l + d >= t - s
          ? "bottom"
          : !1;
      }),
      (i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            s = this.options.offset,
            n = s.top,
            o = s.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof s && (o = n = s),
            "function" == typeof n && (n = s.top(this.$element)),
            "function" == typeof o && (o = s.bottom(this.$element));
          var r = this.getState(a, e, n, o);
          if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""),
              d = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(d), d.isDefaultPrevented())) return;
            (this.affixed = r),
              (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == r && this.$element.offset({ top: a - e - o });
        }
      });
    var s = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = i),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = s), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var i = t(this),
            s = i.data();
          (s.offset = s.offset || {}),
            null != s.offsetBottom && (s.offset.bottom = s.offsetBottom),
            null != s.offsetTop && (s.offset.top = s.offsetTop),
            e.call(i, s);
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i,
        s =
          e.attr("data-target") ||
          ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return t(s);
    }
    function i(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.collapse"),
          o = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
        !n && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
          n || i.data("bs.collapse", (n = new s(this, o))),
          "string" == typeof e && n[e]();
      });
    }
    var s = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, s.DEFAULTS, i)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (s.VERSION = "3.3.7"),
      (s.TRANSITION_DURATION = 350),
      (s.DEFAULTS = { toggle: !0 }),
      (s.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (s.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            n =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              n &&
              n.length &&
              ((e = n.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var o = t.Event("show.bs.collapse");
            if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
              n &&
                n.length &&
                (i.call(n, "hide"), e || n.data("bs.collapse", null));
              var a = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [a](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var r = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [a](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return r.call(this);
              var l = t.camelCase(["scroll", a].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(r, this))
                .emulateTransitionEnd(s.TRANSITION_DURATION)
                [a](this.$element[0][l]);
            }
          }
        }
      }),
      (s.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var n = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[i](0)
                  .one("bsTransitionEnd", t.proxy(n, this))
                  .emulateTransitionEnd(s.TRANSITION_DURATION)
              : n.call(this);
          }
        }
      }),
      (s.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (s.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (i, s) {
              var n = t(s);
              this.addAriaAndCollapsedClass(e(n), n);
            }, this)
          )
          .end();
      }),
      (s.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var n = t.fn.collapse;
    (t.fn.collapse = i),
      (t.fn.collapse.Constructor = s),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = n), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (s) {
          var n = t(this);
          n.attr("data-target") || s.preventDefault();
          var o = e(n),
            a = o.data("bs.collapse"),
            r = a ? "toggle" : n.data();
          i.call(o, r);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(i, s) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(t(i).is(document.body) ? window : i)),
        (this.options = t.extend({}, e.DEFAULTS, s)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function i(i) {
      return this.each(function () {
        var s = t(this),
          n = s.data("bs.scrollspy"),
          o = "object" == typeof i && i;
        n || s.data("bs.scrollspy", (n = new e(this, o))),
          "string" == typeof i && n[i]();
      });
    }
    (e.VERSION = "3.3.7"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = this,
          i = "offset",
          s = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (s = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var e = t(this),
                n = e.data("target") || e.attr("href"),
                o = /^#./.test(n) && t(n);
              return (
                (o && o.length && o.is(":visible") && [[o[i]().top + s, n]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          s = this.options.offset + i - this.$scrollElement.height(),
          n = this.offsets,
          o = this.targets,
          a = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), e >= s))
          return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < n[0]) return (this.activeTarget = null), this.clear();
        for (t = n.length; t--; )
          a != o[t] &&
            e >= n[t] &&
            (void 0 === n[t + 1] || e < n[t + 1]) &&
            this.activate(o[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var i =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length &&
          (s = s.closest("li.dropdown").addClass("active")),
          s.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var s = t.fn.scrollspy;
    (t.fn.scrollspy = i),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = s), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          i.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var i = !1,
        s = this;
      t(this).one("bsTransitionEnd", function () {
        i = !0;
      });
      var n = function () {
        i || t(s).trigger(t.support.transition.end);
      };
      return setTimeout(n, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery);

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(function (t, e) {
  "use strict";
  function n(t) {
    (this.time = t.time),
      (this.target = t.target),
      (this.rootBounds = t.rootBounds),
      (this.boundingClientRect = t.boundingClientRect),
      (this.intersectionRect = t.intersectionRect || {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
      }),
      (this.isIntersecting = !!t.intersectionRect);
    var e = this.boundingClientRect,
      n = e.width * e.height,
      o = this.intersectionRect,
      i = o.width * o.height;
    this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0;
  }
  function o(t, e) {
    var n = e || {};
    if ("function" != typeof t) throw new Error("callback must be a function");
    if (n.root && 1 != n.root.nodeType)
      throw new Error("root must be an Element");
    (this._checkForIntersections = r(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    )),
      (this._callback = t),
      (this._observationTargets = []),
      (this._queuedEntries = []),
      (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
      (this.thresholds = this._initThresholds(n.threshold)),
      (this.root = n.root || null),
      (this.rootMargin = this._rootMarginValues
        .map(function (t) {
          return t.value + t.unit;
        })
        .join(" "));
  }
  function i() {
    return t.performance && performance.now && performance.now();
  }
  function r(t, e) {
    var n = null;
    return function () {
      n ||
        (n = setTimeout(function () {
          t(), (n = null);
        }, e));
    };
  }
  function s(t, e, n, o) {
    "function" == typeof t.addEventListener
      ? t.addEventListener(e, n, o || !1)
      : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
  }
  function h(t, e, n, o) {
    "function" == typeof t.removeEventListener
      ? t.removeEventListener(e, n, o || !1)
      : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n);
  }
  function c(t, e) {
    var n = Math.max(t.top, e.top),
      o = Math.min(t.bottom, e.bottom),
      i = Math.max(t.left, e.left),
      r = Math.min(t.right, e.right),
      s = r - i,
      h = o - n;
    return (
      s >= 0 &&
      h >= 0 && { top: n, bottom: o, left: i, right: r, width: s, height: h }
    );
  }
  function u(t) {
    var e;
    try {
      e = t.getBoundingClientRect();
    } catch (t) {}
    return e
      ? ((e.width && e.height) ||
          (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top,
          }),
        e)
      : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
  }
  function a(t, e) {
    for (var n = e; n; ) {
      if (n == t) return !0;
      n = l(n);
    }
    return !1;
  }
  function l(t) {
    var e = t.parentNode;
    return e && 11 == e.nodeType && e.host ? e.host : e;
  }
  if (
    "IntersectionObserver" in t &&
    "IntersectionObserverEntry" in t &&
    "intersectionRatio" in t.IntersectionObserverEntry.prototype
  )
    "isIntersecting" in t.IntersectionObserverEntry.prototype ||
      Object.defineProperty(
        t.IntersectionObserverEntry.prototype,
        "isIntersecting",
        {
          get: function () {
            return this.intersectionRatio > 0;
          },
        }
      );
  else {
    var p = [];
    (o.prototype.THROTTLE_TIMEOUT = 100),
      (o.prototype.POLL_INTERVAL = null),
      (o.prototype.observe = function (t) {
        if (
          !this._observationTargets.some(function (e) {
            return e.element == t;
          })
        ) {
          if (!t || 1 != t.nodeType)
            throw new Error("target must be an Element");
          this._registerInstance(),
            this._observationTargets.push({ element: t, entry: null }),
            this._monitorIntersections(),
            this._checkForIntersections();
        }
      }),
      (o.prototype.unobserve = function (t) {
        (this._observationTargets = this._observationTargets.filter(function (
          e
        ) {
          return e.element != t;
        })),
          this._observationTargets.length ||
            (this._unmonitorIntersections(), this._unregisterInstance());
      }),
      (o.prototype.disconnect = function () {
        (this._observationTargets = []),
          this._unmonitorIntersections(),
          this._unregisterInstance();
      }),
      (o.prototype.takeRecords = function () {
        var t = this._queuedEntries.slice();
        return (this._queuedEntries = []), t;
      }),
      (o.prototype._initThresholds = function (t) {
        var e = t || [0];
        return (
          Array.isArray(e) || (e = [e]),
          e.sort().filter(function (t, e, n) {
            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
              throw new Error(
                "threshold must be a number between 0 and 1 inclusively"
              );
            return t !== n[e - 1];
          })
        );
      }),
      (o.prototype._parseRootMargin = function (t) {
        var e = (t || "0px").split(/\s+/).map(function (t) {
          var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
          if (!e)
            throw new Error(
              "rootMargin must be specified in pixels or percent"
            );
          return { value: parseFloat(e[1]), unit: e[2] };
        });
        return (
          (e[1] = e[1] || e[0]), (e[2] = e[2] || e[0]), (e[3] = e[3] || e[1]), e
        );
      }),
      (o.prototype._monitorIntersections = function () {
        this._monitoringIntersections ||
          ((this._monitoringIntersections = !0),
          this.POLL_INTERVAL
            ? (this._monitoringInterval = setInterval(
                this._checkForIntersections,
                this.POLL_INTERVAL
              ))
            : (s(t, "resize", this._checkForIntersections, !0),
              s(e, "scroll", this._checkForIntersections, !0),
              "MutationObserver" in t &&
                ((this._domObserver = new MutationObserver(
                  this._checkForIntersections
                )),
                this._domObserver.observe(e, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))));
      }),
      (o.prototype._unmonitorIntersections = function () {
        this._monitoringIntersections &&
          ((this._monitoringIntersections = !1),
          clearInterval(this._monitoringInterval),
          (this._monitoringInterval = null),
          h(t, "resize", this._checkForIntersections, !0),
          h(e, "scroll", this._checkForIntersections, !0),
          this._domObserver &&
            (this._domObserver.disconnect(), (this._domObserver = null)));
      }),
      (o.prototype._checkForIntersections = function () {
        var t = this._rootIsInDom(),
          e = t
            ? this._getRootRect()
            : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        this._observationTargets.forEach(function (o) {
          var r = o.element,
            s = u(r),
            h = this._rootContainsTarget(r),
            c = o.entry,
            a = t && h && this._computeTargetAndRootIntersection(r, e),
            l = (o.entry = new n({
              time: i(),
              target: r,
              boundingClientRect: s,
              rootBounds: e,
              intersectionRect: a,
            }));
          c
            ? t && h
              ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l)
              : c && c.isIntersecting && this._queuedEntries.push(l)
            : this._queuedEntries.push(l);
        }, this),
          this._queuedEntries.length &&
            this._callback(this.takeRecords(), this);
      }),
      (o.prototype._computeTargetAndRootIntersection = function (n, o) {
        if ("none" != t.getComputedStyle(n).display) {
          for (var i = u(n), r = l(n), s = !1; !s; ) {
            var h = null,
              a = 1 == r.nodeType ? t.getComputedStyle(r) : {};
            if ("none" == a.display) return;
            if (
              (r == this.root || r == e
                ? ((s = !0), (h = o))
                : r != e.body &&
                  r != e.documentElement &&
                  "visible" != a.overflow &&
                  (h = u(r)),
              h && !(i = c(h, i)))
            )
              break;
            r = l(r);
          }
          return i;
        }
      }),
      (o.prototype._getRootRect = function () {
        var t;
        if (this.root) t = u(this.root);
        else {
          var n = e.documentElement,
            o = e.body;
          t = {
            top: 0,
            left: 0,
            right: n.clientWidth || o.clientWidth,
            width: n.clientWidth || o.clientWidth,
            bottom: n.clientHeight || o.clientHeight,
            height: n.clientHeight || o.clientHeight,
          };
        }
        return this._expandRectByRootMargin(t);
      }),
      (o.prototype._expandRectByRootMargin = function (t) {
        var e = this._rootMarginValues.map(function (e, n) {
            return "px" == e.unit
              ? e.value
              : (e.value * (n % 2 ? t.width : t.height)) / 100;
          }),
          n = {
            top: t.top - e[0],
            right: t.right + e[1],
            bottom: t.bottom + e[2],
            left: t.left - e[3],
          };
        return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n;
      }),
      (o.prototype._hasCrossedThreshold = function (t, e) {
        var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
          o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
        if (n !== o)
          for (var i = 0; i < this.thresholds.length; i++) {
            var r = this.thresholds[i];
            if (r == n || r == o || r < n != r < o) return !0;
          }
      }),
      (o.prototype._rootIsInDom = function () {
        return !this.root || a(e, this.root);
      }),
      (o.prototype._rootContainsTarget = function (t) {
        return a(this.root || e, t);
      }),
      (o.prototype._registerInstance = function () {
        p.indexOf(this) < 0 && p.push(this);
      }),
      (o.prototype._unregisterInstance = function () {
        var t = p.indexOf(this);
        -1 != t && p.splice(t, 1);
      }),
      (t.IntersectionObserver = o),
      (t.IntersectionObserverEntry = n);
  }
})(window, document);

function _extends() {
  return (_extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
      return t;
    }).apply(this, arguments);
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
!(function (t, e) {
  "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.LazyLoad = e());
})(this, function () {
  "use strict";
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    n = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    r = {
      elements_selector: "img",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1,
    },
    a = function (t, e) {
      return t.getAttribute("data-" + e);
    },
    i = function (t, e, n) {
      var o = "data-" + e;
      null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
    },
    s = function (t) {
      return "true" === a(t, "was-processed");
    },
    c = function (t, e) {
      return i(t, "ll-timeout", e);
    },
    l = function (t) {
      return a(t, "ll-timeout");
    },
    u = function (t, e) {
      var n,
        o = new t(e);
      try {
        n = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: o },
        });
      } catch (t) {
        (n = document.createEvent("CustomEvent")).initCustomEvent(
          "LazyLoad::Initialized",
          !1,
          !1,
          { instance: o }
        );
      }
      window.dispatchEvent(n);
    };
  var d = function (t, e) {
      t && t(e);
    },
    f = function (t, e) {
      (t._loadingCount += e),
        0 === t._elements.length &&
          0 === t._loadingCount &&
          d(t._settings.callback_finish);
    },
    _ = function (t) {
      for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
        "SOURCE" === e.tagName && n.push(e);
      return n;
    },
    v = function (t, e, n) {
      n && t.setAttribute(e, n);
    },
    g = function (t, e) {
      v(t, "sizes", a(t, e.data_sizes)),
        v(t, "srcset", a(t, e.data_srcset)),
        v(t, "src", a(t, e.data_src));
    },
    m = {
      IMG: function (t, e) {
        var n = t.parentNode;
        n &&
          "PICTURE" === n.tagName &&
          _(n).forEach(function (t) {
            g(t, e);
          });
        g(t, e);
      },
      IFRAME: function (t, e) {
        v(t, "src", a(t, e.data_src));
      },
      VIDEO: function (t, e) {
        _(t).forEach(function (t) {
          v(t, "src", a(t, e.data_src));
        }),
          v(t, "src", a(t, e.data_src)),
          t.load();
      },
    },
    b = function (t, e) {
      var n,
        o,
        r = e._settings,
        i = t.tagName,
        s = m[i];
      if (s)
        return (
          s(t, r),
          f(e, 1),
          void (e._elements =
            ((n = e._elements),
            (o = t),
            n.filter(function (t) {
              return t !== o;
            })))
        );
      !(function (t, e) {
        var n = a(t, e.data_src),
          o = a(t, e.data_bg);
        n && (t.style.backgroundImage = 'url("'.concat(n, '")')),
          o && (t.style.backgroundImage = o);
      })(t, r);
    },
    h = function (t, e) {
      o ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
    },
    p = function (t, e, n) {
      t.addEventListener(e, n);
    },
    y = function (t, e, n) {
      t.removeEventListener(e, n);
    },
    E = function (t, e, n) {
      y(t, "load", e), y(t, "loadeddata", e), y(t, "error", n);
    },
    w = function (t, e, n) {
      var r = n._settings,
        a = e ? r.class_loaded : r.class_error,
        i = e ? r.callback_loaded : r.callback_error,
        s = t.target;
      !(function (t, e) {
        o
          ? t.classList.remove(e)
          : (t.className = t.className
              .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
              .replace(/^\s+/, "")
              .replace(/\s+$/, ""));
      })(s, r.class_loading),
        h(s, a),
        d(i, s),
        f(n, -1);
    },
    I = function (t, e) {
      var n = function n(r) {
          w(r, !0, e), E(t, n, o);
        },
        o = function o(r) {
          w(r, !1, e), E(t, n, o);
        };
      !(function (t, e, n) {
        p(t, "load", e), p(t, "loadeddata", e), p(t, "error", n);
      })(t, n, o);
    },
    k = ["IMG", "IFRAME", "VIDEO"],
    A = function (t, e) {
      var n = e._observer;
      z(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
    },
    L = function (t) {
      var e = l(t);
      e && (clearTimeout(e), c(t, null));
    },
    x = function (t, e) {
      var n = e._settings.load_delay,
        o = l(t);
      o ||
        ((o = setTimeout(function () {
          A(t, e), L(t);
        }, n)),
        c(t, o));
    },
    z = function (t, e, n) {
      var o = e._settings;
      (!n && s(t)) ||
        (k.indexOf(t.tagName) > -1 && (I(t, e), h(t, o.class_loading)),
        b(t, e),
        (function (t) {
          i(t, "was-processed", "true");
        })(t),
        d(o.callback_reveal, t),
        d(o.callback_set, t));
    },
    O = function (t) {
      return (
        !!n &&
        ((t._observer = new IntersectionObserver(
          function (e) {
            e.forEach(function (e) {
              return (function (t) {
                return t.isIntersecting || t.intersectionRatio > 0;
              })(e)
                ? (function (t, e) {
                    var n = e._settings;
                    d(n.callback_enter, t), n.load_delay ? x(t, e) : A(t, e);
                  })(e.target, t)
                : (function (t, e) {
                    var n = e._settings;
                    d(n.callback_exit, t), n.load_delay && L(t);
                  })(e.target, t);
            });
          },
          {
            root: (e = t._settings).container === document ? null : e.container,
            rootMargin: e.thresholds || e.threshold + "px",
          }
        )),
        !0)
      );
      var e;
    },
    N = ["IMG", "IFRAME"],
    C = function (t, e) {
      return (function (t) {
        return t.filter(function (t) {
          return !s(t);
        });
      })(
        ((n =
          t ||
          (function (t) {
            return t.container.querySelectorAll(t.elements_selector);
          })(e)),
        Array.prototype.slice.call(n))
      );
      var n;
    },
    M = function (t, e) {
      (this._settings = (function (t) {
        return _extends({}, r, t);
      })(t)),
        (this._loadingCount = 0),
        O(this),
        this.update(e);
    };
  return (
    (M.prototype = {
      update: function (t) {
        var n,
          o = this,
          r = this._settings;
        ((this._elements = C(t, r)), !e && this._observer)
          ? ((function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            })(r) &&
              ((n = this)._elements.forEach(function (t) {
                -1 !== N.indexOf(t.tagName) &&
                  (t.setAttribute("loading", "lazy"), z(t, n));
              }),
              (this._elements = C(t, r))),
            this._elements.forEach(function (t) {
              o._observer.observe(t);
            }))
          : this.loadAll();
      },
      destroy: function () {
        var t = this;
        this._observer &&
          (this._elements.forEach(function (e) {
            t._observer.unobserve(e);
          }),
          (this._observer = null)),
          (this._elements = null),
          (this._settings = null);
      },
      load: function (t, e) {
        z(t, this, e);
      },
      loadAll: function () {
        var t = this;
        this._elements.forEach(function (e) {
          A(e, t);
        });
      },
    }),
    t &&
      (function (t, e) {
        if (e)
          if (e.length) for (var n, o = 0; (n = e[o]); o += 1) u(t, n);
          else u(t, e);
      })(M, window.lazyLoadOptions),
    M
  );
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*! jQuery UI - v1.12.1 - 2018-01-16
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/menu.js, widgets/mouse.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  function e(t) {
    for (var e = t.css("visibility"); "inherit" === e; )
      (t = t.parent()), (e = t.css("visibility"));
    return "hidden" !== e;
  }
  function i(t) {
    for (var e, i; t.length && t[0] !== document; ) {
      if (
        ((e = t.css("position")),
        ("absolute" === e || "relative" === e || "fixed" === e) &&
          ((i = parseInt(t.css("zIndex"), 10)), !isNaN(i) && 0 !== i))
      )
        return i;
      t = t.parent();
    }
    return 0;
  }
  function s() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      t.extend(this._defaults, this.regional[""]),
      (this.regional.en = t.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
      (this.dpDiv = n(
        t(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function n(e) {
    var i =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e
      .on("mouseout", i, function () {
        t(this).removeClass("ui-state-hover"),
          -1 !== this.className.indexOf("ui-datepicker-prev") &&
            t(this).removeClass("ui-datepicker-prev-hover"),
          -1 !== this.className.indexOf("ui-datepicker-next") &&
            t(this).removeClass("ui-datepicker-next-hover");
      })
      .on("mouseover", i, o);
  }
  function o() {
    t.datepicker._isDisabledDatepicker(
      u.inline ? u.dpDiv.parent()[0] : u.input[0]
    ) ||
      (t(this)
        .parents(".ui-datepicker-calendar")
        .find("a")
        .removeClass("ui-state-hover"),
      t(this).addClass("ui-state-hover"),
      -1 !== this.className.indexOf("ui-datepicker-prev") &&
        t(this).addClass("ui-datepicker-prev-hover"),
      -1 !== this.className.indexOf("ui-datepicker-next") &&
        t(this).addClass("ui-datepicker-next-hover"));
  }
  function a(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e;
  }
  function r(t) {
    return function () {
      var e = this.element.val();
      t.apply(this, arguments),
        this._refresh(),
        e !== this.element.val() && this._trigger("change");
    };
  }
  (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
  var l = 0,
    h = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, "events")),
            s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        l = e.split(".")[0];
      e = e.split(".")[1];
      var h = l + "-" + e;
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[":"][h.toLowerCase()] = function (e) {
          return !!t.data(e, h);
        }),
        (t[l] = t[l] || {}),
        (n = t[l][e]),
        (o = t[l][e] =
          function (t, e) {
            return this._createWidget
              ? (arguments.length && this._createWidget(t, e), void 0)
              : new o(t, e);
          }),
        t.extend(o, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: [],
        }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? ((r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })()),
              void 0)
            : ((r[e] = s), void 0);
        }),
        (o.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
          r,
          { constructor: o, namespace: l, widgetName: e, widgetFullName: h }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var i, s, n = h.call(arguments, 1), o = 0, a = n.length; a > o; o++)
        for (i in n[o])
          (s = n[o][i]),
            n[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (e[i] = t.isPlainObject(s)
                ? t.isPlainObject(e[i])
                  ? t.widget.extend({}, e[i], s)
                  : t.widget.extend({}, s)
                : s);
      return e;
    }),
    (t.widget.bridge = function (e, i) {
      var s = i.prototype.widgetFullName || e;
      t.fn[e] = function (n) {
        var o = "string" == typeof n,
          a = h.call(arguments, 1),
          r = this;
        return (
          o
            ? this.length || "instance" !== n
              ? this.each(function () {
                  var i,
                    o = t.data(this, s);
                  return "instance" === n
                    ? ((r = o), !1)
                    : o
                    ? t.isFunction(o[n]) && "_" !== n.charAt(0)
                      ? ((i = o[n].apply(o, a)),
                        i !== o && void 0 !== i
                          ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1)
                          : void 0)
                      : t.error(
                          "no such method '" +
                            n +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; " +
                          "attempted to call method '" +
                          n +
                          "'"
                      );
                })
              : (r = void 0)
            : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))),
              this.each(function () {
                var e = t.data(this, s);
                e
                  ? (e.option(n || {}), e._init && e._init())
                  : t.data(this, s, new i(n, this));
              })),
          r
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (e, i) {
        (i = t(i || this.defaultElement || this)[0]),
          (this.element = t(i)),
          (this.uuid = l++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          i !== this &&
            (t.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === i && this.destroy();
              },
            }),
            (this.document = t(i.style ? i.ownerDocument : i.document || i)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            e
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (((a = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
            for (
              n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
              s.length - 1 > o;
              o++
            )
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add
                ? t(t.unique(a.get().concat(e.element.get())))
                : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend(
            { element: this.element, classes: this.options.classes || {} },
            e
          )),
          this._on(e.element, { remove: "_untrackClassesElement" }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) &&
            (i.classesElementLookup[s] = t(n.not(e.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s,
          };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e ||
                (o.options.disabled !== !0 &&
                  !t(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            "string" != typeof a &&
              (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var l = s.match(/^([\w:-]*)\s*(.*)$/),
              h = l[1] + o.eventNamespace,
              c = l[2];
            c ? n.on(h, c, r) : i.on(h, r);
          });
      },
      _off: function (e, i) {
        (i =
          (i || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-focus");
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (
            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              a.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
      t.Widget.prototype["_" + e] = function (s, n, o) {
        "string" == typeof n && (n = { effect: n });
        var a,
          r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : e;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    }),
    t.widget,
    (function () {
      function e(t, e, i) {
        return [
          parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1),
          parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1),
        ];
      }
      function i(e, i) {
        return parseInt(t.css(e, i), 10) || 0;
      }
      function s(e) {
        var i = e[0];
        return 9 === i.nodeType
          ? {
              width: e.width(),
              height: e.height(),
              offset: { top: 0, left: 0 },
            }
          : t.isWindow(i)
          ? {
              width: e.width(),
              height: e.height(),
              offset: { top: e.scrollTop(), left: e.scrollLeft() },
            }
          : i.preventDefault
          ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
          : {
              width: e.outerWidth(),
              height: e.outerHeight(),
              offset: e.offset(),
            };
      }
      var n,
        o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        l = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
      (t.position = {
        scrollbarWidth: function () {
          if (void 0 !== n) return n;
          var e,
            i,
            s = t(
              "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
            ),
            o = s.children()[0];
          return (
            t("body").append(s),
            (e = o.offsetWidth),
            s.css("overflow", "scroll"),
            (i = o.offsetWidth),
            e === i && (i = s[0].clientWidth),
            s.remove(),
            (n = e - i)
          );
        },
        getScrollInfo: function (e) {
          var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n =
              "scroll" === i ||
              ("auto" === i && e.width < e.element[0].scrollWidth),
            o =
              "scroll" === s ||
              ("auto" === s && e.height < e.element[0].scrollHeight);
          return {
            width: o ? t.position.scrollbarWidth() : 0,
            height: n ? t.position.scrollbarWidth() : 0,
          };
        },
        getWithinInfo: function (e) {
          var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
          return {
            element: i,
            isWindow: s,
            isDocument: n,
            offset: o ? t(e).offset() : { left: 0, top: 0 },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight(),
          };
        },
      }),
        (t.fn.position = function (n) {
          if (!n || !n.of) return d.apply(this, arguments);
          n = t.extend({}, n);
          var u,
            p,
            f,
            g,
            m,
            _,
            v = t(n.of),
            b = t.position.getWithinInfo(n.within),
            y = t.position.getScrollInfo(b),
            w = (n.collision || "flip").split(" "),
            k = {};
          return (
            (_ = s(v)),
            v[0].preventDefault && (n.at = "left top"),
            (p = _.width),
            (f = _.height),
            (g = _.offset),
            (m = t.extend({}, g)),
            t.each(["my", "at"], function () {
              var t,
                e,
                i = (n[this] || "").split(" ");
              1 === i.length &&
                (i = r.test(i[0])
                  ? i.concat(["center"])
                  : l.test(i[0])
                  ? ["center"].concat(i)
                  : ["center", "center"]),
                (i[0] = r.test(i[0]) ? i[0] : "center"),
                (i[1] = l.test(i[1]) ? i[1] : "center"),
                (t = h.exec(i[0])),
                (e = h.exec(i[1])),
                (k[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                (n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]);
            }),
            1 === w.length && (w[1] = w[0]),
            "right" === n.at[0]
              ? (m.left += p)
              : "center" === n.at[0] && (m.left += p / 2),
            "bottom" === n.at[1]
              ? (m.top += f)
              : "center" === n.at[1] && (m.top += f / 2),
            (u = e(k.at, p, f)),
            (m.left += u[0]),
            (m.top += u[1]),
            this.each(function () {
              var s,
                r,
                l = t(this),
                h = l.outerWidth(),
                c = l.outerHeight(),
                d = i(this, "marginLeft"),
                _ = i(this, "marginTop"),
                x = h + d + i(this, "marginRight") + y.width,
                C = c + _ + i(this, "marginBottom") + y.height,
                D = t.extend({}, m),
                T = e(k.my, l.outerWidth(), l.outerHeight());
              "right" === n.my[0]
                ? (D.left -= h)
                : "center" === n.my[0] && (D.left -= h / 2),
                "bottom" === n.my[1]
                  ? (D.top -= c)
                  : "center" === n.my[1] && (D.top -= c / 2),
                (D.left += T[0]),
                (D.top += T[1]),
                (s = { marginLeft: d, marginTop: _ }),
                t.each(["left", "top"], function (e, i) {
                  t.ui.position[w[e]] &&
                    t.ui.position[w[e]][i](D, {
                      targetWidth: p,
                      targetHeight: f,
                      elemWidth: h,
                      elemHeight: c,
                      collisionPosition: s,
                      collisionWidth: x,
                      collisionHeight: C,
                      offset: [u[0] + T[0], u[1] + T[1]],
                      my: n.my,
                      at: n.at,
                      within: b,
                      elem: l,
                    });
                }),
                n.using &&
                  (r = function (t) {
                    var e = g.left - D.left,
                      i = e + p - h,
                      s = g.top - D.top,
                      r = s + f - c,
                      u = {
                        target: {
                          element: v,
                          left: g.left,
                          top: g.top,
                          width: p,
                          height: f,
                        },
                        element: {
                          element: l,
                          left: D.left,
                          top: D.top,
                          width: h,
                          height: c,
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle",
                      };
                    h > p && p > a(e + i) && (u.horizontal = "center"),
                      c > f && f > a(s + r) && (u.vertical = "middle"),
                      (u.important =
                        o(a(e), a(i)) > o(a(s), a(r))
                          ? "horizontal"
                          : "vertical"),
                      n.using.call(this, t, u);
                  }),
                l.offset(t.extend(D, { using: r }));
            })
          );
        }),
        (t.ui.position = {
          fit: {
            left: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollLeft : s.offset.left,
                a = s.width,
                r = t.left - e.collisionPosition.marginLeft,
                l = n - r,
                h = r + e.collisionWidth - a - n;
              e.collisionWidth > a
                ? l > 0 && 0 >= h
                  ? ((i = t.left + l + e.collisionWidth - a - n),
                    (t.left += l - i))
                  : (t.left =
                      h > 0 && 0 >= l
                        ? n
                        : l > h
                        ? n + a - e.collisionWidth
                        : n)
                : l > 0
                ? (t.left += l)
                : h > 0
                ? (t.left -= h)
                : (t.left = o(t.left - r, t.left));
            },
            top: function (t, e) {
              var i,
                s = e.within,
                n = s.isWindow ? s.scrollTop : s.offset.top,
                a = e.within.height,
                r = t.top - e.collisionPosition.marginTop,
                l = n - r,
                h = r + e.collisionHeight - a - n;
              e.collisionHeight > a
                ? l > 0 && 0 >= h
                  ? ((i = t.top + l + e.collisionHeight - a - n),
                    (t.top += l - i))
                  : (t.top =
                      h > 0 && 0 >= l
                        ? n
                        : l > h
                        ? n + a - e.collisionHeight
                        : n)
                : l > 0
                ? (t.top += l)
                : h > 0
                ? (t.top -= h)
                : (t.top = o(t.top - r, t.top));
            },
          },
          flip: {
            left: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.left + n.scrollLeft,
                r = n.width,
                l = n.isWindow ? n.scrollLeft : n.offset.left,
                h = t.left - e.collisionPosition.marginLeft,
                c = h - l,
                u = h + e.collisionWidth - r - l,
                d =
                  "left" === e.my[0]
                    ? -e.elemWidth
                    : "right" === e.my[0]
                    ? e.elemWidth
                    : 0,
                p =
                  "left" === e.at[0]
                    ? e.targetWidth
                    : "right" === e.at[0]
                    ? -e.targetWidth
                    : 0,
                f = -2 * e.offset[0];
              0 > c
                ? ((i = t.left + d + p + f + e.collisionWidth - r - o),
                  (0 > i || a(c) > i) && (t.left += d + p + f))
                : u > 0 &&
                  ((s =
                    t.left - e.collisionPosition.marginLeft + d + p + f - l),
                  (s > 0 || u > a(s)) && (t.left += d + p + f));
            },
            top: function (t, e) {
              var i,
                s,
                n = e.within,
                o = n.offset.top + n.scrollTop,
                r = n.height,
                l = n.isWindow ? n.scrollTop : n.offset.top,
                h = t.top - e.collisionPosition.marginTop,
                c = h - l,
                u = h + e.collisionHeight - r - l,
                d = "top" === e.my[1],
                p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                f =
                  "top" === e.at[1]
                    ? e.targetHeight
                    : "bottom" === e.at[1]
                    ? -e.targetHeight
                    : 0,
                g = -2 * e.offset[1];
              0 > c
                ? ((s = t.top + p + f + g + e.collisionHeight - r - o),
                  (0 > s || a(c) > s) && (t.top += p + f + g))
                : u > 0 &&
                  ((i = t.top - e.collisionPosition.marginTop + p + f + g - l),
                  (i > 0 || u > a(i)) && (t.top += p + f + g));
            },
          },
          flipfit: {
            left: function () {
              t.ui.position.flip.left.apply(this, arguments),
                t.ui.position.fit.left.apply(this, arguments);
            },
            top: function () {
              t.ui.position.flip.top.apply(this, arguments),
                t.ui.position.fit.top.apply(this, arguments);
            },
          },
        });
    })(),
    t.ui.position,
    t.extend(t.expr[":"], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
    }),
    t.fn.extend({
      disableSelection: (function () {
        var t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    }),
    (t.ui.focusable = function (i, s) {
      var n,
        o,
        a,
        r,
        l,
        h = i.nodeName.toLowerCase();
      return "area" === h
        ? ((n = i.parentNode),
          (o = n.name),
          i.href && o && "map" === n.nodeName.toLowerCase()
            ? ((a = t("img[usemap='#" + o + "']")),
              a.length > 0 && a.is(":visible"))
            : !1)
        : (/^(input|select|textarea|button|object)$/.test(h)
            ? ((r = !i.disabled),
              r && ((l = t(i).closest("fieldset")[0]), l && (r = !l.disabled)))
            : (r = "a" === h ? i.href || s : s),
          r && t(i).is(":visible") && e(t(i)));
    }),
    t.extend(t.expr[":"], {
      focusable: function (e) {
        return t.ui.focusable(e, null != t.attr(e, "tabindex"));
      },
    }),
    t.ui.focusable,
    (t.fn.form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : t(this[0].form);
    }),
    (t.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = t(this);
        setTimeout(function () {
          var i = e.data("ui-form-reset-instances");
          t.each(i, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        if (((this.form = this.element.form()), this.form.length)) {
          var t = this.form.data("ui-form-reset-instances") || [];
          t.length ||
            this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t);
        }
      },
      _unbindFormResetHandler: function () {
        if (this.form.length) {
          var e = this.form.data("ui-form-reset-instances");
          e.splice(t.inArray(this, e), 1),
            e.length
              ? this.form.data("ui-form-reset-instances", e)
              : this.form
                  .removeData("ui-form-reset-instances")
                  .off("reset.ui-form-reset");
        }
      },
    }),
    "1.7" === t.fn.jquery.substring(0, 3) &&
      (t.each(["Width", "Height"], function (e, i) {
        function s(e, i, s, o) {
          return (
            t.each(n, function () {
              (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                s &&
                  (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }),
            i
          );
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          o = i.toLowerCase(),
          a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight,
          };
        (t.fn["inner" + i] = function (e) {
          return void 0 === e
            ? a["inner" + i].call(this)
            : this.each(function () {
                t(this).css(o, s(this, e) + "px");
              });
        }),
          (t.fn["outer" + i] = function (e, n) {
            return "number" != typeof e
              ? a["outer" + i].call(this, e)
              : this.each(function () {
                  t(this).css(o, s(this, e, !0, n) + "px");
                });
          });
      }),
      (t.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      })),
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    (t.ui.escapeSelector = (function () {
      var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
      return function (e) {
        return e.replace(t, "\\$1");
      };
    })()),
    (t.fn.labels = function () {
      var e, i, s, n, o;
      return this[0].labels && this[0].labels.length
        ? this.pushStack(this[0].labels)
        : ((n = this.eq(0).parents("label")),
          (s = this.attr("id")),
          s &&
            ((e = this.eq(0).parents().last()),
            (o = e.add(e.length ? e.siblings() : this.siblings())),
            (i = "label[for='" + t.ui.escapeSelector(s) + "']"),
            (n = n.add(o.find(i).addBack(i)))),
          this.pushStack(n));
    }),
    (t.fn.scrollParent = function (e) {
      var i = this.css("position"),
        s = "absolute" === i,
        n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        o = this.parents()
          .filter(function () {
            var e = t(this);
            return s && "static" === e.css("position")
              ? !1
              : n.test(
                  e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
                );
          })
          .eq(0);
      return "fixed" !== i && o.length
        ? o
        : t(this[0].ownerDocument || document);
    }),
    t.extend(t.expr[":"], {
      tabbable: function (e) {
        var i = t.attr(e, "tabindex"),
          s = null != i;
        return (!s || i >= 0) && t.ui.focusable(e, s);
      },
    }),
    t.fn.extend({
      uniqueId: (function () {
        var t = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++t);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
        });
      },
    });
  var c = /ui-corner-([a-z]){2,6}/g;
  t.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button:
          "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input",
      },
    },
    _create: function () {
      this._enhance();
    },
    _enhance: function () {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function () {
      this._callChildMethod("destroy"),
        this.childWidgets.removeData("ui-controlgroup-data"),
        this.element.removeAttr("role"),
        this.options.items.controlgroupLabel &&
          this.element
            .find(this.options.items.controlgroupLabel)
            .find(".ui-controlgroup-label-contents")
            .contents()
            .unwrap();
    },
    _initWidgets: function () {
      var e = this,
        i = [];
      t.each(this.options.items, function (s, n) {
        var o,
          a = {};
        return n
          ? "controlgroupLabel" === s
            ? ((o = e.element.find(n)),
              o.each(function () {
                var e = t(this);
                e.children(".ui-controlgroup-label-contents").length ||
                  e
                    .contents()
                    .wrapAll(
                      "<span class='ui-controlgroup-label-contents'></span>"
                    );
              }),
              e._addClass(
                o,
                null,
                "ui-widget ui-widget-content ui-state-default"
              ),
              (i = i.concat(o.get())),
              void 0)
            : (t.fn[s] &&
                ((a = e["_" + s + "Options"]
                  ? e["_" + s + "Options"]("middle")
                  : { classes: {} }),
                e.element.find(n).each(function () {
                  var n = t(this),
                    o = n[s]("instance"),
                    r = t.widget.extend({}, a);
                  if ("button" !== s || !n.parent(".ui-spinner").length) {
                    o || (o = n[s]()[s]("instance")),
                      o && (r.classes = e._resolveClassesValues(r.classes, o)),
                      n[s](r);
                    var l = n[s]("widget");
                    t.data(
                      l[0],
                      "ui-controlgroup-data",
                      o ? o : n[s]("instance")
                    ),
                      i.push(l[0]);
                  }
                })),
              void 0)
          : void 0;
      }),
        (this.childWidgets = t(t.unique(i))),
        this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function (e) {
      this.childWidgets.each(function () {
        var i = t(this),
          s = i.data("ui-controlgroup-data");
        s && s[e] && s[e]();
      });
    },
    _updateCornerClass: function (t, e) {
      var i =
          "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
        s = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, i), this._addClass(t, null, s);
    },
    _buildSimpleOptions: function (t, e) {
      var i = "vertical" === this.options.direction,
        s = { classes: {} };
      return (
        (s.classes[e] = {
          middle: "",
          first: "ui-corner-" + (i ? "top" : "left"),
          last: "ui-corner-" + (i ? "bottom" : "right"),
          only: "ui-corner-all",
        }[t]),
        s
      );
    },
    _spinnerOptions: function (t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");
      return (
        (e.classes["ui-spinner-up"] = ""),
        (e.classes["ui-spinner-down"] = ""),
        e
      );
    },
    _buttonOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function (t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function (t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e ? "auto" : !1,
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": "",
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left"),
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed":
              "ui-corner-" + (e ? "bottom" : "right"),
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all",
          },
        }[t],
      };
    },
    _resolveClassesValues: function (e, i) {
      var s = {};
      return (
        t.each(e, function (n) {
          var o = i.options.classes[n] || "";
          (o = t.trim(o.replace(c, ""))),
            (s[n] = (o + " " + e[n]).replace(/\s+/g, " "));
        }),
        s
      );
    },
    _setOption: function (t, e) {
      return (
        "direction" === t &&
          this._removeClass("ui-controlgroup-" + this.options.direction),
        this._super(t, e),
        "disabled" === t
          ? (this._callChildMethod(e ? "disable" : "enable"), void 0)
          : (this.refresh(), void 0)
      );
    },
    refresh: function () {
      var e,
        i = this;
      this._addClass(
        "ui-controlgroup ui-controlgroup-" + this.options.direction
      ),
        "horizontal" === this.options.direction &&
          this._addClass(null, "ui-helper-clearfix"),
        this._initWidgets(),
        (e = this.childWidgets),
        this.options.onlyVisible && (e = e.filter(":visible")),
        e.length &&
          (t.each(["first", "last"], function (t, s) {
            var n = e[s]().data("ui-controlgroup-data");
            if (n && i["_" + n.widgetName + "Options"]) {
              var o = i["_" + n.widgetName + "Options"](
                1 === e.length ? "only" : s
              );
              (o.classes = i._resolveClassesValues(o.classes, n)),
                n.element[n.widgetName](o);
            } else i._updateCornerClass(e[s](), s);
          }),
          this._callChildMethod("refresh"));
    },
  }),
    t.widget("ui.checkboxradio", [
      t.ui.formResetMixin,
      {
        version: "1.12.1",
        options: {
          disabled: null,
          label: null,
          icon: !0,
          classes: {
            "ui-checkboxradio-label": "ui-corner-all",
            "ui-checkboxradio-icon": "ui-corner-all",
          },
        },
        _getCreateOptions: function () {
          var e,
            i,
            s = this,
            n = this._super() || {};
          return (
            this._readType(),
            (i = this.element.labels()),
            (this.label = t(i[i.length - 1])),
            this.label.length ||
              t.error("No label found for checkboxradio widget"),
            (this.originalLabel = ""),
            this.label
              .contents()
              .not(this.element[0])
              .each(function () {
                s.originalLabel +=
                  3 === this.nodeType ? t(this).text() : this.outerHTML;
              }),
            this.originalLabel && (n.label = this.originalLabel),
            (e = this.element[0].disabled),
            null != e && (n.disabled = e),
            n
          );
        },
        _create: function () {
          var t = this.element[0].checked;
          this._bindFormResetHandler(),
            null == this.options.disabled &&
              (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(
              this.label,
              "ui-checkboxradio-label",
              "ui-button ui-widget"
            ),
            "radio" === this.type &&
              this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel
              ? this._updateLabel()
              : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t &&
              (this._addClass(
                this.label,
                "ui-checkboxradio-checked",
                "ui-state-active"
              ),
              this.icon && this._addClass(this.icon, null, "ui-state-hover")),
            this._on({
              change: "_toggleClasses",
              focus: function () {
                this._addClass(
                  this.label,
                  null,
                  "ui-state-focus ui-visual-focus"
                );
              },
              blur: function () {
                this._removeClass(
                  this.label,
                  null,
                  "ui-state-focus ui-visual-focus"
                );
              },
            });
        },
        _readType: function () {
          var e = this.element[0].nodeName.toLowerCase();
          (this.type = this.element[0].type),
            ("input" === e && /radio|checkbox/.test(this.type)) ||
              t.error(
                "Can't create checkboxradio on element.nodeName=" +
                  e +
                  " and element.type=" +
                  this.type
              );
        },
        _enhance: function () {
          this._updateIcon(this.element[0].checked);
        },
        widget: function () {
          return this.label;
        },
        _getRadioGroup: function () {
          var e,
            i = this.element[0].name,
            s = "input[name='" + t.ui.escapeSelector(i) + "']";
          return i
            ? ((e = this.form.length
                ? t(this.form[0].elements).filter(s)
                : t(s).filter(function () {
                    return 0 === t(this).form().length;
                  })),
              e.not(this.element))
            : t([]);
        },
        _toggleClasses: function () {
          var e = this.element[0].checked;
          this._toggleClass(
            this.label,
            "ui-checkboxradio-checked",
            "ui-state-active",
            e
          ),
            this.options.icon &&
              "checkbox" === this.type &&
              this._toggleClass(
                this.icon,
                null,
                "ui-icon-check ui-state-checked",
                e
              )._toggleClass(this.icon, null, "ui-icon-blank", !e),
            "radio" === this.type &&
              this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio("instance");
                e &&
                  e._removeClass(
                    e.label,
                    "ui-checkboxradio-checked",
                    "ui-state-active"
                  );
              });
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function (t, e) {
          return "label" !== t || e
            ? (this._super(t, e),
              "disabled" === t
                ? (this._toggleClass(this.label, null, "ui-state-disabled", e),
                  (this.element[0].disabled = e),
                  void 0)
                : (this.refresh(), void 0))
            : void 0;
        },
        _updateIcon: function (e) {
          var i = "ui-icon ui-icon-background ";
          this.options.icon
            ? (this.icon ||
                ((this.icon = t("<span>")),
                (this.iconSpace = t("<span> </span>")),
                this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
              "checkbox" === this.type
                ? ((i += e
                    ? "ui-icon-check ui-state-checked"
                    : "ui-icon-blank"),
                  this._removeClass(
                    this.icon,
                    null,
                    e ? "ui-icon-blank" : "ui-icon-check"
                  ))
                : (i += "ui-icon-blank"),
              this._addClass(this.icon, "ui-checkboxradio-icon", i),
              e ||
                this._removeClass(
                  this.icon,
                  null,
                  "ui-icon-check ui-state-checked"
                ),
              this.icon.prependTo(this.label).after(this.iconSpace))
            : void 0 !== this.icon &&
              (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function () {
          var t = this.label.contents().not(this.element[0]);
          this.icon && (t = t.not(this.icon[0])),
            this.iconSpace && (t = t.not(this.iconSpace[0])),
            t.remove(),
            this.label.append(this.options.label);
        },
        refresh: function () {
          var t = this.element[0].checked,
            e = this.element[0].disabled;
          this._updateIcon(t),
            this._toggleClass(
              this.label,
              "ui-checkboxradio-checked",
              "ui-state-active",
              t
            ),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({ disabled: e });
        },
      },
    ]),
    t.ui.checkboxradio,
    t.widget("ui.button", {
      version: "1.12.1",
      defaultElement: "<button>",
      options: {
        classes: { "ui-button": "ui-corner-all" },
        disabled: null,
        icon: null,
        iconPosition: "beginning",
        label: null,
        showLabel: !0,
      },
      _getCreateOptions: function () {
        var t,
          e = this._super() || {};
        return (
          (this.isInput = this.element.is("input")),
          (t = this.element[0].disabled),
          null != t && (e.disabled = t),
          (this.originalLabel = this.isInput
            ? this.element.val()
            : this.element.html()),
          this.originalLabel && (e.label = this.originalLabel),
          e
        );
      },
      _create: function () {
        !this.option.showLabel & !this.options.icon &&
          (this.options.showLabel = !0),
          null == this.options.disabled &&
            (this.options.disabled = this.element[0].disabled || !1),
          (this.hasTitle = !!this.element.attr("title")),
          this.options.label &&
            this.options.label !== this.originalLabel &&
            (this.isInput
              ? this.element.val(this.options.label)
              : this.element.html(this.options.label)),
          this._addClass("ui-button", "ui-widget"),
          this._setOption("disabled", this.options.disabled),
          this._enhance(),
          this.element.is("a") &&
            this._on({
              keyup: function (e) {
                e.keyCode === t.ui.keyCode.SPACE &&
                  (e.preventDefault(),
                  this.element[0].click
                    ? this.element[0].click()
                    : this.element.trigger("click"));
              },
            });
      },
      _enhance: function () {
        this.element.is("button") || this.element.attr("role", "button"),
          this.options.icon &&
            (this._updateIcon("icon", this.options.icon),
            this._updateTooltip());
      },
      _updateTooltip: function () {
        (this.title = this.element.attr("title")),
          this.options.showLabel ||
            this.title ||
            this.element.attr("title", this.options.label);
      },
      _updateIcon: function (e, i) {
        var s = "iconPosition" !== e,
          n = s ? this.options.iconPosition : i,
          o = "top" === n || "bottom" === n;
        this.icon
          ? s && this._removeClass(this.icon, null, this.options.icon)
          : ((this.icon = t("<span>")),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
          s && this._addClass(this.icon, null, i),
          this._attachIcon(n),
          o
            ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
              this.iconSpace && this.iconSpace.remove())
            : (this.iconSpace ||
                ((this.iconSpace = t("<span> </span>")),
                this._addClass(this.iconSpace, "ui-button-icon-space")),
              this._removeClass(this.icon, null, "ui-wiget-icon-block"),
              this._attachIconSpace(n));
      },
      _destroy: function () {
        this.element.removeAttr("role"),
          this.icon && this.icon.remove(),
          this.iconSpace && this.iconSpace.remove(),
          this.hasTitle || this.element.removeAttr("title");
      },
      _attachIconSpace: function (t) {
        this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](
          this.iconSpace
        );
      },
      _attachIcon: function (t) {
        this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](
          this.icon
        );
      },
      _setOptions: function (t) {
        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
          i = void 0 === t.icon ? this.options.icon : t.icon;
        e || i || (t.showLabel = !0), this._super(t);
      },
      _setOption: function (t, e) {
        "icon" === t &&
          (e
            ? this._updateIcon(t, e)
            : this.icon &&
              (this.icon.remove(), this.iconSpace && this.iconSpace.remove())),
          "iconPosition" === t && this._updateIcon(t, e),
          "showLabel" === t &&
            (this._toggleClass("ui-button-icon-only", null, !e),
            this._updateTooltip()),
          "label" === t &&
            (this.isInput
              ? this.element.val(e)
              : (this.element.html(e),
                this.icon &&
                  (this._attachIcon(this.options.iconPosition),
                  this._attachIconSpace(this.options.iconPosition)))),
          this._super(t, e),
          "disabled" === t &&
            (this._toggleClass(null, "ui-state-disabled", e),
            (this.element[0].disabled = e),
            e && this.element.blur());
      },
      refresh: function () {
        var t = this.element.is("input, button")
          ? this.element[0].disabled
          : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOptions({ disabled: t }),
          this._updateTooltip();
      },
    }),
    t.uiBackCompat !== !1 &&
      (t.widget("ui.button", t.ui.button, {
        options: { text: !0, icons: { primary: null, secondary: null } },
        _create: function () {
          this.options.showLabel &&
            !this.options.text &&
            (this.options.showLabel = this.options.text),
            !this.options.showLabel &&
              this.options.text &&
              (this.options.text = this.options.showLabel),
            this.options.icon ||
            (!this.options.icons.primary && !this.options.icons.secondary)
              ? this.options.icon &&
                (this.options.icons.primary = this.options.icon)
              : this.options.icons.primary
              ? (this.options.icon = this.options.icons.primary)
              : ((this.options.icon = this.options.icons.secondary),
                (this.options.iconPosition = "end")),
            this._super();
        },
        _setOption: function (t, e) {
          return "text" === t
            ? (this._super("showLabel", e), void 0)
            : ("showLabel" === t && (this.options.text = e),
              "icon" === t && (this.options.icons.primary = e),
              "icons" === t &&
                (e.primary
                  ? (this._super("icon", e.primary),
                    this._super("iconPosition", "beginning"))
                  : e.secondary &&
                    (this._super("icon", e.secondary),
                    this._super("iconPosition", "end"))),
              this._superApply(arguments),
              void 0);
        },
      }),
      (t.fn.button = (function (e) {
        return function () {
          return !this.length ||
            (this.length && "INPUT" !== this[0].tagName) ||
            (this.length &&
              "INPUT" === this[0].tagName &&
              "checkbox" !== this.attr("type") &&
              "radio" !== this.attr("type"))
            ? e.apply(this, arguments)
            : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
              0 === arguments.length
                ? this.checkboxradio({ icon: !1 })
                : this.checkboxradio.apply(this, arguments));
        };
      })(t.fn.button)),
      (t.fn.buttonset = function () {
        return (
          t.ui.controlgroup || t.error("Controlgroup widget missing"),
          "option" === arguments[0] && "items" === arguments[1] && arguments[2]
            ? this.controlgroup.apply(this, [
                arguments[0],
                "items.button",
                arguments[2],
              ])
            : "option" === arguments[0] && "items" === arguments[1]
            ? this.controlgroup.apply(this, [arguments[0], "items.button"])
            : ("object" == typeof arguments[0] &&
                arguments[0].items &&
                (arguments[0].items = { button: arguments[0].items }),
              this.controlgroup.apply(this, arguments))
        );
      })),
    t.ui.button,
    t.extend(t.ui, { datepicker: { version: "1.12.1" } });
  var u;
  t.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (t) {
      return a(this._defaults, t || {}), this;
    },
    _attachDatepicker: function (e, i) {
      var s, n, o;
      (s = e.nodeName.toLowerCase()),
        (n = "div" === s || "span" === s),
        e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
        (o = this._newInst(t(e), n)),
        (o.settings = t.extend({}, i || {})),
        "input" === s
          ? this._connectDatepicker(e, o)
          : n && this._inlineDatepicker(e, o);
    },
    _newInst: function (e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i
          ? n(
              t(
                "<div class='" +
                  this._inlineClass +
                  " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
              )
            )
          : this.dpDiv,
      };
    },
    _connectDatepicker: function (e, i) {
      var s = t(e);
      (i.append = t([])),
        (i.trigger = t([])),
        s.hasClass(this.markerClassName) ||
          (this._attachments(s, i),
          s
            .addClass(this.markerClassName)
            .on("keydown", this._doKeyDown)
            .on("keypress", this._doKeyPress)
            .on("keyup", this._doKeyUp),
          this._autoSize(i),
          t.data(e, "datepicker", i),
          i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function (e, i) {
      var s,
        n,
        o,
        a = this._get(i, "appendText"),
        r = this._get(i, "isRTL");
      i.append && i.append.remove(),
        a &&
          ((i.append = t(
            "<span class='" + this._appendClass + "'>" + a + "</span>"
          )),
          e[r ? "before" : "after"](i.append)),
        e.off("focus", this._showDatepicker),
        i.trigger && i.trigger.remove(),
        (s = this._get(i, "showOn")),
        ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker),
        ("button" === s || "both" === s) &&
          ((n = this._get(i, "buttonText")),
          (o = this._get(i, "buttonImage")),
          (i.trigger = t(
            this._get(i, "buttonImageOnly")
              ? t("<img/>")
                  .addClass(this._triggerClass)
                  .attr({ src: o, alt: n, title: n })
              : t("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)
          )),
          e[r ? "before" : "after"](i.trigger),
          i.trigger.on("click", function () {
            return (
              t.datepicker._datepickerShowing &&
              t.datepicker._lastInput === e[0]
                ? t.datepicker._hideDatepicker()
                : t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput !== e[0]
                ? (t.datepicker._hideDatepicker(),
                  t.datepicker._showDatepicker(e[0]))
                : t.datepicker._showDatepicker(e[0]),
              !1
            );
          }));
    },
    _autoSize: function (t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e,
          i,
          s,
          n,
          o = new Date(2009, 11, 20),
          a = this._get(t, "dateFormat");
        a.match(/[DM]/) &&
          ((e = function (t) {
            for (i = 0, s = 0, n = 0; t.length > n; n++)
              t[n].length > i && ((i = t[n].length), (s = n));
            return s;
          }),
          o.setMonth(
            e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))
          ),
          o.setDate(
            e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
              20 -
              o.getDay()
          )),
          t.input.attr("size", this._formatDate(t, o).length);
      }
    },
    _inlineDatepicker: function (e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) ||
        (s.addClass(this.markerClassName).append(i.dpDiv),
        t.data(e, "datepicker", i),
        this._setDate(i, this._getDefaultDate(i), !0),
        this._updateDatepicker(i),
        this._updateAlternate(i),
        i.settings.disabled && this._disableDatepicker(e),
        i.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function (e, i, s, n, o) {
      var r,
        l,
        h,
        c,
        u,
        d = this._dialogInst;
      return (
        d ||
          ((this.uuid += 1),
          (r = "dp" + this.uuid),
          (this._dialogInput = t(
            "<input type='text' id='" +
              r +
              "' style='position: absolute; top: -100px; width: 0px;'/>"
          )),
          this._dialogInput.on("keydown", this._doKeyDown),
          t("body").append(this._dialogInput),
          (d = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (d.settings = {}),
          t.data(this._dialogInput[0], "datepicker", d)),
        a(d.settings, n || {}),
        (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
        this._dialogInput.val(i),
        (this._pos = o ? (o.length ? o : [o.pageX, o.pageY]) : null),
        this._pos ||
          ((l = document.documentElement.clientWidth),
          (h = document.documentElement.clientHeight),
          (c = document.documentElement.scrollLeft || document.body.scrollLeft),
          (u = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [l / 2 - 100 + c, h / 2 - 150 + u])),
        this._dialogInput
          .css("left", this._pos[0] + 20 + "px")
          .css("top", this._pos[1] + "px"),
        (d.settings.onSelect = s),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        t.blockUI && t.blockUI(this.dpDiv),
        t.data(this._dialogInput[0], "datepicker", d),
        this
      );
    },
    _destroyDatepicker: function (e) {
      var i,
        s = t(e),
        n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        t.removeData(e, "datepicker"),
        "input" === i
          ? (n.append.remove(),
            n.trigger.remove(),
            s
              .removeClass(this.markerClassName)
              .off("focus", this._showDatepicker)
              .off("keydown", this._doKeyDown)
              .off("keypress", this._doKeyPress)
              .off("keyup", this._doKeyUp))
          : ("div" === i || "span" === i) &&
            s.removeClass(this.markerClassName).empty(),
        u === n && (u = null));
    },
    _enableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        "input" === i
          ? ((e.disabled = !1),
            o.trigger
              .filter("button")
              .each(function () {
                this.disabled = !1;
              })
              .end()
              .filter("img")
              .css({ opacity: "1.0", cursor: "" }))
          : ("div" === i || "span" === i) &&
            ((s = n.children("." + this._inlineClass)),
            s.children().removeClass("ui-state-disabled"),
            s
              .find("select.ui-datepicker-month, select.ui-datepicker-year")
              .prop("disabled", !1)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })));
    },
    _disableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        "input" === i
          ? ((e.disabled = !0),
            o.trigger
              .filter("button")
              .each(function () {
                this.disabled = !0;
              })
              .end()
              .filter("img")
              .css({ opacity: "0.5", cursor: "default" }))
          : ("div" === i || "span" === i) &&
            ((s = n.children("." + this._inlineClass)),
            s.children().addClass("ui-state-disabled"),
            s
              .find("select.ui-datepicker-month, select.ui-datepicker-year")
              .prop("disabled", !0)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })),
        (this._disabledInputs[this._disabledInputs.length] = e));
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0;
      return !1;
    },
    _getInst: function (e) {
      try {
        return t.data(e, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function (e, i, s) {
      var n,
        o,
        r,
        l,
        h = this._getInst(e);
      return 2 === arguments.length && "string" == typeof i
        ? "defaults" === i
          ? t.extend({}, t.datepicker._defaults)
          : h
          ? "all" === i
            ? t.extend({}, h.settings)
            : this._get(h, i)
          : null
        : ((n = i || {}),
          "string" == typeof i && ((n = {}), (n[i] = s)),
          h &&
            (this._curInst === h && this._hideDatepicker(),
            (o = this._getDateDatepicker(e, !0)),
            (r = this._getMinMaxDate(h, "min")),
            (l = this._getMinMaxDate(h, "max")),
            a(h.settings, n),
            null !== r &&
              void 0 !== n.dateFormat &&
              void 0 === n.minDate &&
              (h.settings.minDate = this._formatDate(h, r)),
            null !== l &&
              void 0 !== n.dateFormat &&
              void 0 === n.maxDate &&
              (h.settings.maxDate = this._formatDate(h, l)),
            "disabled" in n &&
              (n.disabled
                ? this._disableDatepicker(e)
                : this._enableDatepicker(e)),
            this._attachments(t(e), h),
            this._autoSize(h),
            this._setDate(h, o),
            this._updateAlternate(h),
            this._updateDatepicker(h)),
          void 0);
    },
    _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      i &&
        (this._setDate(i, e),
        this._updateDatepicker(i),
        this._updateAlternate(i));
    },
    _getDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      return (
        i && !i.inline && this._setDateFromField(i, e),
        i ? this._getDate(i) : null
      );
    },
    _doKeyDown: function (e) {
      var i,
        s,
        n,
        o = t.datepicker._getInst(e.target),
        a = !0,
        r = o.dpDiv.is(".ui-datepicker-rtl");
      if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
        switch (e.keyCode) {
          case 9:
            t.datepicker._hideDatepicker(), (a = !1);
            break;
          case 13:
            return (
              (n = t(
                "td." +
                  t.datepicker._dayOverClass +
                  ":not(." +
                  t.datepicker._currentClass +
                  ")",
                o.dpDiv
              )),
              n[0] &&
                t.datepicker._selectDay(
                  e.target,
                  o.selectedMonth,
                  o.selectedYear,
                  n[0]
                ),
              (i = t.datepicker._get(o, "onSelect")),
              i
                ? ((s = t.datepicker._formatDate(o)),
                  i.apply(o.input ? o.input[0] : null, [s, o]))
                : t.datepicker._hideDatepicker(),
              !1
            );
          case 27:
            t.datepicker._hideDatepicker();
            break;
          case 33:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey
                ? -t.datepicker._get(o, "stepBigMonths")
                : -t.datepicker._get(o, "stepMonths"),
              "M"
            );
            break;
          case 34:
            t.datepicker._adjustDate(
              e.target,
              e.ctrlKey
                ? +t.datepicker._get(o, "stepBigMonths")
                : +t.datepicker._get(o, "stepMonths"),
              "M"
            );
            break;
          case 35:
            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
              (a = e.ctrlKey || e.metaKey);
            break;
          case 36:
            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
              (a = e.ctrlKey || e.metaKey);
            break;
          case 37:
            (e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(o, "stepBigMonths")
                    : -t.datepicker._get(o, "stepMonths"),
                  "M"
                );
            break;
          case 38:
            (e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, -7, "D"),
              (a = e.ctrlKey || e.metaKey);
            break;
          case 39:
            (e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
              (a = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey &&
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(o, "stepBigMonths")
                    : +t.datepicker._get(o, "stepMonths"),
                  "M"
                );
            break;
          case 40:
            (e.ctrlKey || e.metaKey) &&
              t.datepicker._adjustDate(e.target, 7, "D"),
              (a = e.ctrlKey || e.metaKey);
            break;
          default:
            a = !1;
        }
      else
        36 === e.keyCode && e.ctrlKey
          ? t.datepicker._showDatepicker(this)
          : (a = !1);
      a && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function (e) {
      var i,
        s,
        n = t.datepicker._getInst(e.target);
      return t.datepicker._get(n, "constrainInput")
        ? ((i = t.datepicker._possibleChars(
            t.datepicker._get(n, "dateFormat")
          )),
          (s = String.fromCharCode(
            null == e.charCode ? e.keyCode : e.charCode
          )),
          e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1)
        : void 0;
    },
    _doKeyUp: function (e) {
      var i,
        s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal)
        try {
          (i = t.datepicker.parseDate(
            t.datepicker._get(s, "dateFormat"),
            s.input ? s.input.val() : null,
            t.datepicker._getFormatConfig(s)
          )),
            i &&
              (t.datepicker._setDateFromField(s),
              t.datepicker._updateAlternate(s),
              t.datepicker._updateDatepicker(s));
        } catch (n) {}
      return !0;
    },
    _showDatepicker: function (e) {
      if (
        ((e = e.target || e),
        "input" !== e.nodeName.toLowerCase() &&
          (e = t("input", e.parentNode)[0]),
        !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)
      ) {
        var s, n, o, r, l, h, c;
        (s = t.datepicker._getInst(e)),
          t.datepicker._curInst &&
            t.datepicker._curInst !== s &&
            (t.datepicker._curInst.dpDiv.stop(!0, !0),
            s &&
              t.datepicker._datepickerShowing &&
              t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
          (n = t.datepicker._get(s, "beforeShow")),
          (o = n ? n.apply(e, [e, s]) : {}),
          o !== !1 &&
            (a(s.settings, o),
            (s.lastVal = null),
            (t.datepicker._lastInput = e),
            t.datepicker._setDateFromField(s),
            t.datepicker._inDialog && (e.value = ""),
            t.datepicker._pos ||
              ((t.datepicker._pos = t.datepicker._findPos(e)),
              (t.datepicker._pos[1] += e.offsetHeight)),
            (r = !1),
            t(e)
              .parents()
              .each(function () {
                return (r |= "fixed" === t(this).css("position")), !r;
              }),
            (l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
            (t.datepicker._pos = null),
            s.dpDiv.empty(),
            s.dpDiv.css({
              position: "absolute",
              display: "block",
              top: "-1000px",
            }),
            t.datepicker._updateDatepicker(s),
            (l = t.datepicker._checkOffset(s, l, r)),
            s.dpDiv.css({
              position:
                t.datepicker._inDialog && t.blockUI
                  ? "static"
                  : r
                  ? "fixed"
                  : "absolute",
              display: "none",
              left: l.left + "px",
              top: l.top + "px",
            }),
            s.inline ||
              ((h = t.datepicker._get(s, "showAnim")),
              (c = t.datepicker._get(s, "duration")),
              s.dpDiv.css("z-index", i(t(e)) + 1),
              (t.datepicker._datepickerShowing = !0),
              t.effects && t.effects.effect[h]
                ? s.dpDiv.show(h, t.datepicker._get(s, "showOptions"), c)
                : s.dpDiv[h || "show"](h ? c : null),
              t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"),
              (t.datepicker._curInst = s)));
      }
    },
    _updateDatepicker: function (e) {
      (this.maxRows = 4),
        (u = e),
        e.dpDiv.empty().append(this._generateHTML(e)),
        this._attachHandlers(e);
      var i,
        s = this._getNumberOfMonths(e),
        n = s[1],
        a = 17,
        r = e.dpDiv.find("." + this._dayOverClass + " a");
      r.length > 0 && o.apply(r.get(0)),
        e.dpDiv
          .removeClass(
            "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
          )
          .width(""),
        n > 1 &&
          e.dpDiv
            .addClass("ui-datepicker-multi-" + n)
            .css("width", a * n + "em"),
        e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"](
          "ui-datepicker-multi"
        ),
        e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
          "ui-datepicker-rtl"
        ),
        e === t.datepicker._curInst &&
          t.datepicker._datepickerShowing &&
          t.datepicker._shouldFocusInput(e) &&
          e.input.trigger("focus"),
        e.yearshtml &&
          ((i = e.yearshtml),
          setTimeout(function () {
            i === e.yearshtml &&
              e.yearshtml &&
              e.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(e.yearshtml),
              (i = e.yearshtml = null);
          }, 0));
    },
    _shouldFocusInput: function (t) {
      return (
        t.input &&
        t.input.is(":visible") &&
        !t.input.is(":disabled") &&
        !t.input.is(":focus")
      );
    },
    _checkOffset: function (e, i, s) {
      var n = e.dpDiv.outerWidth(),
        o = e.dpDiv.outerHeight(),
        a = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        l =
          document.documentElement.clientWidth +
          (s ? 0 : t(document).scrollLeft()),
        h =
          document.documentElement.clientHeight +
          (s ? 0 : t(document).scrollTop());
      return (
        (i.left -= this._get(e, "isRTL") ? n - a : 0),
        (i.left -=
          s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0),
        (i.top -=
          s && i.top === e.input.offset().top + r
            ? t(document).scrollTop()
            : 0),
        (i.left -= Math.min(
          i.left,
          i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0
        )),
        (i.top -= Math.min(
          i.top,
          i.top + o > h && h > o ? Math.abs(o + r) : 0
        )),
        i
      );
    },
    _findPos: function (e) {
      for (
        var i, s = this._getInst(e), n = this._get(s, "isRTL");
        e &&
        ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));

      )
        e = e[n ? "previousSibling" : "nextSibling"];
      return (i = t(e).offset()), [i.left, i.top];
    },
    _hideDatepicker: function (e) {
      var i,
        s,
        n,
        o,
        a = this._curInst;
      !a ||
        (e && a !== t.data(e, "datepicker")) ||
        (this._datepickerShowing &&
          ((i = this._get(a, "showAnim")),
          (s = this._get(a, "duration")),
          (n = function () {
            t.datepicker._tidyDialog(a);
          }),
          t.effects && (t.effects.effect[i] || t.effects[i])
            ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n)
            : a.dpDiv[
                "slideDown" === i
                  ? "slideUp"
                  : "fadeIn" === i
                  ? "fadeOut"
                  : "hide"
              ](i ? s : null, n),
          i || n(),
          (this._datepickerShowing = !1),
          (o = this._get(a, "onClose")),
          o &&
            o.apply(a.input ? a.input[0] : null, [
              a.input ? a.input.val() : "",
              a,
            ]),
          (this._lastInput = null),
          this._inDialog &&
            (this._dialogInput.css({
              position: "absolute",
              left: "0",
              top: "-100px",
            }),
            t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
          (this._inDialog = !1)));
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        ((i[0].id !== t.datepicker._mainDivId &&
          0 === i.parents("#" + t.datepicker._mainDivId).length &&
          !i.hasClass(t.datepicker.markerClassName) &&
          !i.closest("." + t.datepicker._triggerClass).length &&
          t.datepicker._datepickerShowing &&
          (!t.datepicker._inDialog || !t.blockUI)) ||
          (i.hasClass(t.datepicker.markerClassName) &&
            t.datepicker._curInst !== s)) &&
          t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) ||
        (this._adjustInstDate(
          o,
          i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0),
          s
        ),
        this._updateDatepicker(o));
    },
    _gotoToday: function (e) {
      var i,
        s = t(e),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay
        ? ((n.selectedDay = n.currentDay),
          (n.drawMonth = n.selectedMonth = n.currentMonth),
          (n.drawYear = n.selectedYear = n.currentYear))
        : ((i = new Date()),
          (n.selectedDay = i.getDate()),
          (n.drawMonth = n.selectedMonth = i.getMonth()),
          (n.drawYear = n.selectedYear = i.getFullYear())),
        this._notifyChange(n),
        this._adjustDate(s);
    },
    _selectMonthYear: function (e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      (o["selected" + ("M" === s ? "Month" : "Year")] = o[
        "draw" + ("M" === s ? "Month" : "Year")
      ] =
        parseInt(i.options[i.selectedIndex].value, 10)),
        this._notifyChange(o),
        this._adjustDate(n);
    },
    _selectDay: function (e, i, s, n) {
      var o,
        a = t(e);
      t(n).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(a[0]) ||
        ((o = this._getInst(a[0])),
        (o.selectedDay = o.currentDay = t("a", n).html()),
        (o.selectedMonth = o.currentMonth = i),
        (o.selectedYear = o.currentYear = s),
        this._selectDate(
          e,
          this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
        ));
    },
    _clearDate: function (e) {
      var i = t(e);
      this._selectDate(i, "");
    },
    _selectDate: function (e, i) {
      var s,
        n = t(e),
        o = this._getInst(n[0]);
      (i = null != i ? i : this._formatDate(o)),
        o.input && o.input.val(i),
        this._updateAlternate(o),
        (s = this._get(o, "onSelect")),
        s
          ? s.apply(o.input ? o.input[0] : null, [i, o])
          : o.input && o.input.trigger("change"),
        o.inline
          ? this._updateDatepicker(o)
          : (this._hideDatepicker(),
            (this._lastInput = o.input[0]),
            "object" != typeof o.input[0] && o.input.trigger("focus"),
            (this._lastInput = null));
    },
    _updateAlternate: function (e) {
      var i,
        s,
        n,
        o = this._get(e, "altField");
      o &&
        ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
        (s = this._getDate(e)),
        (n = this.formatDate(i, s, this._getFormatConfig(e))),
        t(o).val(n));
    },
    noWeekends: function (t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""];
    },
    iso8601Week: function (t) {
      var e,
        i = new Date(t.getTime());
      return (
        i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
        (e = i.getTime()),
        i.setMonth(0),
        i.setDate(1),
        Math.floor(Math.round((e - i) / 864e5) / 7) + 1
      );
    },
    parseDate: function (e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (((i = "object" == typeof i ? "" + i : i + ""), "" === i)) return null;
      var n,
        o,
        a,
        r,
        l = 0,
        h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        c =
          "string" != typeof h
            ? h
            : (new Date().getFullYear() % 100) + parseInt(h, 10),
        u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        g = -1,
        m = -1,
        _ = -1,
        v = -1,
        b = !1,
        y = function (t) {
          var i = e.length > n + 1 && e.charAt(n + 1) === t;
          return i && n++, i;
        },
        w = function (t) {
          var e = y(t),
            s =
              "@" === t
                ? 14
                : "!" === t
                ? 20
                : "y" === t && e
                ? 4
                : "o" === t
                ? 3
                : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(l).match(o);
          if (!a) throw "Missing number at position " + l;
          return (l += a[0].length), parseInt(a[0], 10);
        },
        k = function (e, s, n) {
          var o = -1,
            a = t
              .map(y(e) ? n : s, function (t, e) {
                return [[e, t]];
              })
              .sort(function (t, e) {
                return -(t[1].length - e[1].length);
              });
          if (
            (t.each(a, function (t, e) {
              var s = e[1];
              return i.substr(l, s.length).toLowerCase() === s.toLowerCase()
                ? ((o = e[0]), (l += s.length), !1)
                : void 0;
            }),
            -1 !== o)
          )
            return o + 1;
          throw "Unknown name at position " + l;
        },
        x = function () {
          if (i.charAt(l) !== e.charAt(n))
            throw "Unexpected literal at position " + l;
          l++;
        };
      for (n = 0; e.length > n; n++)
        if (b) "'" !== e.charAt(n) || y("'") ? x() : (b = !1);
        else
          switch (e.charAt(n)) {
            case "d":
              _ = w("d");
              break;
            case "D":
              k("D", u, d);
              break;
            case "o":
              v = w("o");
              break;
            case "m":
              m = w("m");
              break;
            case "M":
              m = k("M", p, f);
              break;
            case "y":
              g = w("y");
              break;
            case "@":
              (r = new Date(w("@"))),
                (g = r.getFullYear()),
                (m = r.getMonth() + 1),
                (_ = r.getDate());
              break;
            case "!":
              (r = new Date((w("!") - this._ticksTo1970) / 1e4)),
                (g = r.getFullYear()),
                (m = r.getMonth() + 1),
                (_ = r.getDate());
              break;
            case "'":
              y("'") ? x() : (b = !0);
              break;
            default:
              x();
          }
      if (i.length > l && ((a = i.substr(l)), !/^\s+/.test(a)))
        throw "Extra/unparsed characters found in date: " + a;
      if (
        (-1 === g
          ? (g = new Date().getFullYear())
          : 100 > g &&
            (g +=
              new Date().getFullYear() -
              (new Date().getFullYear() % 100) +
              (c >= g ? 0 : -100)),
        v > -1)
      )
        for (m = 1, _ = v; ; ) {
          if (((o = this._getDaysInMonth(g, m - 1)), o >= _)) break;
          m++, (_ -= o);
        }
      if (
        ((r = this._daylightSavingAdjust(new Date(g, m - 1, _))),
        r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _)
      )
        throw "Invalid date";
      return r;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970:
      1e7 *
      60 *
      60 *
      24 *
      (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (t, e, i) {
      if (!e) return "";
      var s,
        n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        o = (i ? i.dayNames : null) || this._defaults.dayNames,
        a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        l = function (e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i;
        },
        h = function (t, e, i) {
          var s = "" + e;
          if (l(t)) for (; i > s.length; ) s = "0" + s;
          return s;
        },
        c = function (t, e, i, s) {
          return l(t) ? s[e] : i[e];
        },
        u = "",
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || l("'") ? (u += t.charAt(s)) : (d = !1);
          else
            switch (t.charAt(s)) {
              case "d":
                u += h("d", e.getDate(), 2);
                break;
              case "D":
                u += c("D", e.getDay(), n, o);
                break;
              case "o":
                u += h(
                  "o",
                  Math.round(
                    (new Date(
                      e.getFullYear(),
                      e.getMonth(),
                      e.getDate()
                    ).getTime() -
                      new Date(e.getFullYear(), 0, 0).getTime()) /
                      864e5
                  ),
                  3
                );
                break;
              case "m":
                u += h("m", e.getMonth() + 1, 2);
                break;
              case "M":
                u += c("M", e.getMonth(), a, r);
                break;
              case "y":
                u += l("y")
                  ? e.getFullYear()
                  : (10 > e.getFullYear() % 100 ? "0" : "") +
                    (e.getFullYear() % 100);
                break;
              case "@":
                u += e.getTime();
                break;
              case "!":
                u += 1e4 * e.getTime() + this._ticksTo1970;
                break;
              case "'":
                l("'") ? (u += "'") : (d = !0);
                break;
              default:
                u += t.charAt(s);
            }
      return u;
    },
    _possibleChars: function (t) {
      var e,
        i = "",
        s = !1,
        n = function (i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s;
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? (i += t.charAt(e)) : (s = !1);
        else
          switch (t.charAt(e)) {
            case "d":
            case "m":
            case "y":
            case "@":
              i += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              n("'") ? (i += "'") : (s = !0);
              break;
            default:
              i += t.charAt(e);
          }
      return i;
    },
    _get: function (t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
          s = (t.lastVal = t.input ? t.input.val() : null),
          n = this._getDefaultDate(t),
          o = n,
          a = this._getFormatConfig(t);
        try {
          o = this.parseDate(i, s, a) || n;
        } catch (r) {
          s = e ? "" : s;
        }
        (t.selectedDay = o.getDate()),
          (t.drawMonth = t.selectedMonth = o.getMonth()),
          (t.drawYear = t.selectedYear = o.getFullYear()),
          (t.currentDay = s ? o.getDate() : 0),
          (t.currentMonth = s ? o.getMonth() : 0),
          (t.currentYear = s ? o.getFullYear() : 0),
          this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(
        t,
        this._determineDate(t, this._get(t, "defaultDate"), new Date())
      );
    },
    _determineDate: function (e, i, s) {
      var n = function (t) {
          var e = new Date();
          return e.setDate(e.getDate() + t), e;
        },
        o = function (i) {
          try {
            return t.datepicker.parseDate(
              t.datepicker._get(e, "dateFormat"),
              i,
              t.datepicker._getFormatConfig(e)
            );
          } catch (s) {}
          for (
            var n =
                (i.toLowerCase().match(/^c/)
                  ? t.datepicker._getDate(e)
                  : null) || new Date(),
              o = n.getFullYear(),
              a = n.getMonth(),
              r = n.getDate(),
              l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              h = l.exec(i);
            h;

          ) {
            switch (h[2] || "d") {
              case "d":
              case "D":
                r += parseInt(h[1], 10);
                break;
              case "w":
              case "W":
                r += 7 * parseInt(h[1], 10);
                break;
              case "m":
              case "M":
                (a += parseInt(h[1], 10)),
                  (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
                break;
              case "y":
              case "Y":
                (o += parseInt(h[1], 10)),
                  (r = Math.min(r, t.datepicker._getDaysInMonth(o, a)));
            }
            h = l.exec(i);
          }
          return new Date(o, a, r);
        },
        a =
          null == i || "" === i
            ? s
            : "string" == typeof i
            ? o(i)
            : "number" == typeof i
            ? isNaN(i)
              ? s
              : n(i)
            : new Date(i.getTime());
      return (
        (a = a && "Invalid Date" == "" + a ? s : a),
        a &&
          (a.setHours(0),
          a.setMinutes(0),
          a.setSeconds(0),
          a.setMilliseconds(0)),
        this._daylightSavingAdjust(a)
      );
    },
    _daylightSavingAdjust: function (t) {
      return t
        ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
        : null;
    },
    _setDate: function (t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        o = t.selectedYear,
        a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
      (t.selectedDay = t.currentDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
        (n === t.selectedMonth && o === t.selectedYear) ||
          i ||
          this._notifyChange(t),
        this._adjustInstDate(t),
        t.input && t.input.val(s ? "" : this._formatDate(t));
    },
    _getDate: function (t) {
      var e =
        !t.currentYear || (t.input && "" === t.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
      return e;
    },
    _attachHandlers: function (e) {
      var i = this._get(e, "stepMonths"),
        s = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function () {
        var e = {
          prev: function () {
            t.datepicker._adjustDate(s, -i, "M");
          },
          next: function () {
            t.datepicker._adjustDate(s, +i, "M");
          },
          hide: function () {
            t.datepicker._hideDatepicker();
          },
          today: function () {
            t.datepicker._gotoToday(s);
          },
          selectDay: function () {
            return (
              t.datepicker._selectDay(
                s,
                +this.getAttribute("data-month"),
                +this.getAttribute("data-year"),
                this
              ),
              !1
            );
          },
          selectMonth: function () {
            return t.datepicker._selectMonthYear(s, this, "M"), !1;
          },
          selectYear: function () {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1;
          },
        };
        t(this).on(
          this.getAttribute("data-event"),
          e[this.getAttribute("data-handler")]
        );
      });
    },
    _generateHTML: function (t) {
      var e,
        i,
        s,
        n,
        o,
        a,
        r,
        l,
        h,
        c,
        u,
        d,
        p,
        f,
        g,
        m,
        _,
        v,
        b,
        y,
        w,
        k,
        x,
        C,
        D,
        T,
        I,
        M,
        P,
        S,
        N,
        H,
        A,
        z,
        O,
        E,
        W,
        F,
        L,
        R = new Date(),
        Y = this._daylightSavingAdjust(
          new Date(R.getFullYear(), R.getMonth(), R.getDate())
        ),
        B = this._get(t, "isRTL"),
        j = this._get(t, "showButtonPanel"),
        q = this._get(t, "hideIfNoPrevNext"),
        K = this._get(t, "navigationAsDateFormat"),
        U = this._getNumberOfMonths(t),
        V = this._get(t, "showCurrentAtPos"),
        X = this._get(t, "stepMonths"),
        $ = 1 !== U[0] || 1 !== U[1],
        G = this._daylightSavingAdjust(
          t.currentDay
            ? new Date(t.currentYear, t.currentMonth, t.currentDay)
            : new Date(9999, 9, 9)
        ),
        J = this._getMinMaxDate(t, "min"),
        Q = this._getMinMaxDate(t, "max"),
        Z = t.drawMonth - V,
        te = t.drawYear;
      if ((0 > Z && ((Z += 12), te--), Q))
        for (
          e = this._daylightSavingAdjust(
            new Date(
              Q.getFullYear(),
              Q.getMonth() - U[0] * U[1] + 1,
              Q.getDate()
            )
          ),
            e = J && J > e ? J : e;
          this._daylightSavingAdjust(new Date(te, Z, 1)) > e;

        )
          Z--, 0 > Z && ((Z = 11), te--);
      for (
        t.drawMonth = Z,
          t.drawYear = te,
          i = this._get(t, "prevText"),
          i = K
            ? this.formatDate(
                i,
                this._daylightSavingAdjust(new Date(te, Z - X, 1)),
                this._getFormatConfig(t)
              )
            : i,
          s = this._canAdjustMonth(t, -1, te, Z)
            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? "e" : "w") +
              "'>" +
              i +
              "</span></a>"
            : q
            ? ""
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? "e" : "w") +
              "'>" +
              i +
              "</span></a>",
          n = this._get(t, "nextText"),
          n = K
            ? this.formatDate(
                n,
                this._daylightSavingAdjust(new Date(te, Z + X, 1)),
                this._getFormatConfig(t)
              )
            : n,
          o = this._canAdjustMonth(t, 1, te, Z)
            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? "w" : "e") +
              "'>" +
              n +
              "</span></a>"
            : q
            ? ""
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (B ? "w" : "e") +
              "'>" +
              n +
              "</span></a>",
          a = this._get(t, "currentText"),
          r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y,
          a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
          l = t.inline
            ? ""
            : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
              this._get(t, "closeText") +
              "</button>",
          h = j
            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
              (B ? l : "") +
              (this._isInRange(t, r)
                ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                  a +
                  "</button>"
                : "") +
              (B ? "" : l) +
              "</div>"
            : "",
          c = parseInt(this._get(t, "firstDay"), 10),
          c = isNaN(c) ? 0 : c,
          u = this._get(t, "showWeek"),
          d = this._get(t, "dayNames"),
          p = this._get(t, "dayNamesMin"),
          f = this._get(t, "monthNames"),
          g = this._get(t, "monthNamesShort"),
          m = this._get(t, "beforeShowDay"),
          _ = this._get(t, "showOtherMonths"),
          v = this._get(t, "selectOtherMonths"),
          b = this._getDefaultDate(t),
          y = "",
          k = 0;
        U[0] > k;
        k++
      ) {
        for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (
            ((D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay))),
            (T = " ui-corner-all"),
            (I = ""),
            $)
          ) {
            if (((I += "<div class='ui-datepicker-group"), U[1] > 1))
              switch (C) {
                case 0:
                  (I += " ui-datepicker-group-first"),
                    (T = " ui-corner-" + (B ? "right" : "left"));
                  break;
                case U[1] - 1:
                  (I += " ui-datepicker-group-last"),
                    (T = " ui-corner-" + (B ? "left" : "right"));
                  break;
                default:
                  (I += " ui-datepicker-group-middle"), (T = "");
              }
            I += "'>";
          }
          for (
            I +=
              "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
              T +
              "'>" +
              (/all|left/.test(T) && 0 === k ? (B ? o : s) : "") +
              (/all|right/.test(T) && 0 === k ? (B ? s : o) : "") +
              this._generateMonthYearHeader(
                t,
                Z,
                te,
                J,
                Q,
                k > 0 || C > 0,
                f,
                g
              ) +
              "</div><table class='ui-datepicker-calendar'><thead>" +
              "<tr>",
              M = u
                ? "<th class='ui-datepicker-week-col'>" +
                  this._get(t, "weekHeader") +
                  "</th>"
                : "",
              w = 0;
            7 > w;
            w++
          )
            (P = (w + c) % 7),
              (M +=
                "<th scope='col'" +
                ((w + c + 6) % 7 >= 5
                  ? " class='ui-datepicker-week-end'"
                  : "") +
                ">" +
                "<span title='" +
                d[P] +
                "'>" +
                p[P] +
                "</span></th>");
          for (
            I += M + "</tr></thead><tbody>",
              S = this._getDaysInMonth(te, Z),
              te === t.selectedYear &&
                Z === t.selectedMonth &&
                (t.selectedDay = Math.min(t.selectedDay, S)),
              N = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7,
              H = Math.ceil((N + S) / 7),
              A = $ ? (this.maxRows > H ? this.maxRows : H) : H,
              this.maxRows = A,
              z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)),
              O = 0;
            A > O;
            O++
          ) {
            for (
              I += "<tr>",
                E = u
                  ? "<td class='ui-datepicker-week-col'>" +
                    this._get(t, "calculateWeek")(z) +
                    "</td>"
                  : "",
                w = 0;
              7 > w;
              w++
            )
              (W = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""]),
                (F = z.getMonth() !== Z),
                (L = (F && !v) || !W[0] || (J && J > z) || (Q && z > Q)),
                (E +=
                  "<td class='" +
                  ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (F ? " ui-datepicker-other-month" : "") +
                  ((z.getTime() === D.getTime() &&
                    Z === t.selectedMonth &&
                    t._keyEvent) ||
                  (b.getTime() === z.getTime() && b.getTime() === D.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (L
                    ? " " + this._unselectableClass + " ui-state-disabled"
                    : "") +
                  (F && !_
                    ? ""
                    : " " +
                      W[1] +
                      (z.getTime() === G.getTime()
                        ? " " + this._currentClass
                        : "") +
                      (z.getTime() === Y.getTime()
                        ? " ui-datepicker-today"
                        : "")) +
                  "'" +
                  ((F && !_) || !W[2]
                    ? ""
                    : " title='" + W[2].replace(/'/g, "&#39;") + "'") +
                  (L
                    ? ""
                    : " data-handler='selectDay' data-event='click' data-month='" +
                      z.getMonth() +
                      "' data-year='" +
                      z.getFullYear() +
                      "'") +
                  ">" +
                  (F && !_
                    ? "&#xa0;"
                    : L
                    ? "<span class='ui-state-default'>" +
                      z.getDate() +
                      "</span>"
                    : "<a class='ui-state-default" +
                      (z.getTime() === Y.getTime()
                        ? " ui-state-highlight"
                        : "") +
                      (z.getTime() === G.getTime() ? " ui-state-active" : "") +
                      (F ? " ui-priority-secondary" : "") +
                      "' href='#'>" +
                      z.getDate() +
                      "</a>") +
                  "</td>"),
                z.setDate(z.getDate() + 1),
                (z = this._daylightSavingAdjust(z));
            I += E + "</tr>";
          }
          Z++,
            Z > 11 && ((Z = 0), te++),
            (I +=
              "</tbody></table>" +
              ($
                ? "</div>" +
                  (U[0] > 0 && C === U[1] - 1
                    ? "<div class='ui-datepicker-row-break'></div>"
                    : "")
                : "")),
            (x += I);
        }
        y += x;
      }
      return (y += h), (t._keyEvent = !1), y;
    },
    _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
      var l,
        h,
        c,
        u,
        d,
        p,
        f,
        g,
        m = this._get(t, "changeMonth"),
        _ = this._get(t, "changeYear"),
        v = this._get(t, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        y = "";
      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
      else {
        for (
          l = s && s.getFullYear() === i,
            h = n && n.getFullYear() === i,
            y +=
              "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
            c = 0;
          12 > c;
          c++
        )
          (!l || c >= s.getMonth()) &&
            (!h || n.getMonth() >= c) &&
            (y +=
              "<option value='" +
              c +
              "'" +
              (c === e ? " selected='selected'" : "") +
              ">" +
              r[c] +
              "</option>");
        y += "</select>";
      }
      if ((v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml))
        if (((t.yearshtml = ""), o || !_))
          b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (
            u = this._get(t, "yearRange").split(":"),
              d = new Date().getFullYear(),
              p = function (t) {
                var e = t.match(/c[+\-].*/)
                  ? i + parseInt(t.substring(1), 10)
                  : t.match(/[+\-].*/)
                  ? d + parseInt(t, 10)
                  : parseInt(t, 10);
                return isNaN(e) ? d : e;
              },
              f = p(u[0]),
              g = Math.max(f, p(u[1] || "")),
              f = s ? Math.max(f, s.getFullYear()) : f,
              g = n ? Math.min(g, n.getFullYear()) : g,
              t.yearshtml +=
                "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
            g >= f;
            f++
          )
            t.yearshtml +=
              "<option value='" +
              f +
              "'" +
              (f === i ? " selected='selected'" : "") +
              ">" +
              f +
              "</option>";
          (t.yearshtml += "</select>"),
            (b += t.yearshtml),
            (t.yearshtml = null);
        }
      return (
        (b += this._get(t, "yearSuffix")),
        v && (b += (!o && m && _ ? "" : "&#xa0;") + y),
        (b += "</div>")
      );
    },
    _adjustInstDate: function (t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
        n = t.selectedMonth + ("M" === i ? e : 0),
        o =
          Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
          ("D" === i ? e : 0),
        a = this._restrictMinMax(
          t,
          this._daylightSavingAdjust(new Date(s, n, o))
        );
      (t.selectedDay = a.getDate()),
        (t.drawMonth = t.selectedMonth = a.getMonth()),
        (t.drawYear = t.selectedYear = a.getFullYear()),
        ("M" === i || "Y" === i) && this._notifyChange(t);
    },
    _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, "min"),
        s = this._getMinMaxDate(t, "max"),
        n = i && i > e ? i : e;
      return s && n > s ? s : n;
    },
    _notifyChange: function (t) {
      var e = this._get(t, "onChangeMonthYear");
      e &&
        e.apply(t.input ? t.input[0] : null, [
          t.selectedYear,
          t.selectedMonth + 1,
          t,
        ]);
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function (t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        o = this._daylightSavingAdjust(
          new Date(i, s + (0 > e ? e : n[0] * n[1]), 1)
        );
      return (
        0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
        this._isInRange(t, o)
      );
    },
    _isInRange: function (t, e) {
      var i,
        s,
        n = this._getMinMaxDate(t, "min"),
        o = this._getMinMaxDate(t, "max"),
        a = null,
        r = null,
        l = this._get(t, "yearRange");
      return (
        l &&
          ((i = l.split(":")),
          (s = new Date().getFullYear()),
          (a = parseInt(i[0], 10)),
          (r = parseInt(i[1], 10)),
          i[0].match(/[+\-].*/) && (a += s),
          i[1].match(/[+\-].*/) && (r += s)),
        (!n || e.getTime() >= n.getTime()) &&
          (!o || e.getTime() <= o.getTime()) &&
          (!a || e.getFullYear() >= a) &&
          (!r || r >= e.getFullYear())
      );
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, "shortYearCutoff");
      return (
        (e =
          "string" != typeof e
            ? e
            : (new Date().getFullYear() % 100) + parseInt(e, 10)),
        {
          shortYearCutoff: e,
          dayNamesShort: this._get(t, "dayNamesShort"),
          dayNames: this._get(t, "dayNames"),
          monthNamesShort: this._get(t, "monthNamesShort"),
          monthNames: this._get(t, "monthNames"),
        }
      );
    },
    _formatDate: function (t, e, i, s) {
      e ||
        ((t.currentDay = t.selectedDay),
        (t.currentMonth = t.selectedMonth),
        (t.currentYear = t.selectedYear));
      var n = e
        ? "object" == typeof e
          ? e
          : this._daylightSavingAdjust(new Date(s, i, e))
        : this._daylightSavingAdjust(
            new Date(t.currentYear, t.currentMonth, t.currentDay)
          );
      return this.formatDate(
        this._get(t, "dateFormat"),
        n,
        this._getFormatConfig(t)
      );
    },
  }),
    (t.fn.datepicker = function (e) {
      if (!this.length) return this;
      t.datepicker.initialized ||
        (t(document).on("mousedown", t.datepicker._checkExternalClick),
        (t.datepicker.initialized = !0)),
        0 === t("#" + t.datepicker._mainDivId).length &&
          t("body").append(t.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof e ||
        ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
        ? "option" === e &&
          2 === arguments.length &&
          "string" == typeof arguments[1]
          ? t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i)
            )
          : this.each(function () {
              "string" == typeof e
                ? t.datepicker["_" + e + "Datepicker"].apply(
                    t.datepicker,
                    [this].concat(i)
                  )
                : t.datepicker._attachDatepicker(this, e);
            })
        : t.datepicker["_" + e + "Datepicker"].apply(
            t.datepicker,
            [this[0]].concat(i)
          );
    }),
    (t.datepicker = new s()),
    (t.datepicker.initialized = !1),
    (t.datepicker.uuid = new Date().getTime()),
    (t.datepicker.version = "1.12.1"),
    t.datepicker,
    (t.ui.safeActiveElement = function (t) {
      var e;
      try {
        e = t.activeElement;
      } catch (i) {
        e = t.body;
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e;
    }),
    t.widget("ui.menu", {
      version: "1.12.1",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-caret-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass("ui-menu", "ui-widget ui-widget-content"),
          this._on({
            "mousedown .ui-menu-item": function (t) {
              t.preventDefault();
            },
            "click .ui-menu-item": function (e) {
              var i = t(e.target),
                s = t(t.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                i.not(".ui-state-disabled").length &&
                (this.select(e),
                e.isPropagationStopped() || (this.mouseHandled = !0),
                i.has(".ui-menu").length
                  ? this.expand(e)
                  : !this.element.is(":focus") &&
                    s.closest(".ui-menu").length &&
                    (this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": function (e) {
              if (!this.previousFilter) {
                var i = t(e.target).closest(".ui-menu-item"),
                  s = t(e.currentTarget);
                i[0] === s[0] &&
                  (this._removeClass(
                    s.siblings().children(".ui-state-active"),
                    null,
                    "ui-state-active"
                  ),
                  this.focus(e, s));
              }
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var i =
                this.active || this.element.find(this.options.items).eq(0);
              e || this.focus(t, i);
            },
            blur: function (e) {
              this._delay(function () {
                var i = !t.contains(
                  this.element[0],
                  t.ui.safeActiveElement(this.document[0])
                );
                i && this.collapseAll(e);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t),
                (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        var e = this.element
            .find(".ui-menu-item")
            .removeAttr("role aria-disabled"),
          i = e
            .children(".ui-menu-item-wrapper")
            .removeUniqueId()
            .removeAttr("tabIndex role aria-haspopup");
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeAttr(
            "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
          )
          .removeUniqueId()
          .show(),
          i.children().each(function () {
            var e = t(this);
            e.data("ui-menu-submenu-caret") && e.remove();
          });
      },
      _keydown: function (e) {
        var i,
          s,
          n,
          o,
          a = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
          case t.ui.keyCode.HOME:
            this._move("first", "first", e);
            break;
          case t.ui.keyCode.END:
            this._move("last", "last", e);
            break;
          case t.ui.keyCode.UP:
            this.previous(e);
            break;
          case t.ui.keyCode.DOWN:
            this.next(e);
            break;
          case t.ui.keyCode.LEFT:
            this.collapse(e);
            break;
          case t.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is(".ui-state-disabled") &&
              this.expand(e);
            break;
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e);
            break;
          case t.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
          default:
            (a = !1),
              (s = this.previousFilter || ""),
              (o = !1),
              (n =
                e.keyCode >= 96 && 105 >= e.keyCode
                  ? "" + (e.keyCode - 96)
                  : String.fromCharCode(e.keyCode)),
              clearTimeout(this.filterTimer),
              n === s ? (o = !0) : (n = s + n),
              (i = this._filterMenuItems(n)),
              (i =
                o && -1 !== i.index(this.active.next())
                  ? this.active.nextAll(".ui-menu-item")
                  : i),
              i.length ||
                ((n = String.fromCharCode(e.keyCode)),
                (i = this._filterMenuItems(n))),
              i.length
                ? (this.focus(e, i),
                  (this.previousFilter = n),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        a && e.preventDefault();
      },
      _activate: function (t) {
        this.active &&
          !this.active.is(".ui-state-disabled") &&
          (this.active.children("[aria-haspopup='true']").length
            ? this.expand(t)
            : this.select(t));
      },
      refresh: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this,
          r = this.options.icons.submenu,
          l = this.element.find(this.options.menus);
        this._toggleClass(
          "ui-menu-icons",
          null,
          !!this.element.find(".ui-icon").length
        ),
          (s = l
            .filter(":not(.ui-menu)")
            .hide()
            .attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false",
            })
            .each(function () {
              var e = t(this),
                i = e.prev(),
                s = t("<span>").data("ui-menu-submenu-caret", !0);
              a._addClass(s, "ui-menu-icon", "ui-icon " + r),
                i.attr("aria-haspopup", "true").prepend(s),
                e.attr("aria-labelledby", i.attr("id"));
            })),
          this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"),
          (e = l.add(this.element)),
          (i = e.find(this.options.items)),
          i.not(".ui-menu-item").each(function () {
            var e = t(this);
            a._isDivider(e) &&
              a._addClass(e, "ui-menu-divider", "ui-widget-content");
          }),
          (n = i.not(".ui-menu-item, .ui-menu-divider")),
          (o = n
            .children()
            .not(".ui-menu")
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(n, "ui-menu-item")._addClass(
            o,
            "ui-menu-item-wrapper"
          ),
          i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active &&
            !t.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        if ("icons" === t) {
          var i = this.element.find(".ui-menu-icon");
          this._removeClass(i, null, this.options.icons.submenu)._addClass(
            i,
            null,
            e.submenu
          );
        }
        this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", t + ""),
          this._toggleClass(null, "ui-state-disabled", !!t);
      },
      focus: function (t, e) {
        var i, s, n;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (s = this.active.children(".ui-menu-item-wrapper")),
          this._addClass(s, null, "ui-state-active"),
          this.options.role &&
            this.element.attr("aria-activedescendant", s.attr("id")),
          (n = this.active
            .parent()
            .closest(".ui-menu-item")
            .children(".ui-menu-item-wrapper")),
          this._addClass(n, null, "ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children(".ui-menu")),
          i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (e) {
        var i, s, n, o, a, r;
        this._hasScroll() &&
          ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
          (n = e.offset().top - this.activeMenu.offset().top - i - s),
          (o = this.activeMenu.scrollTop()),
          (a = this.activeMenu.height()),
          (r = e.outerHeight()),
          0 > n
            ? this.activeMenu.scrollTop(o + n)
            : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(
              this.active.children(".ui-menu-item-wrapper"),
              null,
              "ui-state-active"
            ),
            this._trigger("blur", t, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (e) {
        var i = t.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find(".ui-menu")
            .not(e.parents(".ui-menu"))
            .hide()
            .attr("aria-hidden", "true"),
          e
            .show()
            .removeAttr("aria-hidden")
            .attr("aria-expanded", "true")
            .position(i);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var s = i
              ? this.element
              : t(e && e.target).closest(this.element.find(".ui-menu"));
            s.length || (s = this.element),
              this._close(s),
              this.blur(e),
              this._removeClass(
                s.find(".ui-state-active"),
                null,
                "ui-state-active"
              ),
              (this.activeMenu = s);
          }, this.delay));
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t
            .find(".ui-menu")
            .hide()
            .attr("aria-hidden", "true")
            .attr("aria-expanded", "false");
      },
      _closeOnDocumentClick: function (e) {
        return !t(e.target).closest(".ui-menu").length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e =
          this.active &&
          this.active.children(".ui-menu ").find(this.options.items).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _move: function (t, e, i) {
        var s;
        this.active &&
          (s =
            "first" === t || "last" === t
              ? this.active["first" === t ? "prevAll" : "nextAll"](
                  ".ui-menu-item"
                ).eq(-1)
              : this.active[t + "All"](".ui-menu-item").eq(0)),
          (s && s.length && this.active) ||
            (s = this.activeMenu.find(this.options.items)[e]()),
          this.focus(i, s);
      },
      nextPage: function (e) {
        var i, s, n;
        return this.active
          ? (this.isLastItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.nextAll(".ui-menu-item").each(function () {
                    return (i = t(this)), 0 > i.offset().top - s - n;
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu
                      .find(this.options.items)
                      [this.active ? "last" : "first"]()
                  )),
            void 0)
          : (this.next(e), void 0);
      },
      previousPage: function (e) {
        var i, s, n;
        return this.active
          ? (this.isFirstItem() ||
              (this._hasScroll()
                ? ((s = this.active.offset().top),
                  (n = this.element.height()),
                  this.active.prevAll(".ui-menu-item").each(function () {
                    return (i = t(this)), i.offset().top - s + n > 0;
                  }),
                  this.focus(e, i))
                : this.focus(
                    e,
                    this.activeMenu.find(this.options.items).first()
                  )),
            void 0)
          : (this.next(e), void 0);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(e, !0),
          this._trigger("select", e, i);
      },
      _filterMenuItems: function (e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return s.test(
              t.trim(t(this).children(".ui-menu-item-wrapper").text())
            );
          });
      },
    }),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var d = !1;
  t(document).on("mouseup", function () {
    d = !1;
  }),
    t.widget("ui.mouse", {
      version: "1.12.1",
      options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .on("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on("click." + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
              ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!d) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e);
          var i = this,
            s = 1 === e.which,
            n =
              "string" == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
          return s && !n && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (d = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !e.button
          )
            return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .off("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (d = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    t.widget("ui.selectmenu", [
      t.ui.formResetMixin,
      {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
          appendTo: null,
          classes: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all",
          },
          disabled: null,
          icons: { button: "ui-icon-triangle-1-s" },
          position: { my: "left top", at: "left bottom", collision: "none" },
          width: !1,
          change: null,
          close: null,
          focus: null,
          open: null,
          select: null,
        },
        _create: function () {
          var e = this.element.uniqueId().attr("id");
          (this.ids = { element: e, button: e + "-button", menu: e + "-menu" }),
            this._drawButton(),
            this._drawMenu(),
            this._bindFormResetHandler(),
            (this._rendered = !1),
            (this.menuItems = t());
        },
        _drawButton: function () {
          var e,
            i = this,
            s = this._parseOption(
              this.element.find("option:selected"),
              this.element[0].selectedIndex
            );
          (this.labels = this.element.labels().attr("for", this.ids.button)),
            this._on(this.labels, {
              click: function (t) {
                this.button.focus(), t.preventDefault();
              },
            }),
            this.element.hide(),
            (this.button = t("<span>", {
              tabindex: this.options.disabled ? -1 : 0,
              id: this.ids.button,
              role: "combobox",
              "aria-expanded": "false",
              "aria-autocomplete": "list",
              "aria-owns": this.ids.menu,
              "aria-haspopup": "true",
              title: this.element.attr("title"),
            }).insertAfter(this.element)),
            this._addClass(
              this.button,
              "ui-selectmenu-button ui-selectmenu-button-closed",
              "ui-button ui-widget"
            ),
            (e = t("<span>").appendTo(this.button)),
            this._addClass(
              e,
              "ui-selectmenu-icon",
              "ui-icon " + this.options.icons.button
            ),
            (this.buttonItem = this._renderButtonItem(s).appendTo(this.button)),
            this.options.width !== !1 && this._resizeButton(),
            this._on(this.button, this._buttonEvents),
            this.button.one("focusin", function () {
              i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function () {
          var e = this;
          (this.menu = t("<ul>", {
            "aria-hidden": "true",
            "aria-labelledby": this.ids.button,
            id: this.ids.menu,
          })),
            (this.menuWrap = t("<div>").append(this.menu)),
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
            this.menuWrap.appendTo(this._appendTo()),
            (this.menuInstance = this.menu
              .menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function (t, i) {
                  t.preventDefault(),
                    e._setSelection(),
                    e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function (t, i) {
                  var s = i.item.data("ui-selectmenu-item");
                  null != e.focusIndex &&
                    s.index !== e.focusIndex &&
                    (e._trigger("focus", t, { item: s }),
                    e.isOpen || e._select(s, t)),
                    (e.focusIndex = s.index),
                    e.button.attr(
                      "aria-activedescendant",
                      e.menuItems.eq(s.index).attr("id")
                    );
                },
              })
              .menu("instance")),
            this.menuInstance._off(this.menu, "mouseleave"),
            (this.menuInstance._closeOnDocumentClick = function () {
              return !1;
            }),
            (this.menuInstance._isDivider = function () {
              return !1;
            });
        },
        refresh: function () {
          this._refreshMenu(),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(
                this._getSelectedItem().data("ui-selectmenu-item") || {}
              ))
            ),
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function () {
          var t,
            e = this.element.find("option");
          this.menu.empty(),
            this._parseOptions(e),
            this._renderMenu(this.menu, this.items),
            this.menuInstance.refresh(),
            (this.menuItems = this.menu
              .find("li")
              .not(".ui-selectmenu-optgroup")
              .find(".ui-menu-item-wrapper")),
            (this._rendered = !0),
            e.length &&
              ((t = this._getSelectedItem()),
              this.menuInstance.focus(null, t),
              this._setAria(t.data("ui-selectmenu-item")),
              this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function (t) {
          this.options.disabled ||
            (this._rendered
              ? (this._removeClass(
                  this.menu.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                this.menuInstance.focus(null, this._getSelectedItem()))
              : this._refreshMenu(),
            this.menuItems.length &&
              ((this.isOpen = !0),
              this._toggleAttr(),
              this._resizeMenu(),
              this._position(),
              this._on(this.document, this._documentClick),
              this._trigger("open", t)));
        },
        _position: function () {
          this.menuWrap.position(
            t.extend({ of: this.button }, this.options.position)
          );
        },
        close: function (t) {
          this.isOpen &&
            ((this.isOpen = !1),
            this._toggleAttr(),
            (this.range = null),
            this._off(this.document),
            this._trigger("close", t));
        },
        widget: function () {
          return this.button;
        },
        menuWidget: function () {
          return this.menu;
        },
        _renderButtonItem: function (e) {
          var i = t("<span>");
          return (
            this._setText(i, e.label),
            this._addClass(i, "ui-selectmenu-text"),
            i
          );
        },
        _renderMenu: function (e, i) {
          var s = this,
            n = "";
          t.each(i, function (i, o) {
            var a;
            o.optgroup !== n &&
              ((a = t("<li>", { text: o.optgroup })),
              s._addClass(
                a,
                "ui-selectmenu-optgroup",
                "ui-menu-divider" +
                  (o.element.parent("optgroup").prop("disabled")
                    ? " ui-state-disabled"
                    : "")
              ),
              a.appendTo(e),
              (n = o.optgroup)),
              s._renderItemData(e, o);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function (e, i) {
          var s = t("<li>"),
            n = t("<div>", { title: i.element.attr("title") });
          return (
            i.disabled && this._addClass(s, null, "ui-state-disabled"),
            this._setText(n, i.label),
            s.append(n).appendTo(e)
          );
        },
        _setText: function (t, e) {
          e ? t.text(e) : t.html("&#160;");
        },
        _move: function (t, e) {
          var i,
            s,
            n = ".ui-menu-item";
          this.isOpen
            ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
            : ((i = this.menuItems
                .eq(this.element[0].selectedIndex)
                .parent("li")),
              (n += ":not(.ui-state-disabled)")),
            (s =
              "first" === t || "last" === t
                ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1)
                : i[t + "All"](n).eq(0)),
            s.length && this.menuInstance.focus(e, s);
        },
        _getSelectedItem: function () {
          return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function (t) {
          this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function () {
          var t;
          this.range &&
            (window.getSelection
              ? ((t = window.getSelection()),
                t.removeAllRanges(),
                t.addRange(this.range))
              : this.range.select(),
            this.button.focus());
        },
        _documentClick: {
          mousedown: function (e) {
            this.isOpen &&
              (t(e.target).closest(
                ".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)
              ).length ||
                this.close(e));
          },
        },
        _buttonEvents: {
          mousedown: function () {
            var t;
            window.getSelection
              ? ((t = window.getSelection()),
                t.rangeCount && (this.range = t.getRangeAt(0)))
              : (this.range = document.selection.createRange());
          },
          click: function (t) {
            this._setSelection(), this._toggle(t);
          },
          keydown: function (e) {
            var i = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.TAB:
              case t.ui.keyCode.ESCAPE:
                this.close(e), (i = !1);
                break;
              case t.ui.keyCode.ENTER:
                this.isOpen && this._selectFocusedItem(e);
                break;
              case t.ui.keyCode.UP:
                e.altKey ? this._toggle(e) : this._move("prev", e);
                break;
              case t.ui.keyCode.DOWN:
                e.altKey ? this._toggle(e) : this._move("next", e);
                break;
              case t.ui.keyCode.SPACE:
                this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                break;
              case t.ui.keyCode.LEFT:
                this._move("prev", e);
                break;
              case t.ui.keyCode.RIGHT:
                this._move("next", e);
                break;
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.PAGE_UP:
                this._move("first", e);
                break;
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_DOWN:
                this._move("last", e);
                break;
              default:
                this.menu.trigger(e), (i = !1);
            }
            i && e.preventDefault();
          },
        },
        _selectFocusedItem: function (t) {
          var e = this.menuItems.eq(this.focusIndex).parent("li");
          e.hasClass("ui-state-disabled") ||
            this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function (t, e) {
          var i = this.element[0].selectedIndex;
          (this.element[0].selectedIndex = t.index),
            this.buttonItem.replaceWith(
              (this.buttonItem = this._renderButtonItem(t))
            ),
            this._setAria(t),
            this._trigger("select", e, { item: t }),
            t.index !== i && this._trigger("change", e, { item: t }),
            this.close(e);
        },
        _setAria: function (t) {
          var e = this.menuItems.eq(t.index).attr("id");
          this.button.attr({
            "aria-labelledby": e,
            "aria-activedescendant": e,
          }),
            this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function (t, e) {
          if ("icons" === t) {
            var i = this.button.find("span.ui-icon");
            this._removeClass(i, null, this.options.icons.button)._addClass(
              i,
              null,
              e.button
            );
          }
          this._super(t, e),
            "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.menuInstance.option("disabled", t),
            this.button.attr("aria-disabled", t),
            this._toggleClass(this.button, null, "ui-state-disabled", t),
            this.element.prop("disabled", t),
            t
              ? (this.button.attr("tabindex", -1), this.close())
              : this.button.attr("tabindex", 0);
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _toggleAttr: function () {
          this.button.attr("aria-expanded", this.isOpen),
            this._removeClass(
              this.button,
              "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
            )
              ._addClass(
                this.button,
                "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
              )
              ._toggleClass(
                this.menuWrap,
                "ui-selectmenu-open",
                null,
                this.isOpen
              ),
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function () {
          var t = this.options.width;
          return t === !1
            ? (this.button.css("width", ""), void 0)
            : (null === t &&
                ((t = this.element.show().outerWidth()), this.element.hide()),
              this.button.outerWidth(t),
              void 0);
        },
        _resizeMenu: function () {
          this.menu.outerWidth(
            Math.max(
              this.button.outerWidth(),
              this.menu.width("").outerWidth() + 1
            )
          );
        },
        _getCreateOptions: function () {
          var t = this._super();
          return (t.disabled = this.element.prop("disabled")), t;
        },
        _parseOptions: function (e) {
          var i = this,
            s = [];
          e.each(function (e, n) {
            s.push(i._parseOption(t(n), e));
          }),
            (this.items = s);
        },
        _parseOption: function (t, e) {
          var i = t.parent("optgroup");
          return {
            element: t,
            index: e,
            value: t.val(),
            label: t.text(),
            optgroup: i.attr("label") || "",
            disabled: i.prop("disabled") || t.prop("disabled"),
          };
        },
        _destroy: function () {
          this._unbindFormResetHandler(),
            this.menuWrap.remove(),
            this.button.remove(),
            this.element.show(),
            this.element.removeUniqueId(),
            this.labels.attr("for", this.ids.element);
        },
      },
    ]),
    t.widget("ui.slider", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header",
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass(
            "ui-slider ui-slider-" + this.orientation,
            "ui-widget ui-widget-content"
          ),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = "<span tabindex='0'></span>",
          a = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          i > e;
          e++
        )
          a.push(o);
        (this.handles = n.add(t(a.join("")).appendTo(this.element))),
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
          });
      },
      _createRange: function () {
        var e = this.options;
        e.range
          ? (e.range === !0 &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(
                  this.range,
                  "ui-slider-range-min ui-slider-range-max"
                ),
                this.range.css({ left: "", bottom: "" }))
              : ((this.range = t("<div>").appendTo(this.element)),
                this._addClass(this.range, "ui-slider-range")),
            ("min" === e.range || "max" === e.range) &&
              this._addClass(this.range, "ui-slider-range-" + e.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c = this,
          u = this.options;
        return u.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(s - c.values(e));
              (n > i ||
                (n === i &&
                  (e === c._lastChangedValue || c.values(e) === u.min))) &&
                ((n = i), (o = t(this)), (a = e));
            }),
            (r = this._start(e, a)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = a),
                this._addClass(o, null, "ui-state-active"),
                o.trigger("focus"),
                (l = o.offset()),
                (h = !t(e.target).parents().addBack().is(".ui-slider-handle")),
                (this._clickOffset = h
                  ? { left: 0, top: 0 }
                  : {
                      left: e.pageX - l.left - o.width() / 2,
                      top:
                        e.pageY -
                        l.top -
                        o.height() / 2 -
                        (parseInt(o.css("borderTopWidth"), 10) || 0) -
                        (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(o.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, "ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return (
          "horizontal" === this.orientation
            ? ((e = this.elementSize.width),
              (i =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        );
      },
      _uiHash: function (t, e, i) {
        var s = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value(),
        };
        return (
          this._hasMultipleValues() &&
            ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n,
          o = this.value(),
          a = this.values();
        this._hasMultipleValues() &&
          ((n = this.values(e ? 0 : 1)),
          (o = this.values(e)),
          2 === this.options.values.length &&
            this.options.range === !0 &&
            (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
          (a[e] = i)),
          i !== o &&
            ((s = this._trigger("slide", t, this._uiHash(e, i, a))),
            s !== !1 &&
              (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e),
          this._trigger("change", t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value();
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, e),
            void 0
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0]))
          return this._hasMultipleValues() ? this._values(e) : this.value();
        for (
          s = this.options.values, n = arguments[0], o = 0;
          s.length > o;
          o += 1
        )
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var s,
          n = 0;
        switch (
          ("range" === e &&
            this.options.range === !0 &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          this._super(e, i),
          e)
        ) {
          case "orientation":
            this._detectOrientation(),
              this._removeClass(
                "ui-slider-horizontal ui-slider-vertical"
              )._addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(i),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = n - 1;
              s >= 0;
              s--
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return (
          2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
          parseFloat(s.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;
        (t = s + e),
          t > this.options.max && (t -= i),
          (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = "" + t,
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({ width: "", left: "" }),
          "horizontal" === t && this.range.css({ height: "", bottom: "" });
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          l = this,
          h = this._animateOff ? !1 : r.animate,
          c = {};
        this._hasMultipleValues()
          ? this.handles.each(function (s) {
              (i =
                100 *
                ((l.values(s) - l._valueMin()) /
                  (l._valueMax() - l._valueMin()))),
                (c["horizontal" === l.orientation ? "left" : "bottom"] =
                  i + "%"),
                t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate),
                l.options.range === !0 &&
                  ("horizontal" === l.orientation
                    ? (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"]({ left: i + "%" }, r.animate),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { width: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"](
                            { bottom: i + "%" },
                            r.animate
                          ),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { height: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))),
                (e = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
            (c["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate),
            "min" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
            "min" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o,
            a = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(t(e.target), null, "ui-state-active"),
                  (i = this._start(e, a)),
                  i === !1))
              )
                return;
          }
          switch (
            ((o = this.options.step),
            (s = n = this._hasMultipleValues() ? this.values(a) : this.value()),
            e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case t.ui.keyCode.END:
              n = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - o);
          }
          this._slide(e, a, n);
        },
        keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, "ui-state-active"));
        },
      },
    }),
    t.widget("ui.spinner", {
      version: "1.12.1",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
        classes: {
          "ui-spinner": "ui-corner-all",
          "ui-spinner-down": "ui-corner-br",
          "ui-spinner-up": "ui-corner-tr",
        },
        culture: null,
        icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption("max", this.options.max),
          this._setOption("min", this.options.min),
          this._setOption("step", this.options.step),
          "" !== this.value() && this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _getCreateOptions: function () {
        var e = this._super(),
          i = this.element;
        return (
          t.each(["min", "max", "step"], function (t, s) {
            var n = i.attr(s);
            null != n && n.length && (e[s] = n);
          }),
          e
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: "_stop",
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          return this.cancelBlur
            ? (delete this.cancelBlur, void 0)
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger("change", t),
              void 0);
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        "mousedown .ui-spinner-button": function (e) {
          function i() {
            var e =
              this.element[0] === t.ui.safeActiveElement(this.document[0]);
            e ||
              (this.element.trigger("focus"),
              (this.previous = s),
              this._delay(function () {
                this.previous = s;
              }));
          }
          var s;
          (s =
            this.element[0] === t.ui.safeActiveElement(this.document[0])
              ? this.previous
              : this.element.val()),
            e.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this);
            }),
            this._start(e) !== !1 &&
              this._repeat(
                null,
                t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                e
              );
        },
        "mouseup .ui-spinner-button": "_stop",
        "mouseenter .ui-spinner-button": function (e) {
          return t(e.currentTarget).hasClass("ui-state-active")
            ? this._start(e) === !1
              ? !1
              : (this._repeat(
                  null,
                  t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                  e
                ),
                void 0)
            : void 0;
        },
        "mouseleave .ui-spinner-button": "_stop",
      },
      _enhance: function () {
        this.uiSpinner = this.element
          .attr("autocomplete", "off")
          .wrap("<span>")
          .parent()
          .append("<a></a><a></a>");
      },
      _draw: function () {
        this._enhance(),
          this._addClass(
            this.uiSpinner,
            "ui-spinner",
            "ui-widget ui-widget-content"
          ),
          this._addClass("ui-spinner-input"),
          this.element.attr("role", "spinbutton"),
          (this.buttons = this.uiSpinner
            .children("a")
            .attr("tabIndex", -1)
            .attr("aria-hidden", !0)
            .button({ classes: { "ui-button": "" } })),
          this._removeClass(this.buttons, "ui-corner-all"),
          this._addClass(
            this.buttons.first(),
            "ui-spinner-button ui-spinner-up"
          ),
          this._addClass(
            this.buttons.last(),
            "ui-spinner-button ui-spinner-down"
          ),
          this.buttons
            .first()
            .button({ icon: this.options.icons.up, showLabel: !1 }),
          this.buttons
            .last()
            .button({ icon: this.options.icons.down, showLabel: !1 }),
          this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
            this.uiSpinner.height() > 0 &&
            this.uiSpinner.height(this.uiSpinner.height());
      },
      _keydown: function (e) {
        var i = this.options,
          s = t.ui.keyCode;
        switch (e.keyCode) {
          case s.UP:
            return this._repeat(null, 1, e), !0;
          case s.DOWN:
            return this._repeat(null, -1, e), !0;
          case s.PAGE_UP:
            return this._repeat(null, i.page, e), !0;
          case s.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0;
        }
        return !1;
      },
      _start: function (t) {
        return this.spinning || this._trigger("start", t) !== !1
          ? (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          : !1;
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && this._trigger("spin", e, { value: i }) === !1) ||
            (this._value(i), this.counter++);
      },
      _increment: function (e) {
        var i = this.options.incremental;
        return i
          ? t.isFunction(i)
            ? i(e)
            : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)
          : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = "" + t,
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _adjustValue: function (t) {
        var e,
          i,
          s = this.options;
        return (
          (e = null !== s.min ? s.min : 0),
          (i = t - e),
          (i = Math.round(i / s.step) * s.step),
          (t = e + i),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== s.max && t > s.max
            ? s.max
            : null !== s.min && s.min > t
            ? s.min
            : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger("stop", t));
      },
      _setOption: function (t, e) {
        var i, s, n;
        return "culture" === t || "numberFormat" === t
          ? ((i = this._parse(this.element.val())),
            (this.options[t] = e),
            this.element.val(this._format(i)),
            void 0)
          : (("max" === t || "min" === t || "step" === t) &&
              "string" == typeof e &&
              (e = this._parse(e)),
            "icons" === t &&
              ((s = this.buttons.first().find(".ui-icon")),
              this._removeClass(s, null, this.options.icons.up),
              this._addClass(s, null, e.up),
              (n = this.buttons.last().find(".ui-icon")),
              this._removeClass(n, null, this.options.icons.down),
              this._addClass(n, null, e.down)),
            this._super(t, e),
            void 0);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
          this.element.prop("disabled", !!t),
          this.buttons.button(t ? "disable" : "enable");
      },
      _setOptions: r(function (t) {
        this._super(t);
      }),
      _parse: function (t) {
        return (
          "string" == typeof t &&
            "" !== t &&
            (t =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(t, 10, this.options.culture)
                : +t),
          "" === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return "" === t
          ? ""
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val()),
        });
      },
      isValid: function () {
        var t = this.value();
        return null === t ? !1 : t === this._adjustValue(t);
      },
      _value: function (t, e) {
        var i;
        "" !== t &&
          ((i = this._parse(t)),
          null !== i &&
            (e || (i = this._adjustValue(i)), (t = this._format(i)))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element
          .prop("disabled", !1)
          .removeAttr(
            "autocomplete role aria-valuemin aria-valuemax aria-valuenow"
          ),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: r(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() &&
          (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: r(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() &&
          (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: r(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: r(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        return arguments.length
          ? (r(this._value).call(this, t), void 0)
          : this._parse(this.element.val());
      },
      widget: function () {
        return this.uiSpinner;
      },
    }),
    t.uiBackCompat !== !1 &&
      t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function () {
          this.uiSpinner = this.element
            .attr("autocomplete", "off")
            .wrap(this._uiSpinnerHtml())
            .parent()
            .append(this._buttonHtml());
        },
        _uiSpinnerHtml: function () {
          return "<span>";
        },
        _buttonHtml: function () {
          return "<a></a><a></a>";
        },
      }),
    t.ui.spinner;
});

/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (n.anime = e());
})(this, function () {
  "use strict";
  var n = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0,
    },
    e = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0,
    },
    r = [
      "translateX",
      "translateY",
      "translateZ",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
      "skew",
      "skewX",
      "skewY",
      "perspective",
    ],
    t = { CSS: {}, springs: {} };
  function a(n, e, r) {
    return Math.min(Math.max(n, e), r);
  }
  function o(n, e) {
    return n.indexOf(e) > -1;
  }
  function u(n, e) {
    return n.apply(null, e);
  }
  var i = {
    arr: function (n) {
      return Array.isArray(n);
    },
    obj: function (n) {
      return o(Object.prototype.toString.call(n), "Object");
    },
    pth: function (n) {
      return i.obj(n) && n.hasOwnProperty("totalLength");
    },
    svg: function (n) {
      return n instanceof SVGElement;
    },
    inp: function (n) {
      return n instanceof HTMLInputElement;
    },
    dom: function (n) {
      return n.nodeType || i.svg(n);
    },
    str: function (n) {
      return "string" == typeof n;
    },
    fnc: function (n) {
      return "function" == typeof n;
    },
    und: function (n) {
      return void 0 === n;
    },
    hex: function (n) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
    },
    rgb: function (n) {
      return /^rgb/.test(n);
    },
    hsl: function (n) {
      return /^hsl/.test(n);
    },
    col: function (n) {
      return i.hex(n) || i.rgb(n) || i.hsl(n);
    },
    key: function (r) {
      return (
        !n.hasOwnProperty(r) &&
        !e.hasOwnProperty(r) &&
        "targets" !== r &&
        "keyframes" !== r
      );
    },
  };
  function c(n) {
    var e = /\(([^)]+)\)/.exec(n);
    return e
      ? e[1].split(",").map(function (n) {
          return parseFloat(n);
        })
      : [];
  }
  function s(n, e) {
    var r = c(n),
      o = a(i.und(r[0]) ? 1 : r[0], 0.1, 100),
      u = a(i.und(r[1]) ? 100 : r[1], 0.1, 100),
      s = a(i.und(r[2]) ? 10 : r[2], 0.1, 100),
      f = a(i.und(r[3]) ? 0 : r[3], 0.1, 100),
      l = Math.sqrt(u / o),
      d = s / (2 * Math.sqrt(u * o)),
      p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
      h = 1,
      v = d < 1 ? (d * l - f) / p : -f + l;
    function g(n) {
      var r = e ? (e * n) / 1e3 : n;
      return (
        (r =
          d < 1
            ? Math.exp(-r * d * l) * (h * Math.cos(p * r) + v * Math.sin(p * r))
            : (h + v * r) * Math.exp(-r * l)),
        0 === n || 1 === n ? n : 1 - r
      );
    }
    return e
      ? g
      : function () {
          var e = t.springs[n];
          if (e) return e;
          for (var r = 0, a = 0; ; )
            if (1 === g((r += 1 / 6))) {
              if (++a >= 16) break;
            } else a = 0;
          var o = r * (1 / 6) * 1e3;
          return (t.springs[n] = o), o;
        };
  }
  function f(n) {
    return (
      void 0 === n && (n = 10),
      function (e) {
        return Math.round(e * n) * (1 / n);
      }
    );
  }
  var l,
    d,
    p = (function () {
      var n = 11,
        e = 1 / (n - 1);
      function r(n, e) {
        return 1 - 3 * e + 3 * n;
      }
      function t(n, e) {
        return 3 * e - 6 * n;
      }
      function a(n) {
        return 3 * n;
      }
      function o(n, e, o) {
        return ((r(e, o) * n + t(e, o)) * n + a(e)) * n;
      }
      function u(n, e, o) {
        return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e);
      }
      return function (r, t, a, i) {
        if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
          var c = new Float32Array(n);
          if (r !== t || a !== i)
            for (var s = 0; s < n; ++s) c[s] = o(s * e, r, a);
          return function (n) {
            return r === t && a === i
              ? n
              : 0 === n || 1 === n
              ? n
              : o(f(n), t, i);
          };
        }
        function f(t) {
          for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= t; ++s) i += e;
          var l = i + ((t - c[--s]) / (c[s + 1] - c[s])) * e,
            d = u(l, r, a);
          return d >= 0.001
            ? (function (n, e, r, t) {
                for (var a = 0; a < 4; ++a) {
                  var i = u(e, r, t);
                  if (0 === i) return e;
                  e -= (o(e, r, t) - n) / i;
                }
                return e;
              })(t, l, r, a)
            : 0 === d
            ? l
            : (function (n, e, r, t, a) {
                for (
                  var u, i, c = 0;
                  (u = o((i = e + (r - e) / 2), t, a) - n) > 0
                    ? (r = i)
                    : (e = i),
                    Math.abs(u) > 1e-7 && ++c < 10;

                );
                return i;
              })(t, i, i + e, r, a);
        }
      };
    })(),
    h =
      ((l = {
        linear: function () {
          return function (n) {
            return n;
          };
        },
      }),
      (d = {
        Sine: function () {
          return function (n) {
            return 1 - Math.cos((n * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n);
          };
        },
        Back: function () {
          return function (n) {
            return n * n * (3 * n - 2);
          };
        },
        Bounce: function () {
          return function (n) {
            for (var e, r = 4; n < ((e = Math.pow(2, --r)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - r) -
              7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
            );
          };
        },
        Elastic: function (n, e) {
          void 0 === n && (n = 1), void 0 === e && (e = 0.5);
          var r = a(n, 1, 10),
            t = a(e, 0.1, 2);
          return function (n) {
            return 0 === n || 1 === n
              ? n
              : -r *
                  Math.pow(2, 10 * (n - 1)) *
                  Math.sin(
                    ((n - 1 - (t / (2 * Math.PI)) * Math.asin(1 / r)) *
                      (2 * Math.PI)) /
                      t
                  );
          };
        },
      }),
      ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (n, e) {
        d[n] = function () {
          return function (n) {
            return Math.pow(n, e + 2);
          };
        };
      }),
      Object.keys(d).forEach(function (n) {
        var e = d[n];
        (l["easeIn" + n] = e),
          (l["easeOut" + n] = function (n, r) {
            return function (t) {
              return 1 - e(n, r)(1 - t);
            };
          }),
          (l["easeInOut" + n] = function (n, r) {
            return function (t) {
              return t < 0.5 ? e(n, r)(2 * t) / 2 : 1 - e(n, r)(-2 * t + 2) / 2;
            };
          });
      }),
      l);
  function v(n, e) {
    if (i.fnc(n)) return n;
    var r = n.split("(")[0],
      t = h[r],
      a = c(n);
    switch (r) {
      case "spring":
        return s(n, e);
      case "cubicBezier":
        return u(p, a);
      case "steps":
        return u(f, a);
      default:
        return u(t, a);
    }
  }
  function g(n) {
    try {
      return document.querySelectorAll(n);
    } catch (n) {
      return;
    }
  }
  function m(n, e) {
    for (
      var r = n.length,
        t = arguments.length >= 2 ? arguments[1] : void 0,
        a = [],
        o = 0;
      o < r;
      o++
    )
      if (o in n) {
        var u = n[o];
        e.call(t, u, o, n) && a.push(u);
      }
    return a;
  }
  function y(n) {
    return n.reduce(function (n, e) {
      return n.concat(i.arr(e) ? y(e) : e);
    }, []);
  }
  function b(n) {
    return i.arr(n)
      ? n
      : (i.str(n) && (n = g(n) || n),
        n instanceof NodeList || n instanceof HTMLCollection
          ? [].slice.call(n)
          : [n]);
  }
  function M(n, e) {
    return n.some(function (n) {
      return n === e;
    });
  }
  function x(n) {
    var e = {};
    for (var r in n) e[r] = n[r];
    return e;
  }
  function w(n, e) {
    var r = x(n);
    for (var t in n) r[t] = e.hasOwnProperty(t) ? e[t] : n[t];
    return r;
  }
  function k(n, e) {
    var r = x(n);
    for (var t in e) r[t] = i.und(n[t]) ? e[t] : n[t];
    return r;
  }
  function O(n) {
    return i.rgb(n)
      ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = n)))
        ? "rgba(" + r[1] + ",1)"
        : e
      : i.hex(n)
      ? ((t = n.replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          function (n, e, r, t) {
            return e + e + r + r + t + t;
          }
        )),
        (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)),
        "rgba(" +
          parseInt(a[1], 16) +
          "," +
          parseInt(a[2], 16) +
          "," +
          parseInt(a[3], 16) +
          ",1)")
      : i.hsl(n)
      ? (function (n) {
          var e,
            r,
            t,
            a =
              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
            o = parseInt(a[1], 10) / 360,
            u = parseInt(a[2], 10) / 100,
            i = parseInt(a[3], 10) / 100,
            c = a[4] || 1;
          function s(n, e, r) {
            return (
              r < 0 && (r += 1),
              r > 1 && (r -= 1),
              r < 1 / 6
                ? n + 6 * (e - n) * r
                : r < 0.5
                ? e
                : r < 2 / 3
                ? n + (e - n) * (2 / 3 - r) * 6
                : n
            );
          }
          if (0 == u) e = r = t = i;
          else {
            var f = i < 0.5 ? i * (1 + u) : i + u - i * u,
              l = 2 * i - f;
            (e = s(l, f, o + 1 / 3)),
              (r = s(l, f, o)),
              (t = s(l, f, o - 1 / 3));
          }
          return (
            "rgba(" + 255 * e + "," + 255 * r + "," + 255 * t + "," + c + ")"
          );
        })(n)
      : void 0;
    var e, r, t, a;
  }
  function C(n) {
    var e =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        n
      );
    if (e) return e[1];
  }
  function B(n, e) {
    return i.fnc(n) ? n(e.target, e.id, e.total) : n;
  }
  function P(n, e) {
    return n.getAttribute(e);
  }
  function I(n, e, r) {
    if (M([r, "deg", "rad", "turn"], C(e))) return e;
    var a = t.CSS[e + r];
    if (!i.und(a)) return a;
    var o = document.createElement(n.tagName),
      u =
        n.parentNode && n.parentNode !== document
          ? n.parentNode
          : document.body;
    u.appendChild(o),
      (o.style.position = "absolute"),
      (o.style.width = 100 + r);
    var c = 100 / o.offsetWidth;
    u.removeChild(o);
    var s = c * parseFloat(e);
    return (t.CSS[e + r] = s), s;
  }
  function T(n, e, r) {
    if (e in n.style) {
      var t = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || "0";
      return r ? I(n, a, r) : a;
    }
  }
  function D(n, e) {
    return i.dom(n) && !i.inp(n) && (P(n, e) || (i.svg(n) && n[e]))
      ? "attribute"
      : i.dom(n) && M(r, e)
      ? "transform"
      : i.dom(n) && "transform" !== e && T(n, e)
      ? "css"
      : null != n[e]
      ? "object"
      : void 0;
  }
  function E(n) {
    if (i.dom(n)) {
      for (
        var e,
          r = n.style.transform || "",
          t = /(\w+)\(([^)]*)\)/g,
          a = new Map();
        (e = t.exec(r));

      )
        a.set(e[1], e[2]);
      return a;
    }
  }
  function F(n, e, r, t) {
    var a,
      u = o(e, "scale")
        ? 1
        : 0 +
          (o((a = e), "translate") || "perspective" === a
            ? "px"
            : o(a, "rotate") || o(a, "skew")
            ? "deg"
            : void 0),
      i = E(n).get(e) || u;
    return (
      r && (r.transforms.list.set(e, i), (r.transforms.last = e)),
      t ? I(n, i, t) : i
    );
  }
  function N(n, e, r, t) {
    switch (D(n, e)) {
      case "transform":
        return F(n, e, t, r);
      case "css":
        return T(n, e, r);
      case "attribute":
        return P(n, e);
      default:
        return n[e] || 0;
    }
  }
  function A(n, e) {
    var r = /^(\*=|\+=|-=)/.exec(n);
    if (!r) return n;
    var t = C(n) || 0,
      a = parseFloat(e),
      o = parseFloat(n.replace(r[0], ""));
    switch (r[0][0]) {
      case "+":
        return a + o + t;
      case "-":
        return a - o + t;
      case "*":
        return a * o + t;
    }
  }
  function L(n, e) {
    if (i.col(n)) return O(n);
    if (/\s/g.test(n)) return n;
    var r = C(n),
      t = r ? n.substr(0, n.length - r.length) : n;
    return e ? t + e : t;
  }
  function j(n, e) {
    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
  }
  function S(n) {
    for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
      var o = r.getItem(a);
      a > 0 && (t += j(e, o)), (e = o);
    }
    return t;
  }
  function q(n) {
    if (n.getTotalLength) return n.getTotalLength();
    switch (n.tagName.toLowerCase()) {
      case "circle":
        return (o = n), 2 * Math.PI * P(o, "r");
      case "rect":
        return 2 * P((a = n), "width") + 2 * P(a, "height");
      case "line":
        return j(
          { x: P((t = n), "x1"), y: P(t, "y1") },
          { x: P(t, "x2"), y: P(t, "y2") }
        );
      case "polyline":
        return S(n);
      case "polygon":
        return (
          (r = (e = n).points),
          S(e) + j(r.getItem(r.numberOfItems - 1), r.getItem(0))
        );
    }
    var e, r, t, a, o;
  }
  function $(n, e) {
    var r = e || {},
      t =
        r.el ||
        (function (n) {
          for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode); )
            e = e.parentNode;
          return e;
        })(n),
      a = t.getBoundingClientRect(),
      o = P(t, "viewBox"),
      u = a.width,
      c = a.height,
      s = r.viewBox || (o ? o.split(" ") : [0, 0, u, c]);
    return {
      el: t,
      viewBox: s,
      x: s[0] / 1,
      y: s[1] / 1,
      w: u / s[2],
      h: c / s[3],
    };
  }
  function X(n, e) {
    function r(r) {
      void 0 === r && (r = 0);
      var t = e + r >= 1 ? e + r : 0;
      return n.el.getPointAtLength(t);
    }
    var t = $(n.el, n.svg),
      a = r(),
      o = r(-1),
      u = r(1);
    switch (n.property) {
      case "x":
        return (a.x - t.x) * t.w;
      case "y":
        return (a.y - t.y) * t.h;
      case "angle":
        return (180 * Math.atan2(u.y - o.y, u.x - o.x)) / Math.PI;
    }
  }
  function Y(n, e) {
    var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      t = L(i.pth(n) ? n.totalLength : n, e) + "";
    return {
      original: t,
      numbers: t.match(r) ? t.match(r).map(Number) : [0],
      strings: i.str(n) || e ? t.split(r) : [],
    };
  }
  function Z(n) {
    return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function (n, e, r) {
      return r.indexOf(n) === e;
    });
  }
  function Q(n) {
    var e = Z(n);
    return e.map(function (n, r) {
      return { target: n, id: r, total: e.length, transforms: { list: E(n) } };
    });
  }
  function V(n, e) {
    var r = x(e);
    if ((/^spring/.test(r.easing) && (r.duration = s(r.easing)), i.arr(n))) {
      var t = n.length;
      2 === t && !i.obj(n[0])
        ? (n = { value: n })
        : i.fnc(e.duration) || (r.duration = e.duration / t);
    }
    var a = i.arr(n) ? n : [n];
    return a
      .map(function (n, r) {
        var t = i.obj(n) && !i.pth(n) ? n : { value: n };
        return (
          i.und(t.delay) && (t.delay = r ? 0 : e.delay),
          i.und(t.endDelay) &&
            (t.endDelay = r === a.length - 1 ? e.endDelay : 0),
          t
        );
      })
      .map(function (n) {
        return k(n, r);
      });
  }
  function z(n, e) {
    var r = [],
      t = e.keyframes;
    for (var a in (t &&
      (e = k(
        (function (n) {
          for (
            var e = m(
                y(
                  n.map(function (n) {
                    return Object.keys(n);
                  })
                ),
                function (n) {
                  return i.key(n);
                }
              ).reduce(function (n, e) {
                return n.indexOf(e) < 0 && n.push(e), n;
              }, []),
              r = {},
              t = function (t) {
                var a = e[t];
                r[a] = n.map(function (n) {
                  var e = {};
                  for (var r in n)
                    i.key(r) ? r == a && (e.value = n[r]) : (e[r] = n[r]);
                  return e;
                });
              },
              a = 0;
            a < e.length;
            a++
          )
            t(a);
          return r;
        })(t),
        e
      )),
    e))
      i.key(a) && r.push({ name: a, tweens: V(e[a], n) });
    return r;
  }
  function H(n, e) {
    var r;
    return n.tweens.map(function (t) {
      var a = (function (n, e) {
          var r = {};
          for (var t in n) {
            var a = B(n[t], e);
            i.arr(a) &&
              1 ===
                (a = a.map(function (n) {
                  return B(n, e);
                })).length &&
              (a = a[0]),
              (r[t] = a);
          }
          return (
            (r.duration = parseFloat(r.duration)),
            (r.delay = parseFloat(r.delay)),
            r
          );
        })(t, e),
        o = a.value,
        u = i.arr(o) ? o[1] : o,
        c = C(u),
        s = N(e.target, n.name, c, e),
        f = r ? r.to.original : s,
        l = i.arr(o) ? o[0] : f,
        d = C(l) || C(s),
        p = c || d;
      return (
        i.und(u) && (u = f),
        (a.from = Y(l, p)),
        (a.to = Y(A(u, l), p)),
        (a.start = r ? r.end : 0),
        (a.end = a.start + a.delay + a.duration + a.endDelay),
        (a.easing = v(a.easing, a.duration)),
        (a.isPath = i.pth(o)),
        (a.isColor = i.col(a.from.original)),
        a.isColor && (a.round = 1),
        (r = a),
        a
      );
    });
  }
  var G = {
    css: function (n, e, r) {
      return (n.style[e] = r);
    },
    attribute: function (n, e, r) {
      return n.setAttribute(e, r);
    },
    object: function (n, e, r) {
      return (n[e] = r);
    },
    transform: function (n, e, r, t, a) {
      if ((t.list.set(e, r), e === t.last || a)) {
        var o = "";
        t.list.forEach(function (n, e) {
          o += e + "(" + n + ") ";
        }),
          (n.style.transform = o);
      }
    },
  };
  function R(n, e) {
    Q(n).forEach(function (n) {
      for (var r in e) {
        var t = B(e[r], n),
          a = n.target,
          o = C(t),
          u = N(a, r, o, n),
          i = A(L(t, o || C(u)), u),
          c = D(a, r);
        G[c](a, r, i, n.transforms, !0);
      }
    });
  }
  function W(n, e) {
    return m(
      y(
        n.map(function (n) {
          return e.map(function (e) {
            return (function (n, e) {
              var r = D(n.target, e.name);
              if (r) {
                var t = H(e, n),
                  a = t[t.length - 1];
                return {
                  type: r,
                  property: e.name,
                  animatable: n,
                  tweens: t,
                  duration: a.end,
                  delay: t[0].delay,
                  endDelay: a.endDelay,
                };
              }
            })(n, e);
          });
        })
      ),
      function (n) {
        return !i.und(n);
      }
    );
  }
  function J(n, e) {
    var r = n.length,
      t = function (n) {
        return n.timelineOffset ? n.timelineOffset : 0;
      },
      a = {};
    return (
      (a.duration = r
        ? Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration;
            })
          )
        : e.duration),
      (a.delay = r
        ? Math.min.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.delay;
            })
          )
        : e.delay),
      (a.endDelay = r
        ? a.duration -
          Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration - n.endDelay;
            })
          )
        : e.endDelay),
      a
    );
  }
  var K = 0;
  var U,
    _ = [],
    nn = [],
    en = (function () {
      function n() {
        U = requestAnimationFrame(e);
      }
      function e(e) {
        var r = _.length;
        if (r) {
          for (var t = 0; t < r; ) {
            var a = _[t];
            if (a.paused) {
              var o = _.indexOf(a);
              o > -1 && (_.splice(o, 1), (r = _.length));
            } else a.tick(e);
            t++;
          }
          n();
        } else U = cancelAnimationFrame(U);
      }
      return n;
    })();
  function rn(r) {
    void 0 === r && (r = {});
    var t,
      o = 0,
      u = 0,
      i = 0,
      c = 0,
      s = null;
    function f(n) {
      var e =
        window.Promise &&
        new Promise(function (n) {
          return (s = n);
        });
      return (n.finished = e), e;
    }
    var l,
      d,
      p,
      h,
      v,
      g,
      y,
      b,
      M =
        ((d = w(n, (l = r))),
        (p = w(e, l)),
        (h = z(p, l)),
        (v = Q(l.targets)),
        (g = W(v, h)),
        (y = J(g, p)),
        (b = K),
        K++,
        k(d, {
          id: b,
          children: [],
          animatables: v,
          animations: g,
          duration: y.duration,
          delay: y.delay,
          endDelay: y.endDelay,
        }));
    f(M);
    function x() {
      var n = M.direction;
      "alternate" !== n &&
        (M.direction = "normal" !== n ? "normal" : "reverse"),
        (M.reversed = !M.reversed),
        t.forEach(function (n) {
          return (n.reversed = M.reversed);
        });
    }
    function O(n) {
      return M.reversed ? M.duration - n : n;
    }
    function C() {
      (o = 0), (u = O(M.currentTime) * (1 / rn.speed));
    }
    function B(n, e) {
      e && e.seek(n - e.timelineOffset);
    }
    function P(n) {
      for (var e = 0, r = M.animations, t = r.length; e < t; ) {
        var o = r[e],
          u = o.animatable,
          i = o.tweens,
          c = i.length - 1,
          s = i[c];
        c &&
          (s =
            m(i, function (e) {
              return n < e.end;
            })[0] || s);
        for (
          var f = a(n - s.start - s.delay, 0, s.duration) / s.duration,
            l = isNaN(f) ? 1 : s.easing(f),
            d = s.to.strings,
            p = s.round,
            h = [],
            v = s.to.numbers.length,
            g = void 0,
            y = 0;
          y < v;
          y++
        ) {
          var b = void 0,
            x = s.to.numbers[y],
            w = s.from.numbers[y] || 0;
          (b = s.isPath ? X(s.value, l * x) : w + l * (x - w)),
            p && ((s.isColor && y > 2) || (b = Math.round(b * p) / p)),
            h.push(b);
        }
        var k = d.length;
        if (k) {
          g = d[0];
          for (var O = 0; O < k; O++) {
            d[O];
            var C = d[O + 1],
              B = h[O];
            isNaN(B) || (g += C ? B + C : B + " ");
          }
        } else g = h[0];
        G[o.type](u.target, o.property, g, u.transforms),
          (o.currentValue = g),
          e++;
      }
    }
    function I(n) {
      M[n] && !M.passThrough && M[n](M);
    }
    function T(n) {
      var e = M.duration,
        r = M.delay,
        l = e - M.endDelay,
        d = O(n);
      (M.progress = a((d / e) * 100, 0, 100)),
        (M.reversePlayback = d < M.currentTime),
        t &&
          (function (n) {
            if (M.reversePlayback) for (var e = c; e--; ) B(n, t[e]);
            else for (var r = 0; r < c; r++) B(n, t[r]);
          })(d),
        !M.began && M.currentTime > 0 && ((M.began = !0), I("begin")),
        !M.loopBegan &&
          M.currentTime > 0 &&
          ((M.loopBegan = !0), I("loopBegin")),
        d <= r && 0 !== M.currentTime && P(0),
        ((d >= l && M.currentTime !== e) || !e) && P(e),
        d > r && d < l
          ? (M.changeBegan ||
              ((M.changeBegan = !0),
              (M.changeCompleted = !1),
              I("changeBegin")),
            I("change"),
            P(d))
          : M.changeBegan &&
            ((M.changeCompleted = !0),
            (M.changeBegan = !1),
            I("changeComplete")),
        (M.currentTime = a(d, 0, e)),
        M.began && I("update"),
        n >= e &&
          ((u = 0),
          M.remaining && !0 !== M.remaining && M.remaining--,
          M.remaining
            ? ((o = i),
              I("loopComplete"),
              (M.loopBegan = !1),
              "alternate" === M.direction && x())
            : ((M.paused = !0),
              M.completed ||
                ((M.completed = !0),
                I("loopComplete"),
                I("complete"),
                !M.passThrough && "Promise" in window && (s(), f(M)))));
    }
    return (
      (M.reset = function () {
        var n = M.direction;
        (M.passThrough = !1),
          (M.currentTime = 0),
          (M.progress = 0),
          (M.paused = !0),
          (M.began = !1),
          (M.loopBegan = !1),
          (M.changeBegan = !1),
          (M.completed = !1),
          (M.changeCompleted = !1),
          (M.reversePlayback = !1),
          (M.reversed = "reverse" === n),
          (M.remaining = M.loop),
          (t = M.children);
        for (var e = (c = t.length); e--; ) M.children[e].reset();
        ((M.reversed && !0 !== M.loop) ||
          ("alternate" === n && 1 === M.loop)) &&
          M.remaining++,
          P(M.reversed ? M.duration : 0);
      }),
      (M.set = function (n, e) {
        return R(n, e), M;
      }),
      (M.tick = function (n) {
        (i = n), o || (o = i), T((i + (u - o)) * rn.speed);
      }),
      (M.seek = function (n) {
        T(O(n));
      }),
      (M.pause = function () {
        (M.paused = !0), C();
      }),
      (M.play = function () {
        M.paused &&
          (M.completed && M.reset(),
          (M.paused = !1),
          _.push(M),
          C(),
          U || en());
      }),
      (M.reverse = function () {
        x(), C();
      }),
      (M.restart = function () {
        M.reset(), M.play();
      }),
      M.reset(),
      M.autoplay && M.play(),
      M
    );
  }
  function tn(n, e) {
    for (var r = e.length; r--; )
      M(n, e[r].animatable.target) && e.splice(r, 1);
  }
  return (
    "undefined" != typeof document &&
      document.addEventListener("visibilitychange", function () {
        document.hidden
          ? (_.forEach(function (n) {
              return n.pause();
            }),
            (nn = _.slice(0)),
            (rn.running = _ = []))
          : nn.forEach(function (n) {
              return n.play();
            });
      }),
    (rn.version = "3.1.0"),
    (rn.speed = 1),
    (rn.running = _),
    (rn.remove = function (n) {
      for (var e = Z(n), r = _.length; r--; ) {
        var t = _[r],
          a = t.animations,
          o = t.children;
        tn(e, a);
        for (var u = o.length; u--; ) {
          var i = o[u],
            c = i.animations;
          tn(e, c), c.length || i.children.length || o.splice(u, 1);
        }
        a.length || o.length || t.pause();
      }
    }),
    (rn.get = N),
    (rn.set = R),
    (rn.convertPx = I),
    (rn.path = function (n, e) {
      var r = i.str(n) ? g(n)[0] : n,
        t = e || 100;
      return function (n) {
        return { property: n, el: r, svg: $(r), totalLength: q(r) * (t / 100) };
      };
    }),
    (rn.setDashoffset = function (n) {
      var e = q(n);
      return n.setAttribute("stroke-dasharray", e), e;
    }),
    (rn.stagger = function (n, e) {
      void 0 === e && (e = {});
      var r = e.direction || "normal",
        t = e.easing ? v(e.easing) : null,
        a = e.grid,
        o = e.axis,
        u = e.from || 0,
        c = "first" === u,
        s = "center" === u,
        f = "last" === u,
        l = i.arr(n),
        d = l ? parseFloat(n[0]) : parseFloat(n),
        p = l ? parseFloat(n[1]) : 0,
        h = C(l ? n[1] : n) || 0,
        g = e.start || 0 + (l ? d : 0),
        m = [],
        y = 0;
      return function (n, e, i) {
        if (
          (c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length)
        ) {
          for (var v = 0; v < i; v++) {
            if (a) {
              var b = s ? (a[0] - 1) / 2 : u % a[0],
                M = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                x = b - (v % a[0]),
                w = M - Math.floor(v / a[0]),
                k = Math.sqrt(x * x + w * w);
              "x" === o && (k = -x), "y" === o && (k = -w), m.push(k);
            } else m.push(Math.abs(u - v));
            y = Math.max.apply(Math, m);
          }
          t &&
            (m = m.map(function (n) {
              return t(n / y) * y;
            })),
            "reverse" === r &&
              (m = m.map(function (n) {
                return o ? (n < 0 ? -1 * n : -n) : Math.abs(y - n);
              }));
        }
        return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h;
      };
    }),
    (rn.timeline = function (n) {
      void 0 === n && (n = {});
      var r = rn(n);
      return (
        (r.duration = 0),
        (r.add = function (t, a) {
          var o = _.indexOf(r),
            u = r.children;
          function c(n) {
            n.passThrough = !0;
          }
          o > -1 && _.splice(o, 1);
          for (var s = 0; s < u.length; s++) c(u[s]);
          var f = k(t, w(e, n));
          f.targets = f.targets || n.targets;
          var l = r.duration;
          (f.autoplay = !1),
            (f.direction = r.direction),
            (f.timelineOffset = i.und(a) ? l : A(a, l)),
            c(r),
            r.seek(f.timelineOffset);
          var d = rn(f);
          c(d), u.push(d);
          var p = J(u, n);
          return (
            (r.delay = p.delay),
            (r.endDelay = p.endDelay),
            (r.duration = p.duration),
            r.seek(0),
            r.reset(),
            r.autoplay && r.play(),
            r
          );
        }),
        r
      );
    }),
    (rn.easing = v),
    (rn.penner = h),
    (rn.random = function (n, e) {
      return Math.floor(Math.random() * (e - n + 1)) + n;
    }),
    rn
  );
});

/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.4
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
("use strict");
!(function () {
  function t(t) {
    if ("undefined" == typeof t)
      throw new Error(
        'Pathformer [constructor]: "element" parameter is required'
      );
    if (t.constructor === String && ((t = document.getElementById(t)), !t))
      throw new Error(
        'Pathformer [constructor]: "element" parameter is not related to an existing ID'
      );
    if (
      !(
        t instanceof window.SVGElement ||
        t instanceof window.SVGGElement ||
        /^svg$/i.test(t.nodeName)
      )
    )
      throw new Error(
        'Pathformer [constructor]: "element" parameter must be a string or a SVGelement'
      );
    (this.el = t), this.scan(t);
  }
  function e(t, e, n) {
    r(),
      (this.isReady = !1),
      this.setElement(t, e),
      this.setOptions(e),
      this.setCallback(n),
      this.isReady && this.init();
  }
  (t.prototype.TYPES = [
    "line",
    "ellipse",
    "circle",
    "polygon",
    "polyline",
    "rect",
  ]),
    (t.prototype.ATTR_WATCH = [
      "cx",
      "cy",
      "points",
      "r",
      "rx",
      "ry",
      "x",
      "x1",
      "x2",
      "y",
      "y1",
      "y2",
    ]),
    (t.prototype.scan = function (t) {
      for (
        var e, r, n, i, a = t.querySelectorAll(this.TYPES.join(",")), o = 0;
        o < a.length;
        o++
      )
        (r = a[o]),
          (e = this[r.tagName.toLowerCase() + "ToPath"]),
          (n = e(this.parseAttr(r.attributes))),
          (i = this.pathMaker(r, n)),
          r.parentNode.replaceChild(i, r);
    }),
    (t.prototype.lineToPath = function (t) {
      var e = {},
        r = t.x1 || 0,
        n = t.y1 || 0,
        i = t.x2 || 0,
        a = t.y2 || 0;
      return (e.d = "M" + r + "," + n + "L" + i + "," + a), e;
    }),
    (t.prototype.rectToPath = function (t) {
      var e = {},
        r = parseFloat(t.x) || 0,
        n = parseFloat(t.y) || 0,
        i = parseFloat(t.width) || 0,
        a = parseFloat(t.height) || 0;
      if (t.rx || t.ry) {
        var o = parseInt(t.rx, 10) || -1,
          s = parseInt(t.ry, 10) || -1;
        (o = Math.min(Math.max(0 > o ? s : o, 0), i / 2)),
          (s = Math.min(Math.max(0 > s ? o : s, 0), a / 2)),
          (e.d =
            "M " +
            (r + o) +
            "," +
            n +
            " L " +
            (r + i - o) +
            "," +
            n +
            " A " +
            o +
            "," +
            s +
            ",0,0,1," +
            (r + i) +
            "," +
            (n + s) +
            " L " +
            (r + i) +
            "," +
            (n + a - s) +
            " A " +
            o +
            "," +
            s +
            ",0,0,1," +
            (r + i - o) +
            "," +
            (n + a) +
            " L " +
            (r + o) +
            "," +
            (n + a) +
            " A " +
            o +
            "," +
            s +
            ",0,0,1," +
            r +
            "," +
            (n + a - s) +
            " L " +
            r +
            "," +
            (n + s) +
            " A " +
            o +
            "," +
            s +
            ",0,0,1," +
            (r + o) +
            "," +
            n);
      } else
        e.d =
          "M" +
          r +
          " " +
          n +
          " L" +
          (r + i) +
          " " +
          n +
          " L" +
          (r + i) +
          " " +
          (n + a) +
          " L" +
          r +
          " " +
          (n + a) +
          " Z";
      return e;
    }),
    (t.prototype.polylineToPath = function (t) {
      var e,
        r,
        n = {},
        i = t.points.trim().split(" ");
      if (-1 === t.points.indexOf(",")) {
        var a = [];
        for (e = 0; e < i.length; e += 2) a.push(i[e] + "," + i[e + 1]);
        i = a;
      }
      for (r = "M" + i[0], e = 1; e < i.length; e++)
        -1 !== i[e].indexOf(",") && (r += "L" + i[e]);
      return (n.d = r), n;
    }),
    (t.prototype.polygonToPath = function (e) {
      var r = t.prototype.polylineToPath(e);
      return (r.d += "Z"), r;
    }),
    (t.prototype.ellipseToPath = function (t) {
      var e = {},
        r = parseFloat(t.rx) || 0,
        n = parseFloat(t.ry) || 0,
        i = parseFloat(t.cx) || 0,
        a = parseFloat(t.cy) || 0,
        o = i - r,
        s = a,
        h = parseFloat(i) + parseFloat(r),
        l = a;
      return (
        (e.d =
          "M" +
          o +
          "," +
          s +
          "A" +
          r +
          "," +
          n +
          " 0,1,1 " +
          h +
          "," +
          l +
          "A" +
          r +
          "," +
          n +
          " 0,1,1 " +
          o +
          "," +
          l),
        e
      );
    }),
    (t.prototype.circleToPath = function (t) {
      var e = {},
        r = parseFloat(t.r) || 0,
        n = parseFloat(t.cx) || 0,
        i = parseFloat(t.cy) || 0,
        a = n - r,
        o = i,
        s = parseFloat(n) + parseFloat(r),
        h = i;
      return (
        (e.d =
          "M" +
          a +
          "," +
          o +
          "A" +
          r +
          "," +
          r +
          " 0,1,1 " +
          s +
          "," +
          h +
          "A" +
          r +
          "," +
          r +
          " 0,1,1 " +
          a +
          "," +
          h),
        e
      );
    }),
    (t.prototype.pathMaker = function (t, e) {
      var r,
        n,
        i = document.createElementNS("http://www.w3.org/2000/svg", "path");
      for (r = 0; r < t.attributes.length; r++)
        (n = t.attributes[r]),
          -1 === this.ATTR_WATCH.indexOf(n.name) &&
            i.setAttribute(n.name, n.value);
      for (r in e) i.setAttribute(r, e[r]);
      return i;
    }),
    (t.prototype.parseAttr = function (t) {
      for (var e, r = {}, n = 0; n < t.length; n++) {
        if (
          ((e = t[n]),
          -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%"))
        )
          throw new Error(
            "Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'."
          );
        r[e.name] = e.value;
      }
      return r;
    });
  var r, n, i, a;
  (e.LINEAR = function (t) {
    return t;
  }),
    (e.EASE = function (t) {
      return -Math.cos(t * Math.PI) / 2 + 0.5;
    }),
    (e.EASE_OUT = function (t) {
      return 1 - Math.pow(1 - t, 3);
    }),
    (e.EASE_IN = function (t) {
      return Math.pow(t, 3);
    }),
    (e.EASE_OUT_BOUNCE = function (t) {
      var e = -Math.cos(0.5 * t * Math.PI) + 1,
        r = Math.pow(e, 1.5),
        n = Math.pow(1 - t, 2),
        i = -Math.abs(Math.cos(2.5 * r * Math.PI)) + 1;
      return 1 - n + i * n;
    }),
    (e.prototype.setElement = function (t, e) {
      var r, n;
      if ("undefined" == typeof t)
        throw new Error('Vivus [constructor]: "element" parameter is required');
      if (t.constructor === String && ((t = document.getElementById(t)), !t))
        throw new Error(
          'Vivus [constructor]: "element" parameter is not related to an existing ID'
        );
      if (((this.parentEl = t), e && e.file)) {
        var n = this;
        r = function () {
          var t = document.createElement("div");
          t.innerHTML = this.responseText;
          var r = t.querySelector("svg");
          if (!r)
            throw new Error(
              "Vivus [load]: Cannot find the SVG in the loaded file : " + e.file
            );
          (n.el = r),
            n.el.setAttribute("width", "100%"),
            n.el.setAttribute("height", "100%"),
            n.parentEl.appendChild(n.el),
            (n.isReady = !0),
            n.init(),
            (n = null);
        };
        var i = new window.XMLHttpRequest();
        return (
          i.addEventListener("load", r), i.open("GET", e.file), i.send(), void 0
        );
      }
      switch (t.constructor) {
        case window.SVGSVGElement:
        case window.SVGElement:
        case window.SVGGElement:
          (this.el = t), (this.isReady = !0);
          break;
        case window.HTMLObjectElement:
          (n = this),
            (r = function (e) {
              if (!n.isReady) {
                if (
                  ((n.el =
                    t.contentDocument &&
                    t.contentDocument.querySelector("svg")),
                  !n.el && e)
                )
                  throw new Error(
                    "Vivus [constructor]: object loaded does not contain any SVG"
                  );
                n.el &&
                  (t.getAttribute("built-by-vivus") &&
                    (n.parentEl.insertBefore(n.el, t),
                    n.parentEl.removeChild(t),
                    n.el.setAttribute("width", "100%"),
                    n.el.setAttribute("height", "100%")),
                  (n.isReady = !0),
                  n.init(),
                  (n = null));
              }
            }),
            r() || t.addEventListener("load", r);
          break;
        default:
          throw new Error(
            'Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)'
          );
      }
    }),
    (e.prototype.setOptions = function (t) {
      var r = [
          "delayed",
          "sync",
          "async",
          "nsync",
          "oneByOne",
          "scenario",
          "scenario-sync",
        ],
        n = ["inViewport", "manual", "autostart"];
      if (void 0 !== t && t.constructor !== Object)
        throw new Error(
          'Vivus [constructor]: "options" parameter must be an object'
        );
      if (((t = t || {}), t.type && -1 === r.indexOf(t.type)))
        throw new Error(
          "Vivus [constructor]: " +
            t.type +
            " is not an existing animation `type`"
        );
      if (((this.type = t.type || r[0]), t.start && -1 === n.indexOf(t.start)))
        throw new Error(
          "Vivus [constructor]: " +
            t.start +
            " is not an existing `start` option"
        );
      if (
        ((this.start = t.start || n[0]),
        (this.isIE =
          -1 !== window.navigator.userAgent.indexOf("MSIE") ||
          -1 !== window.navigator.userAgent.indexOf("Trident/") ||
          -1 !== window.navigator.userAgent.indexOf("Edge/")),
        (this.duration = a(t.duration, 120)),
        (this.delay = a(t.delay, null)),
        (this.dashGap = a(t.dashGap, 1)),
        (this.forceRender = t.hasOwnProperty("forceRender")
          ? !!t.forceRender
          : this.isIE),
        (this.reverseStack = !!t.reverseStack),
        (this.selfDestroy = !!t.selfDestroy),
        (this.onReady = t.onReady),
        (this.map = []),
        (this.frameLength =
          this.currentFrame =
          this.delayUnit =
          this.speed =
          this.handle =
            null),
        (this.ignoreInvisible = t.hasOwnProperty("ignoreInvisible")
          ? !!t.ignoreInvisible
          : !1),
        (this.animTimingFunction = t.animTimingFunction || e.LINEAR),
        (this.pathTimingFunction = t.pathTimingFunction || e.LINEAR),
        this.delay >= this.duration)
      )
        throw new Error(
          "Vivus [constructor]: delay must be shorter than duration"
        );
    }),
    (e.prototype.setCallback = function (t) {
      if (t && t.constructor !== Function)
        throw new Error(
          'Vivus [constructor]: "callback" parameter must be a function'
        );
      this.callback = t || function () {};
    }),
    (e.prototype.mapping = function () {
      var t, e, r, n, i, o, s, h;
      for (
        h = o = s = 0, e = this.el.querySelectorAll("path"), t = 0;
        t < e.length;
        t++
      )
        (r = e[t]),
          this.isInvisible(r) ||
            ((i = { el: r, length: Math.ceil(r.getTotalLength()) }),
            isNaN(i.length)
              ? window.console &&
                console.warn &&
                console.warn(
                  "Vivus [mapping]: cannot retrieve a path element length",
                  r
                )
              : (this.map.push(i),
                (r.style.strokeDasharray =
                  i.length + " " + (i.length + 2 * this.dashGap)),
                (r.style.strokeDashoffset = i.length + this.dashGap),
                (i.length += this.dashGap),
                (o += i.length),
                this.renderPath(t)));
      for (
        o = 0 === o ? 1 : o,
          this.delay = null === this.delay ? this.duration / 3 : this.delay,
          this.delayUnit = this.delay / (e.length > 1 ? e.length - 1 : 1),
          this.reverseStack && this.map.reverse(),
          t = 0;
        t < this.map.length;
        t++
      ) {
        switch (((i = this.map[t]), this.type)) {
          case "delayed":
            (i.startAt = this.delayUnit * t),
              (i.duration = this.duration - this.delay);
            break;
          case "oneByOne":
            (i.startAt = (s / o) * this.duration),
              (i.duration = (i.length / o) * this.duration);
            break;
          case "sync":
          case "async":
          case "nsync":
            (i.startAt = 0), (i.duration = this.duration);
            break;
          case "scenario-sync":
            (r = i.el),
              (n = this.parseAttr(r)),
              (i.startAt = h + (a(n["data-delay"], this.delayUnit) || 0)),
              (i.duration = a(n["data-duration"], this.duration)),
              (h =
                void 0 !== n["data-async"]
                  ? i.startAt
                  : i.startAt + i.duration),
              (this.frameLength = Math.max(
                this.frameLength,
                i.startAt + i.duration
              ));
            break;
          case "scenario":
            (r = i.el),
              (n = this.parseAttr(r)),
              (i.startAt = a(n["data-start"], this.delayUnit) || 0),
              (i.duration = a(n["data-duration"], this.duration)),
              (this.frameLength = Math.max(
                this.frameLength,
                i.startAt + i.duration
              ));
        }
        (s += i.length), (this.frameLength = this.frameLength || this.duration);
      }
    }),
    (e.prototype.drawer = function () {
      var t = this;
      if (((this.currentFrame += this.speed), this.currentFrame <= 0))
        this.stop(), this.reset();
      else {
        if (!(this.currentFrame >= this.frameLength))
          return (
            this.trace(),
            (this.handle = n(function () {
              t.drawer();
            })),
            void 0
          );
        this.stop(),
          (this.currentFrame = this.frameLength),
          this.trace(),
          this.selfDestroy && this.destroy();
      }
      this.callback(this),
        this.instanceCallback &&
          (this.instanceCallback(this), (this.instanceCallback = null));
    }),
    (e.prototype.trace = function () {
      var t, e, r, n;
      for (
        n =
          this.animTimingFunction(this.currentFrame / this.frameLength) *
          this.frameLength,
          t = 0;
        t < this.map.length;
        t++
      )
        (r = this.map[t]),
          (e = (n - r.startAt) / r.duration),
          (e = this.pathTimingFunction(Math.max(0, Math.min(1, e)))),
          r.progress !== e &&
            ((r.progress = e),
            (r.el.style.strokeDashoffset = Math.floor(r.length * (1 - e))),
            this.renderPath(t));
    }),
    (e.prototype.renderPath = function (t) {
      if (this.forceRender && this.map && this.map[t]) {
        var e = this.map[t],
          r = e.el.cloneNode(!0);
        e.el.parentNode.replaceChild(r, e.el), (e.el = r);
      }
    }),
    (e.prototype.init = function () {
      (this.frameLength = 0),
        (this.currentFrame = 0),
        (this.map = []),
        new t(this.el),
        this.mapping(),
        this.starter(),
        this.onReady && this.onReady(this);
    }),
    (e.prototype.starter = function () {
      switch (this.start) {
        case "manual":
          return;
        case "autostart":
          this.play();
          break;
        case "inViewport":
          var t = this,
            e = function () {
              t.isInViewport(t.parentEl, 1) &&
                (t.play(), window.removeEventListener("scroll", e));
            };
          window.addEventListener("scroll", e), e();
      }
    }),
    (e.prototype.getStatus = function () {
      return 0 === this.currentFrame
        ? "start"
        : this.currentFrame === this.frameLength
        ? "end"
        : "progress";
    }),
    (e.prototype.reset = function () {
      return this.setFrameProgress(0);
    }),
    (e.prototype.finish = function () {
      return this.setFrameProgress(1);
    }),
    (e.prototype.setFrameProgress = function (t) {
      return (
        (t = Math.min(1, Math.max(0, t))),
        (this.currentFrame = Math.round(this.frameLength * t)),
        this.trace(),
        this
      );
    }),
    (e.prototype.play = function (t, e) {
      if (((this.instanceCallback = null), t && "function" == typeof t))
        (this.instanceCallback = t), (t = null);
      else if (t && "number" != typeof t)
        throw new Error("Vivus [play]: invalid speed");
      return (
        e &&
          "function" == typeof e &&
          !this.instanceCallback &&
          (this.instanceCallback = e),
        (this.speed = t || 1),
        this.handle || this.drawer(),
        this
      );
    }),
    (e.prototype.stop = function () {
      return this.handle && (i(this.handle), (this.handle = null)), this;
    }),
    (e.prototype.destroy = function () {
      this.stop();
      var t, e;
      for (t = 0; t < this.map.length; t++)
        (e = this.map[t]),
          (e.el.style.strokeDashoffset = null),
          (e.el.style.strokeDasharray = null),
          this.renderPath(t);
    }),
    (e.prototype.isInvisible = function (t) {
      var e,
        r = t.getAttribute("data-ignore");
      return null !== r
        ? "false" !== r
        : this.ignoreInvisible
        ? ((e = t.getBoundingClientRect()), !e.width && !e.height)
        : !1;
    }),
    (e.prototype.parseAttr = function (t) {
      var e,
        r = {};
      if (t && t.attributes)
        for (var n = 0; n < t.attributes.length; n++)
          (e = t.attributes[n]), (r[e.name] = e.value);
      return r;
    }),
    (e.prototype.isInViewport = function (t, e) {
      var r = this.scrollY(),
        n = r + this.getViewportH(),
        i = t.getBoundingClientRect(),
        a = i.height,
        o = r + i.top,
        s = o + a;
      return (e = e || 0), n >= o + a * e && s >= r;
    }),
    (e.prototype.getViewportH = function () {
      var t = this.docElem.clientHeight,
        e = window.innerHeight;
      return e > t ? e : t;
    }),
    (e.prototype.scrollY = function () {
      return window.pageYOffset || this.docElem.scrollTop;
    }),
    (r = function () {
      e.prototype.docElem ||
        ((e.prototype.docElem = window.document.documentElement),
        (n = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (t) {
              return window.setTimeout(t, 1e3 / 60);
            }
          );
        })()),
        (i = (function () {
          return (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            function (t) {
              return window.clearTimeout(t);
            }
          );
        })()));
    }),
    (a = function (t, e) {
      var r = parseInt(t, 10);
      return r >= 0 ? r : e;
    }),
    "function" == typeof define && define.amd
      ? define([], function () {
          return e;
        })
      : "object" == typeof exports
      ? (module.exports = e)
      : (window.Vivus = e);
})();

/*!
 * Flickity PACKAGED v2.2.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

!(function (e, i) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = i(e, require("jquery")))
    : (e.jQueryBridget = i(e, e.jQuery));
})(window, function (t, e) {
  "use strict";
  var d = Array.prototype.slice,
    i = t.console,
    u =
      void 0 === i
        ? function () {}
        : function (t) {
            i.error(t);
          };
  function n(h, s, c) {
    (c = c || e || t.jQuery) &&
      (s.prototype.option ||
        (s.prototype.option = function (t) {
          c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
        }),
      (c.fn[h] = function (t) {
        if ("string" != typeof t)
          return (
            (n = t),
            this.each(function (t, e) {
              var i = c.data(e, h);
              i
                ? (i.option(n), i._init())
                : ((i = new s(e, n)), c.data(e, h, i));
            }),
            this
          );
        var e,
          o,
          r,
          a,
          l,
          n,
          i = d.call(arguments, 1);
        return (
          (r = i),
          (l = "$()." + h + '("' + (o = t) + '")'),
          (e = this).each(function (t, e) {
            var i = c.data(e, h);
            if (i) {
              var n = i[o];
              if (n && "_" != o.charAt(0)) {
                var s = n.apply(i, r);
                a = void 0 === a ? s : a;
              } else u(l + " is not a valid method");
            } else u(h + " not initialized. Cannot call methods, i.e. " + l);
          }),
          void 0 !== a ? a : e
        );
      }),
      o(c));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = n);
  }
  return o(e || t.jQuery), n;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s];
            n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function m(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var i =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      y = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      b = y.length;
    function E(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          i(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    var S,
      C = !1;
    function x(t) {
      if (
        ((function () {
          if (!C) {
            C = !0;
            var t = document.createElement("div");
            (t.style.width = "200px"),
              (t.style.padding = "1px 2px 3px 4px"),
              (t.style.borderStyle = "solid"),
              (t.style.borderWidth = "1px 2px 3px 4px"),
              (t.style.boxSizing = "border-box");
            var e = document.body || document.documentElement;
            e.appendChild(t);
            var i = E(t);
            (S = 200 == Math.round(m(i.width))),
              (x.isBoxSizeOuter = S),
              e.removeChild(t);
          }
        })(),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var e = E(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < b;
              e++
            )
              t[y[e]] = 0;
            return t;
          })();
        var i = {};
        (i.width = t.offsetWidth), (i.height = t.offsetHeight);
        for (
          var n = (i.isBorderBox = "border-box" == e.boxSizing), s = 0;
          s < b;
          s++
        ) {
          var o = y[s],
            r = e[o],
            a = parseFloat(r);
          i[o] = isNaN(a) ? 0 : a;
        }
        var l = i.paddingLeft + i.paddingRight,
          h = i.paddingTop + i.paddingBottom,
          c = i.marginLeft + i.marginRight,
          d = i.marginTop + i.marginBottom,
          u = i.borderLeftWidth + i.borderRightWidth,
          f = i.borderTopWidth + i.borderBottomWidth,
          p = n && S,
          g = m(e.width);
        !1 !== g && (i.width = g + (p ? 0 : l + u));
        var v = m(e.height);
        return (
          !1 !== v && (i.height = v + (p ? 0 : h + f)),
          (i.innerWidth = i.width - (l + u)),
          (i.innerHeight = i.height - (h + f)),
          (i.outerWidth = i.width + c),
          (i.outerHeight = i.height + d),
          i
        );
      }
    }
    return x;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var i = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (t, e) {
      return t[i](e);
    };
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = i(e, e.matchesSelector));
  })(window, function (h, o) {
    var c = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      e = Array.prototype.slice;
    (c.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? e.call(t)
        : [t];
    }),
      (c.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (c.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), o(t, e))) return t;
      }),
      (c.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (c.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (c.filterFindElements = function (t, n) {
        t = c.makeArray(t);
        var s = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (n) {
                o(t, n) && s.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                  s.push(e[i]);
              } else s.push(t);
          }),
          s
        );
      }),
      (c.debounceMethod = function (t, e, n) {
        n = n || 100;
        var s = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            i = this;
          this[o] = setTimeout(function () {
            s.apply(i, e), delete i[o];
          }, n);
        };
      }),
      (c.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (c.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var d = h.console;
    return (
      (c.htmlInit = function (a, l) {
        c.docReady(function () {
          var t = c.toDashed(l),
            s = "data-" + t,
            e = document.querySelectorAll("[" + s + "]"),
            i = document.querySelectorAll(".js-" + t),
            n = c.makeArray(e).concat(c.makeArray(i)),
            o = s + "-options",
            r = h.jQuery;
          n.forEach(function (e) {
            var t,
              i = e.getAttribute(s) || e.getAttribute(o);
            try {
              t = i && JSON.parse(i);
            } catch (t) {
              return void (
                d &&
                d.error("Error parsing " + s + " on " + e.className + ": " + t)
              );
            }
            var n = new a(e, t);
            r && r.data(e, l, n);
          });
        });
      }),
      c
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("get-size")))
      : ((e.Flickity = e.Flickity || {}), (e.Flickity.Cell = i(e, e.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = "absolute"),
          this.element.setAttribute("aria-hidden", "true"),
          (this.x = 0),
          (this.shift = 0);
      }),
      (n.destroy = function () {
        this.unselect(), (this.element.style.position = "");
        var t = this.parent.originSide;
        this.element.style[t] = "";
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget =
        function () {
          var t =
            "left" == this.parent.originSide ? "marginLeft" : "marginRight";
          this.target =
            this.x + this.size[t] + this.size.width * this.parent.cellAlign;
        }),
      (n.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      }),
      (n.select = function () {
        this.element.classList.add("is-selected"),
          this.element.removeAttribute("aria-hidden");
      }),
      (n.unselect = function () {
        this.element.classList.remove("is-selected"),
          this.element.setAttribute("aria-hidden", "true");
      }),
      (n.wrapShift = function (t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/slide", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = "left" == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.cells.forEach(function (t) {
          t.select();
        });
      }),
      (e.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect();
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("fizzy-ui-utils")))
      : ((e.Flickity = e.Flickity || {}),
        (e.Flickity.animatePrototype = i(e, e.fizzyUIUtils)));
  })(window, function (t, e) {
    var i = {
      startAnimation: function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      },
      animate: function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          requestAnimationFrame(function () {
            e.animate();
          });
        }
      },
      positionSlider: function () {
        var t = this.x;
        this.options.wrapAround &&
          1 < this.cells.length &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          this.setTranslateX(t, this.isAnimating),
          this.dispatchScrollEvent();
      },
      setTranslateX: function (t, e) {
        (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style.transform = e
          ? "translate3d(" + i + ",0,0)"
          : "translateX(" + i + ")";
      },
      dispatchScrollEvent: function () {
        var t = this.slides[0];
        if (t) {
          var e = -this.x - t.target,
            i = e / this.slidesWidth;
          this.dispatchEvent("scroll", null, [i, e]);
        }
      },
      positionSliderAtSelected: function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      },
      getPositionValue: function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      },
      settle: function (t) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * t) ||
          this.restingFrames++,
          2 < this.restingFrames &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      },
      shiftWrapCells: function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      },
      _shiftCells: function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            o = 0 < e ? i : 0;
          s.wrapShift(o), (e -= s.size.outerWidth);
        }
      },
      _unshiftCells: function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      },
      integratePhysics: function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      },
      applyForce: function (t) {
        this.velocity += t;
      },
      getFrictionFactor: function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      },
      getRestingPosition: function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      },
      applyDragForce: function () {
        if (this.isDraggable && this.isPointerDown) {
          var t = this.dragX - this.x - this.velocity;
          this.applyForce(t);
        }
      },
      applySelectedAttraction: function () {
        if (
          !(this.isDraggable && this.isPointerDown) &&
          !this.isFreeScrolling &&
          this.slides.length
        ) {
          var t =
            (-1 * this.selectedSlide.target - this.x) *
            this.options.selectedAttraction;
          this.applyForce(t);
        }
      },
    };
    return i;
  }),
  (function (r, a) {
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate",
      ], function (t, e, i, n, s, o) {
        return a(r, t, e, i, n, s, o);
      });
    else if ("object" == typeof module && module.exports)
      module.exports = a(
        r,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      var t = r.Flickity;
      r.Flickity = a(
        r,
        r.EvEmitter,
        r.getSize,
        r.fizzyUIUtils,
        t.Cell,
        t.Slide,
        t.animatePrototype
      );
    }
  })(window, function (n, t, e, a, i, r, s) {
    var l = n.jQuery,
      o = n.getComputedStyle,
      h = n.console;
    function c(t, e) {
      for (t = a.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    var d = 0,
      u = {};
    function f(t, e) {
      var i = a.getQueryElement(t);
      if (i) {
        if (((this.element = i), this.element.flickityGUID)) {
          var n = u[this.element.flickityGUID];
          return n.option(e), n;
        }
        l && (this.$element = l(this.element)),
          (this.options = a.extend({}, this.constructor.defaults)),
          this.option(e),
          this._create();
      } else h && h.error("Bad element for Flickity: " + (i || t));
    }
    (f.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (f.createMethods = []);
    var p = f.prototype;
    a.extend(p, t.prototype),
      (p._create = function () {
        var t = (this.guid = ++d);
        for (var e in ((this.element.flickityGUID = t),
        ((u[t] = this).selectedIndex = 0),
        (this.restingFrames = 0),
        (this.x = 0),
        (this.velocity = 0),
        (this.originSide = this.options.rightToLeft ? "right" : "left"),
        (this.viewport = document.createElement("div")),
        (this.viewport.className = "flickity-viewport"),
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) &&
          n.addEventListener("resize", this),
        this.options.on)) {
          var i = this.options.on[e];
          this.on(e, i);
        }
        f.createMethods.forEach(function (t) {
          this[t]();
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function (t) {
        a.extend(this.options, t);
      }),
      (p.activate = function () {
        this.isActive ||
          ((this.isActive = !0),
          this.element.classList.add("flickity-enabled"),
          this.options.rightToLeft &&
            this.element.classList.add("flickity-rtl"),
          this.getSize(),
          c(this._filterFindCellElements(this.element.children), this.slider),
          this.viewport.appendChild(this.slider),
          this.element.appendChild(this.viewport),
          this.reloadCells(),
          this.options.accessibility &&
            ((this.element.tabIndex = 0),
            this.element.addEventListener("keydown", this)),
          this.emitEvent("activate"),
          this.selectInitialIndex(),
          (this.isInitActivated = !0),
          this.dispatchEvent("ready"));
      }),
      (p._createSlider = function () {
        var t = document.createElement("div");
        (t.className = "flickity-slider"),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (p._filterFindCellElements = function (t) {
        return a.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (p._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new i(t, this);
        }, this);
      }),
      (p.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function (t) {
        (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
        var e = 0;
        if (0 < t) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
          var o = this.cells[s];
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (p._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var n = new r(this);
          this.slides.push(n);
          var s = "left" == this.originSide ? "marginRight" : "marginLeft",
            o = this._getCanCellFit();
          this.cells.forEach(function (t, e) {
            if (n.cells.length) {
              var i =
                n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
              o.call(this, e, i) ||
                (n.updateTarget(), (n = new r(this)), this.slides.push(n)),
                n.addCell(t);
            } else n.addCell(t);
          }, this),
            n.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e != 0;
          };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition =
        function () {
          this.positionCells(), this.positionSliderAtSelected();
        }),
      (p.getSize = function () {
        (this.size = e(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var g = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 },
    };
    return (
      (p.setCellAlign = function () {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      }),
      (p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function (t, e, i) {
        for (var n = []; 0 < t; ) {
          var s = this.cells[e];
          if (!s) break;
          n.push(s), (e += i), (t -= s.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            s = n < this.size.innerWidth,
            o = this.cursorPosition + this.cells[0].size[e],
            r = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t) {
            t.target = s
              ? n * this.cellAlign
              : ((t.target = Math.max(t.target, o)), Math.min(t.target, r));
          }, this);
        }
      }),
      (p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), l && this.$element)) {
          var s = (t += this.options.namespaceJQueryEvents ? ".flickity" : "");
          if (e) {
            var o = l.Event(e);
            (o.type = t), (s = o);
          }
          this.$element.trigger(s, i);
        }
      }),
      (p.select = function (t, e, i) {
        if (
          this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = a.modulo(t, this.slides.length)),
          this.slides[t])
        ) {
          var n = this.selectedIndex;
          (this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != n && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect");
        }
      }),
      (p._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = a.modulo(t, e),
          n = Math.abs(i - this.selectedIndex),
          s = Math.abs(i + e - this.selectedIndex),
          o = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n
          ? (t += e)
          : !this.isDragSelect && o < n && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : e <= t && (this.x += this.slideableWidth);
      }),
      (p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t).select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectInitialIndex = function () {
        var t = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
          if (t && "string" == typeof t)
            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
          var e = 0;
          t && this.slides[t] && (e = t), this.select(e, !1, !0);
        }
      }),
      (p.selectCell = function (t, e, i) {
        var n = this.queryCell(t);
        if (n) {
          var s = this.getCellSlideIndex(n);
          this.select(s, e, i);
        }
      }),
      (p.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++) {
          if (-1 != this.slides[e].cells.indexOf(t)) return e;
        }
      }),
      (p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function (t) {
        t = a.makeArray(t);
        var i = [];
        return (
          t.forEach(function (t) {
            var e = this.getCell(t);
            e && i.push(e);
          }, this),
          i
        );
      }),
      (p.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (p.getParentCell = function (t) {
        var e = this.getCell(t);
        return (
          e || ((t = a.getParent(t, ".flickity-slider > *")), this.getCell(t))
        );
      }),
      (p.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
          var o = this.options.wrapAround ? a.modulo(s, i) : s,
            r = this.slides[o];
          r && (n = n.concat(r.getCellElements()));
        }
        return n;
      }),
      (p.queryCell = function (t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
          if (t.match(/^[#\.]?[\d\/]/)) return;
          t = this.element.querySelector(t);
        }
        return this.getCell(t);
      }),
      (p.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (p.childUIPointerDown = function (t) {
        "touchstart" != t.type && t.preventDefault(), this.focus();
      }),
      (p.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      a.debounceMethod(f, "onresize", 150),
      (p.resize = function () {
        if (this.isActive) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = a.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function () {
        this.options.watchCSS &&
          (-1 != o(this.element, ":after").content.indexOf("flickity")
            ? this.activate()
            : this.deactivate());
      }),
      (p.onkeydown = function (t) {
        var e =
          document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
          var i = f.keyboardHandlers[t.keyCode];
          i && i.call(this);
        }
      }),
      (f.keyboardHandlers = {
        37: function () {
          var t = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[t]();
        },
        39: function () {
          var t = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[t]();
        },
      }),
      (p.focus = function () {
        var t = n.pageYOffset;
        this.element.focus({ preventScroll: !0 }),
          n.pageYOffset != t && n.scrollTo(n.pageXOffset, t);
      }),
      (p.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.element.removeChild(this.viewport),
          c(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (p.destroy = function () {
        this.deactivate(),
          n.removeEventListener("resize", this),
          this.allOff(),
          this.emitEvent("destroy"),
          l && this.$element && l.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete u[this.guid];
      }),
      a.extend(p, s),
      (f.data = function (t) {
        var e = (t = a.getQueryElement(t)) && t.flickityGUID;
        return e && u[e];
      }),
      a.htmlInit(f, "flickity"),
      l && l.bridget && l.bridget("flickity", f),
      (f.setJQuery = function (t) {
        l = t;
      }),
      (f.Cell = i),
      (f.Slide = r),
      f
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "unipointer/unipointer",
          ["ev-emitter/ev-emitter"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.Unipointer = i(e, e.EvEmitter));
  })(window, function (s, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype));
    (i.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (i.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (i._bindStartEvent = function (t, e) {
        var i = (e = void 0 === e || e)
            ? "addEventListener"
            : "removeEventListener",
          n = "mousedown";
        s.PointerEvent
          ? (n = "pointerdown")
          : "ontouchstart" in s && (n = "touchstart"),
          t[i](n, this);
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (i.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (i.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (i.onpointerdown = function (t) {
        this._pointerDown(t, t);
      }),
      (i._pointerDown = function (t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (i.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var n = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
    };
    return (
      (i._bindPostStartEvents = function (t) {
        if (t) {
          var e = n[t.type];
          e.forEach(function (t) {
            s.addEventListener(t, this);
          }, this),
            (this._boundPointerEvents = e);
        }
      }),
      (i._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (t) {
            s.removeEventListener(t, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (i.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (i.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (i.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (i._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (i.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (i.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (i.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (i.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (i._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (i._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
      }),
      (i._pointerReset = function () {
        (this.isPointerDown = !1), delete this.pointerIdentifier;
      }),
      (i.pointerDone = function () {}),
      (i.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (i.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (i._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (i.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (e.getPointerPoint = function (t) {
        return { x: t.pageX, y: t.pageY };
      }),
      e
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "unidragger/unidragger",
          ["unipointer/unipointer"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("unipointer")))
      : (e.Unidragger = i(e, e.Unipointer));
  })(window, function (o, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype));
    (i.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (i.unbindHandles = function () {
        this._bindHandles(!1);
      }),
      (i._bindHandles = function (t) {
        for (
          var e = (t = void 0 === t || t)
              ? "addEventListener"
              : "removeEventListener",
            i = t ? this._touchActionValue : "",
            n = 0;
          n < this.handles.length;
          n++
        ) {
          var s = this.handles[n];
          this._bindStartEvent(s, t),
            s[e]("click", this),
            o.PointerEvent && (s.style.touchAction = i);
        }
      }),
      (i._touchActionValue = "none"),
      (i.pointerDown = function (t, e) {
        this.okayPointerDown(t) &&
          ((this.pointerDownPointer = e),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent("pointerDown", [t, e]));
      });
    var s = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0,
      };
    return (
      (i.okayPointerDown = function (t) {
        var e = s[t.target.nodeName],
          i = r[t.target.type],
          n = !e || i;
        return n || this._pointerReset(), n;
      }),
      (i.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur();
      }),
      (i.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (i._dragPointerMove = function (t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY,
        };
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        );
      }),
      (i.hasDragStarted = function (t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y);
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (i._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (i._dragStart = function (t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e);
      }),
      (i.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (i._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (i.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (i._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (i.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (i.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (i._staticClick = function (t, e) {
        (this.isIgnoringMouseUp && "mouseup" == t.type) ||
          (this.staticClick(t, e),
          "mouseup" != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function () {
                delete this.isIgnoringMouseUp;
              }.bind(this),
              400
            )));
      }),
      (i.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (e.getPointerPoint = t.getPointerPoint),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/drag",
          ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils));
  })(window, function (i, t, e, a) {
    a.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }),
      t.createMethods.push("_createDrag");
    var n = t.prototype;
    a.extend(n, e.prototype), (n._touchActionValue = "pan-y");
    var s = "createTouch" in document,
      o = !1;
    (n._createDrag = function () {
      this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        s && !o && (i.addEventListener("touchmove", function () {}), (o = !0));
    }),
      (n.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (n.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (n.updateDraggable = function () {
        ">1" == this.options.draggable
          ? (this.isDraggable = 1 < this.slides.length)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add("is-draggable")
            : this.element.classList.remove("is-draggable");
      }),
      (n.bindDrag = function () {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (n.unbindDrag = function () {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (n._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (n.pointerDown = function (t, e) {
        this.isDraggable
          ? this.okayPointerDown(t) &&
            (this._pointerDownPreventDefault(t),
            this.pointerDownFocus(t),
            document.activeElement != this.element && this.pointerDownBlur(),
            (this.dragX = this.x),
            this.viewport.classList.add("is-pointer-down"),
            (this.pointerDownScroll = l()),
            i.addEventListener("scroll", this),
            this._pointerDownDefault(t, e))
          : this._pointerDownDefault(t, e);
      }),
      (n._pointerDownDefault = function (t, e) {
        (this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          this._bindPostStartEvents(t),
          this.dispatchEvent("pointerDown", t, [e]);
      });
    var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
    function l() {
      return { x: i.pageXOffset, y: i.pageYOffset };
    }
    return (
      (n.pointerDownFocus = function (t) {
        r[t.target.nodeName] || this.focus();
      }),
      (n._pointerDownPreventDefault = function (t) {
        var e = "touchstart" == t.type,
          i = "touch" == t.pointerType,
          n = r[t.target.nodeName];
        e || i || n || t.preventDefault();
      }),
      (n.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (n.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t, [e]),
          this._dragPointerUp(t, e);
      }),
      (n.pointerDone = function () {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (n.dragStart = function (t, e) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          i.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", t, [e]));
      }),
      (n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (n.dragMove = function (t, e, i) {
        if (this.isDraggable) {
          t.preventDefault(), (this.previousDragX = this.dragX);
          var n = this.options.rightToLeft ? -1 : 1;
          this.options.wrapAround && (i.x = i.x % this.slideableWidth);
          var s = this.dragStartPosition + i.x * n;
          if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = o < s ? 0.5 * (s + o) : s;
            var r = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            s = s < r ? 0.5 * (s + r) : s;
          }
          (this.dragX = s),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent("dragMove", t, [e, i]);
        }
      }),
      (n.dragEnd = function (t, e) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var i = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling =
              -n > this.slides[0].target && -n < this.getLastSlide().target;
          } else
            this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e]);
        }
      }),
      (n.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1);
        return i.distance < n.distance ? i.index : n.index;
      }),
      (n._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            s = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          o(e, s) &&
          ((n += i), (s = e), null !== (e = this.getSlideDistance(-t, n)));

        )
          e = Math.abs(e);
        return { distance: s, index: n - i };
      }),
      (n.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          n = this.options.wrapAround && 1 < i,
          s = n ? a.modulo(e, i) : e,
          o = this.slides[s];
        if (!o) return null;
        var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (o.target + r);
      }),
      (n.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          100 < new Date() - this.dragMoveTime
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (n.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s]);
      }),
      (n.onscroll = function () {
        var t = l(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone();
      }),
      t
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/prev-next-button",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    "use strict";
    var s = "http://www.w3.org/2000/svg";
    function o(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    ((o.prototype = Object.create(i.prototype))._create = function () {
      (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
      var t = this.parent.options.rightToLeft ? 1 : -1;
      this.isLeft = this.direction == t;
      var e = (this.element = document.createElement("button"));
      (e.className = "flickity-button flickity-prev-next-button"),
        (e.className += this.isPrevious ? " previous" : " next"),
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
      var i = this.createSVG();
      e.appendChild(i),
        this.parent.on("select", this.update.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (o.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (o.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener("click", this);
      }),
      (o.prototype.createSVG = function () {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"),
          t.setAttribute("viewBox", "0 0 100 100");
        var e,
          i = document.createElementNS(s, "path"),
          n =
            "string" != typeof (e = this.parent.options.arrowShape)
              ? "M " +
                e.x0 +
                ",50 L " +
                e.x1 +
                "," +
                (e.y1 + 50) +
                " L " +
                e.x2 +
                "," +
                (e.y2 + 50) +
                " L " +
                e.x3 +
                ",50  L " +
                e.x2 +
                "," +
                (50 - e.y2) +
                " L " +
                e.x1 +
                "," +
                (50 - e.y1) +
                " Z"
              : e;
        return (
          i.setAttribute("d", n),
          i.setAttribute("class", "arrow"),
          this.isLeft ||
            i.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t.appendChild(i),
          t
        );
      }),
      (o.prototype.handleEvent = n.handleEvent),
      (o.prototype.onclick = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? "previous" : "next";
          this.parent[t]();
        }
      }),
      (o.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (o.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (o.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < t.length) this.enable();
        else {
          var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e;
          this[this.parent.selectedIndex == i ? "disable" : "enable"]();
        }
      }),
      (o.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      e.createMethods.push("_createPrevNextButtons");
    var r = e.prototype;
    return (
      (r._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new o(-1, this)),
          (this.nextButton = new o(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (r.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (r.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = o),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/page-dots",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function s(t) {
      (this.parent = t), this._create();
    }
    ((s.prototype = Object.create(i.prototype))._create = function () {
      (this.holder = document.createElement("ol")),
        (this.holder.className = "flickity-page-dots"),
        (this.dots = []),
        (this.handleClick = this.onClick.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (s.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener("click", this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (s.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder);
      }),
      (s.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (s.prototype.addDots = function (t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            s = n + t,
            o = n;
          o < s;
          o++
        ) {
          var r = document.createElement("li");
          (r.className = "dot"),
            r.setAttribute("aria-label", "Page dot " + (o + 1)),
            e.appendChild(r),
            i.push(r);
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (s.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (s.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = "dot"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (s.prototype.onTap = s.prototype.onClick =
        function (t) {
          var e = t.target;
          if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i);
          }
        }),
      (s.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      (e.PageDots = s),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return (
      (o._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new s(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (o.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = s),
      e
    );
  }),
  (function (t, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/player",
          ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"],
          function (t, e, i) {
            return n(t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    ((n.prototype = Object.create(t.prototype)).play = function () {
      "playing" != this.state &&
        (document.hidden
          ? document.addEventListener("visibilitychange", this.onVisibilityPlay)
          : ((this.state = "playing"),
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityChange
            ),
            this.tick()));
    }),
      (n.prototype.tick = function () {
        if ("playing" == this.state) {
          var t = this.parent.options.autoPlay;
          t = "number" == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function () {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return (
      (s._createPlayer = function () {
        (this.player = new n(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (s.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (s.playPlayer = function () {
        this.player.play();
      }),
      (s.stopPlayer = function () {
        this.player.stop();
      }),
      (s.pausePlayer = function () {
        this.player.pause();
      }),
      (s.unpausePlayer = function () {
        this.player.unpause();
      }),
      (s.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (s.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (s.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/add-remove-cell",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, n) {
    var i = e.prototype;
    return (
      (i.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var n = this.cells.length;
          e = void 0 === e ? n : e;
          var s,
            o,
            r =
              ((s = i),
              (o = document.createDocumentFragment()),
              s.forEach(function (t) {
                o.appendChild(t.element);
              }),
              o),
            a = e == n;
          if (a) this.slider.appendChild(r);
          else {
            var l = this.cells[e].element;
            this.slider.insertBefore(r, l);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (a) this.cells = this.cells.concat(i);
          else {
            var h = this.cells.splice(e, n - e);
            this.cells = this.cells.concat(i).concat(h);
          }
          this._sizeCells(i), this.cellChange(e, !0);
        }
      }),
      (i.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (i.prepend = function (t) {
        this.insert(t, 0);
      }),
      (i.remove = function (t) {
        var e = this.getCells(t);
        if (e && e.length) {
          var i = this.cells.length - 1;
          e.forEach(function (t) {
            t.remove();
            var e = this.cells.indexOf(t);
            (i = Math.min(e, i)), n.removeFrom(this.cells, t);
          }, this),
            this.cellChange(i, !0);
        }
      }),
      (i.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (i.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected();
      }),
      e
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/lazyload",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, o) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;
    function s(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    return (
      (i._createLazyload = function () {
        this.on("select", this.lazyLoad);
      }),
      (i.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
          var e = "number" == typeof t ? t : 0,
            i = this.getAdjacentCellElements(e),
            n = [];
          i.forEach(function (t) {
            var e = (function (t) {
              if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                  i = t.getAttribute("data-flickity-lazyload-src"),
                  n = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || i || n) return [t];
              }
              var s = t.querySelectorAll(
                "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"
              );
              return o.makeArray(s);
            })(t);
            n = n.concat(e);
          }),
            n.forEach(function (t) {
              new s(t, this);
            }, this);
        }
      }),
      (s.prototype.handleEvent = o.handleEvent),
      (s.prototype.load = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
        var t =
            this.img.getAttribute("data-flickity-lazyload") ||
            this.img.getAttribute("data-flickity-lazyload-src"),
          e = this.img.getAttribute("data-flickity-lazyload-srcset");
        (this.img.src = t),
          e && this.img.setAttribute("srcset", e),
          this.img.removeAttribute("data-flickity-lazyload"),
          this.img.removeAttribute("data-flickity-lazyload-src"),
          this.img.removeAttribute("data-flickity-lazyload-srcset");
      }),
      (s.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (s.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (s.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent("lazyLoad", t, n);
      }),
      (e.LazyLoader = s),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/index",
          [
            "./flickity",
            "./drag",
            "./prev-next-button",
            "./page-dots",
            "./player",
            "./add-remove-cell",
            "./lazyload",
          ],
          e
        )
      : "object" == typeof module &&
        module.exports &&
        (module.exports = e(
          require("./flickity"),
          require("./drag"),
          require("./prev-next-button"),
          require("./page-dots"),
          require("./player"),
          require("./add-remove-cell"),
          require("./lazyload")
        ));
  })(window, function (t) {
    return t;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity-as-nav-for/as-nav-for",
          ["flickity/js/index", "fizzy-ui-utils/utils"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
  })(window, function (n, s) {
    n.createMethods.push("_createAsNavFor");
    var t = n.prototype;
    return (
      (t._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor),
          this.on("deactivate", this.deactivateAsNavFor),
          this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
          var e = this;
          setTimeout(function () {
            e.setNavCompanion(t);
          });
        }
      }),
      (t.setNavCompanion = function (t) {
        t = s.getQueryElement(t);
        var e = n.data(t);
        if (e && e != this) {
          this.navCompanion = e;
          var i = this;
          (this.onNavCompanionSelect = function () {
            i.navCompanionSelect();
          }),
            e.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0);
        }
      }),
      (t.navCompanionSelect = function (t) {
        if (this.navCompanion) {
          var e,
            i,
            n,
            s = this.navCompanion.selectedCells[0],
            o = this.navCompanion.cells.indexOf(s),
            r = o + this.navCompanion.selectedCells.length - 1,
            a = Math.floor(
              ((e = o),
              (i = r),
              (n = this.navCompanion.cellAlign),
              (i - e) * n + e)
            );
          if (
            (this.selectCell(a, !1, t),
            this.removeNavSelectedElements(),
            !(a >= this.cells.length))
          ) {
            var l = this.cells.slice(o, r + 1);
            (this.navSelectedElements = l.map(function (t) {
              return t.element;
            })),
              this.changeNavSelectedClass("add");
          }
        }
      }),
      (t.changeNavSelectedClass = function (e) {
        this.navSelectedElements.forEach(function (t) {
          t.classList[e]("is-nav-selected");
        });
      }),
      (t.activateAsNavFor = function () {
        this.navCompanionSelect(!0);
      }),
      (t.removeNavSelectedElements = function () {
        this.navSelectedElements &&
          (this.changeNavSelectedClass("remove"),
          delete this.navSelectedElements);
      }),
      (t.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
      }),
      (t.deactivateAsNavFor = function () {
        this.removeNavSelectedElements();
      }),
      (t.destroyAsNavFor = function () {
        this.navCompanion &&
          (this.navCompanion.off("select", this.onNavCompanionSelect),
          this.off("staticClick", this.onNavStaticClick),
          delete this.navCompanion);
      }),
      n
    );
  }),
  (function (e, i) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "imagesloaded/imagesloaded",
          ["ev-emitter/ev-emitter"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.imagesLoaded = i(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    var o = e.jQuery,
      r = e.console;
    function a(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    var l = Array.prototype.slice;
    function h(t, e, i) {
      if (!(this instanceof h)) return new h(t, e, i);
      var n,
        s = t;
      ("string" == typeof t && (s = document.querySelectorAll(t)), s)
        ? ((this.elements =
            ((n = s),
            Array.isArray(n)
              ? n
              : "object" == typeof n && "number" == typeof n.length
              ? l.call(n)
              : [n])),
          (this.options = a({}, this.options)),
          "function" == typeof e ? (i = e) : a(this.options, e),
          i && this.on("always", i),
          this.getImages(),
          o && (this.jqDeferred = new o.Deferred()),
          setTimeout(this.check.bind(this)))
        : r.error("Bad element for imagesLoaded " + (s || t));
    }
    ((h.prototype = Object.create(t.prototype)).options = {}),
      (h.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (h.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var s = i[n];
            this.addImage(s);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var r = o[n];
              this.addElementBackgroundImages(r);
            }
          }
        }
      });
    var c = { 1: !0, 9: !0, 11: !0 };
    function i(t) {
      this.img = t;
    }
    function n(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (h.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var s = n && n[2];
            s && this.addBackground(s, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (h.prototype.addImage = function (t) {
        var e = new i(t);
        this.images.push(e);
      }),
      (h.prototype.addBackground = function (t, e) {
        var i = new n(t, e);
        this.images.push(i);
      }),
      (h.prototype.check = function () {
        var n = this;
        function e(t, e, i) {
          setTimeout(function () {
            n.progress(t, e, i);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (h.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && r && r.log("progress: " + i, t, e);
      }),
      (h.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      ((i.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (i.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (i.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((n.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (n.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (h.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((o = t).fn.imagesLoaded = function (t, e) {
            return new h(this, t, e).jqDeferred.promise(o(this));
          });
      }),
      h.makeJQueryPlugin(),
      h
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          ["flickity/js/index", "imagesloaded/imagesloaded"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(i, require("flickity"), require("imagesloaded")))
      : (i.Flickity = n(i, i.Flickity, i.imagesLoaded));
  })(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return (
      (n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded);
      }),
      (n.imagesLoaded = function () {
        if (this.options.imagesLoaded) {
          var n = this;
          i(this.slider).on("progress", function (t, e) {
            var i = n.getParentCell(e.img);
            n.cellSizeChange(i && i.element),
              n.options.freeScroll || n.positionSliderAtSelected();
          });
        }
      }),
      e
    );
  });

/*!
 * Fresco - A Beautiful Responsive Lightbox - v2.2.4
 * (c) 2012-2018 Nick Stakenburg
 *
 * http://www.frescojs.com
 *
 * License: http://www.frescojs.com/license
 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], b)
    : "object" == typeof module && module.exports
    ? (module.exports = b(require("jquery")))
    : (a.Fresco = b(jQuery));
})(this, function ($) {
  function baseToString(a) {
    return "string" == typeof a ? a : null == a ? "" : a + "";
  }
  function Timers() {
    return this.initialize.apply(this, _slice.call(arguments));
  }
  function getURIData(a) {
    var b = { type: "image" };
    return (
      $.each(Types, function (c, d) {
        var e = d.data(a);
        e && ((b = e), (b.type = c), (b.url = a));
      }),
      b
    );
  }
  function detectExtension(a) {
    var b = (a || "").replace(/\?.*/g, "").match(/\.([^.]{3,4})$/);
    return b ? b[1].toLowerCase() : null;
  }
  function View() {
    this.initialize.apply(this, _slice.call(arguments));
  }
  function Thumbnail() {
    this.initialize.apply(this, _slice.call(arguments));
  }
  var Fresco = {};
  $.extend(Fresco, { version: "2.2.4" }), (Fresco.Skins = { fresco: {} });
  var Bounds = {
      viewport: function () {
        var a = { width: $(window).width() };
        if (Browser.MobileSafari || (Browser.Android && Browser.Gecko)) {
          var b = document.documentElement.clientWidth / window.innerWidth;
          a.height = window.innerHeight * b;
        } else a.height = $(window).height();
        return a;
      },
    },
    Browser = (function (a) {
      function b(b) {
        var c = new RegExp(b + "([\\d.]+)").exec(a);
        return c ? parseFloat(c[1]) : !0;
      }
      return {
        IE: !(!window.attachEvent || -1 !== a.indexOf("Opera")) && b("MSIE "),
        Opera:
          a.indexOf("Opera") > -1 &&
          ((!!window.opera && opera.version && parseFloat(opera.version())) ||
            7.55),
        WebKit: a.indexOf("AppleWebKit/") > -1 && b("AppleWebKit/"),
        Gecko: a.indexOf("Gecko") > -1 && -1 === a.indexOf("KHTML") && b("rv:"),
        MobileSafari: !!a.match(/Apple.*Mobile.*Safari/),
        Chrome: a.indexOf("Chrome") > -1 && b("Chrome/"),
        ChromeMobile: a.indexOf("CrMo") > -1 && b("CrMo/"),
        Android: a.indexOf("Android") > -1 && b("Android "),
        IEMobile: a.indexOf("IEMobile") > -1 && b("IEMobile/"),
      };
    })(navigator.userAgent),
    _slice = Array.prototype.slice,
    _ = {
      isElement: function (a) {
        return a && 1 == a.nodeType;
      },
      String: {
        capitalize: function (a) {
          return (
            (a = baseToString(a)), a && a.charAt(0).toUpperCase() + a.slice(1)
          );
        },
      },
    };
  !(function () {
    function a(a) {
      var b;
      if (
        (a.originalEvent.wheelDelta
          ? (b = a.originalEvent.wheelDelta / 120)
          : a.originalEvent.detail && (b = -a.originalEvent.detail / 3),
        b)
      ) {
        var c = $.Event("fresco:mousewheel");
        $(a.target).trigger(c, b),
          c.isPropagationStopped() && a.stopPropagation(),
          c.isDefaultPrevented() && a.preventDefault();
      }
    }
    $(document.documentElement).on("mousewheel DOMMouseScroll", a);
  })();
  var Fit = {
    within: function (a, b) {
      for (
        var c = $.extend({ height: !0, width: !0 }, arguments[2] || {}),
          d = $.extend({}, b),
          e = 1,
          f = 5,
          g = { width: c.width, height: c.height };
        f > 0 &&
        ((g.width && d.width > a.width) || (g.height && d.height > a.height));

      ) {
        var h = 1,
          i = 1;
        g.width && d.width > a.width && (h = a.width / d.width),
          g.height && d.height > a.height && (i = a.height / d.height);
        var e = Math.min(h, i);
        (d = { width: b.width * e, height: b.height * e }), f--;
      }
      return (
        (d.width = Math.max(d.width, 0)), (d.height = Math.max(d.height, 0)), d
      );
    },
  };
  $.extend($.easing, {
    frescoEaseInCubic: function (a, b, c, d, e) {
      return d * (b /= e) * b * b + c;
    },
    frescoEaseInSine: function (a, b, c, d, e) {
      return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
    },
    frescoEaseOutSine: function (a, b, c, d, e) {
      return d * Math.sin((b / e) * (Math.PI / 2)) + c;
    },
  });
  var Support = (function () {
    function a(a) {
      return c(a, "prefix");
    }
    function b(a, b) {
      for (var c in a)
        if (void 0 !== d.style[a[c]]) return "prefix" == b ? a[c] : !0;
      return !1;
    }
    function c(a, c) {
      var d = a.charAt(0).toUpperCase() + a.substr(1),
        f = (a + " " + e.join(d + " ") + d).split(" ");
      return b(f, c);
    }
    var d = document.createElement("div"),
      e = "Webkit Moz O ms Khtml".split(" ");
    return {
      canvas: (function () {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"));
      })(),
      css: {
        animation: c("animation"),
        transform: c("transform"),
        prefixed: a,
      },
      svg:
        !!document.createElementNS &&
        !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
          .createSVGRect,
      touch: (function () {
        try {
          return !!(
            "ontouchstart" in window ||
            (window.DocumentTouch && document instanceof DocumentTouch)
          );
        } catch (a) {
          return !1;
        }
      })(),
    };
  })();
  (Support.detectMobileTouch = function () {
    Support.mobileTouch =
      Support.touch &&
      (Browser.MobileSafari ||
        Browser.Android ||
        Browser.IEMobile ||
        Browser.ChromeMobile ||
        !/^(Win|Mac|Linux)/.test(navigator.platform));
  }),
    Support.detectMobileTouch();
  var ImageReady = function () {
    return this.initialize.apply(this, Array.prototype.slice.call(arguments));
  };
  $.extend(ImageReady.prototype, {
    supports: {
      naturalWidth: (function () {
        return "naturalWidth" in new Image();
      })(),
    },
    initialize: function (a, b, c) {
      return (
        (this.img = $(a)[0]),
        (this.successCallback = b),
        (this.errorCallback = c),
        (this.isLoaded = !1),
        (this.options = $.extend(
          { method: "naturalWidth", pollFallbackAfter: 1e3 },
          arguments[3] || {}
        )),
        this.supports.naturalWidth && "onload" != this.options.method
          ? this.img.complete && "undefined" != $.type(this.img.naturalWidth)
            ? void setTimeout(
                $.proxy(function () {
                  this.img.naturalWidth > 0 ? this.success() : this.error();
                }, this)
              )
            : ($(this.img).bind(
                "error",
                $.proxy(function () {
                  setTimeout(
                    $.proxy(function () {
                      this.error();
                    }, this)
                  );
                }, this)
              ),
              (this.intervals = [
                [1e3, 10],
                [2e3, 50],
                [4e3, 100],
                [2e4, 500],
              ]),
              (this._ipos = 0),
              (this._time = 0),
              (this._delay = this.intervals[this._ipos][1]),
              void this.poll())
          : void setTimeout($.proxy(this.fallback, this))
      );
    },
    poll: function () {
      this._polling = setTimeout(
        $.proxy(function () {
          if (this.img.naturalWidth > 0) return void this.success();
          if (
            ((this._time += this._delay),
            this.options.pollFallbackAfter &&
              this._time >= this.options.pollFallbackAfter &&
              !this._usedPollFallback &&
              ((this._usedPollFallback = !0), this.fallback()),
            this._time > this.intervals[this._ipos][0])
          ) {
            if (!this.intervals[this._ipos + 1]) return void this.error();
            this._ipos++, (this._delay = this.intervals[this._ipos][1]);
          }
          this.poll();
        }, this),
        this._delay
      );
    },
    fallback: function () {
      var a = new Image();
      (this._fallbackImg = a),
        (a.onload = $.proxy(function () {
          (a.onload = function () {}),
            this.supports.naturalWidth ||
              ((this.img.naturalWidth = a.width),
              (this.img.naturalHeight = a.height)),
            this.success();
        }, this)),
        (a.onerror = $.proxy(this.error, this)),
        (a.src = this.img.src);
    },
    abort: function () {
      this._fallbackImg && (this._fallbackImg.onload = function () {}),
        this._polling && (clearTimeout(this._polling), (this._polling = null));
    },
    success: function () {
      this._calledSuccess ||
        ((this._calledSuccess = !0),
        (this.isLoaded = !0),
        this.successCallback(this));
    },
    error: function () {
      this._calledError ||
        ((this._calledError = !0),
        this.abort(),
        this.errorCallback && this.errorCallback(this));
    },
  }),
    $.extend(Timers.prototype, {
      initialize: function () {
        this._timers = {};
      },
      set: function (a, b, c) {
        this._timers[a] = setTimeout(b, c);
      },
      get: function (a) {
        return this._timers[a];
      },
      clear: function (a) {
        a
          ? this._timers[a] &&
            (clearTimeout(this._timers[a]), delete this._timers[a])
          : this.clearAll();
      },
      clearAll: function () {
        $.each(this._timers, function (a, b) {
          clearTimeout(b);
        }),
          (this._timers = {});
      },
    });
  var Type = {
      isVideo: function (a) {
        return /^(youtube|vimeo)$/.test(a);
      },
    },
    Types = {
      image: {
        extensions: "bmp gif jpeg jpg png webp",
        detect: function (a) {
          return $.inArray(detectExtension(a), this.extensions.split(" ")) > -1;
        },
        data: function (a) {
          return this.detect() ? { extension: detectExtension(a) } : !1;
        },
      },
      vimeo: {
        detect: function (a) {
          var b = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(a);
          return b && b[2] ? b[2] : !1;
        },
        data: function (a) {
          var b = this.detect(a);
          return b ? { id: b } : !1;
        },
      },
      youtube: {
        detect: function (a) {
          var b =
            /(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(
              a
            );
          return b && b[2]
            ? b[2]
            : ((b =
                /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(
                  a
                )),
              b && b[3] ? b[3] : !1);
        },
        data: function (a) {
          var b = this.detect(a);
          return b ? { id: b } : !1;
        },
      },
    },
    VimeoThumbnail = (function () {
      var a = function () {
        return this.initialize.apply(this, _slice.call(arguments));
      };
      $.extend(a.prototype, {
        initialize: function (a, b, c) {
          (this.url = a),
            (this.successCallback = b),
            (this.errorCallback = c),
            this.load();
        },
        load: function () {
          var a = b.get(this.url);
          if (a) return this.successCallback(a.data.url);
          var c =
              "http" +
              (window.location && "https:" == window.location.protocol
                ? "s"
                : "") +
              ":",
            d = getURIData(this.url).id;
          this._xhr = $.getJSON(
            c +
              "//vimeo.com/api/oembed.json?url=" +
              c +
              "//vimeo.com/" +
              d +
              "&callback=?",
            $.proxy(function (a) {
              if (a && a.thumbnail_url) {
                var a = { url: a.thumbnail_url };
                b.set(this.url, a), this.successCallback(a.url);
              } else this.errorCallback();
            }, this)
          );
        },
        abort: function () {
          this._xhr && (this._xhr.abort(), (this._xhr = null));
        },
      });
      var b = {
        cache: [],
        get: function (a) {
          for (var b = null, c = 0; c < this.cache.length; c++)
            this.cache[c] && this.cache[c].url == a && (b = this.cache[c]);
          return b;
        },
        set: function (a, b) {
          this.remove(a), this.cache.push({ url: a, data: b });
        },
        remove: function (a) {
          for (var b = 0; b < this.cache.length; b++)
            this.cache[b] && this.cache[b].url == a && delete this.cache[b];
        },
      };
      return a;
    })(),
    VimeoReady = (function () {
      var a = function () {
        return this.initialize.apply(this, _slice.call(arguments));
      };
      $.extend(a.prototype, {
        initialize: function (a, b) {
          (this.url = a), (this.callback = b), this.load();
        },
        load: function () {
          var a = b.get(this.url);
          if (a) return this.callback(a.data);
          var c =
              "http" +
              (window.location && "https:" == window.location.protocol
                ? "s"
                : "") +
              ":",
            d = getURIData(this.url).id;
          this._xhr = $.getJSON(
            c +
              "//vimeo.com/api/oembed.json?url=" +
              c +
              "//vimeo.com/" +
              d +
              "&maxwidth=9999999&maxheight=9999999&callback=?",
            $.proxy(function (a) {
              var c = { dimensions: { width: a.width, height: a.height } };
              b.set(this.url, c), this.callback && this.callback(c);
            }, this)
          );
        },
        abort: function () {
          this._xhr && (this._xhr.abort(), (this._xhr = null));
        },
      });
      var b = {
        cache: [],
        get: function (a) {
          for (var b = null, c = 0; c < this.cache.length; c++)
            this.cache[c] && this.cache[c].url == a && (b = this.cache[c]);
          return b;
        },
        set: function (a, b) {
          this.remove(a), this.cache.push({ url: a, data: b });
        },
        remove: function (a) {
          for (var b = 0; b < this.cache.length; b++)
            this.cache[b] && this.cache[b].url == a && delete this.cache[b];
        },
      };
      return a;
    })(),
    Options = {
      defaults: {
        effects: {
          content: { show: 0, hide: 0 },
          spinner: { show: 150, hide: 150 },
          window: { show: 440, hide: 300 },
          thumbnail: { show: 300, delay: 150 },
          thumbnails: { slide: 0 },
        },
        keyboard: { left: !0, right: !0, esc: !0 },
        loadedMethod: "naturalWidth",
        loop: !1,
        onClick: "previous-next",
        overflow: !1,
        overlay: { close: !0 },
        preload: [1, 2],
        position: !0,
        skin: "fresco",
        spinner: !0,
        spinnerDelay: 300,
        sync: !0,
        thumbnails: "horizontal",
        ui: "outside",
        uiDelay: 3e3,
        vimeo: {
          autoplay: 1,
          api: 1,
          title: 1,
          byline: 1,
          portrait: 0,
          loop: 0,
        },
        youtube: {
          autoplay: 1,
          controls: 1,
          enablejsapi: 1,
          hd: 1,
          iv_load_policy: 3,
          loop: 0,
          modestbranding: 1,
          rel: 0,
          vq: "hd1080",
        },
        initialTypeOptions: {
          image: {},
          vimeo: { width: 1280 },
          youtube: { width: 1280, height: 720 },
        },
      },
      create: function (a, b, c) {
        (a = a || {}), (c = c || {}), (a.skin = a.skin || this.defaults.skin);
        var d = a.skin
            ? $.extend(
                {},
                Fresco.Skins[a.skin] || Fresco.Skins[this.defaults.skin]
              )
            : {},
          e = $.extend(!0, {}, this.defaults, d);
        e.initialTypeOptions &&
          (b &&
            e.initialTypeOptions[b] &&
            (e = $.extend(!0, {}, e.initialTypeOptions[b], e)),
          delete e.initialTypeOptions);
        var f = $.extend(!0, {}, e, a);
        if (
          (Support.mobileTouch && "inside" == f.ui && (f.ui = "outside"),
          (!f.effects || (Browser.IE && Browser.IE < 9)) &&
            ((f.effects = {}),
            $.each(this.defaults.effects, function (a, b) {
              $.each((f.effects[a] = $.extend({}, b)), function (b) {
                f.effects[a][b] = 0;
              });
            }),
            (f.spinner = !1)),
          f.keyboard &&
            ("boolean" == $.type(f.keyboard) &&
              ((f.keyboard = {}),
              $.each(this.defaults.keyboard, function (a, b) {
                f.keyboard[a] = !0;
              })),
            ("vimeo" == b || "youtube" == b) &&
              $.extend(f.keyboard, { left: !1, right: !1 })),
          !f.overflow || Support.mobileTouch
            ? (f.overflow = { x: !1, y: !1 })
            : "boolean" == $.type(f.overflow) &&
              (f.overflow = { x: !1, y: !0 }),
          ("vimeo" == b || "youtube" == b) && (f.overlap = !1),
          ((Browser.IE && Browser.IE < 9) || Support.mobileTouch) &&
            ((f.thumbnail = !1), (f.thumbnails = !1)),
          "youtube" != b &&
            (f.width && !f.maxWidth && (f.maxWidth = f.width),
            f.height && !f.maxHeight && (f.maxHeight = f.height)),
          !f.thumbnail && "boolean" != $.type(f.thumbnail))
        ) {
          var g = !1;
          switch (b) {
            case "youtube":
              var h =
                "http" +
                (window.location && "https:" == window.location.protocol
                  ? "s"
                  : "") +
                ":";
              g = h + "//img.youtube.com/vi/" + c.id + "/0.jpg";
              break;
            case "image":
            case "vimeo":
              g = !0;
          }
          f.thumbnail = g;
        }
        return f;
      },
    },
    Overlay = {
      initialize: function () {
        this.build(), (this.visible = !1);
      },
      build: function () {
        (this.element = $("<div>")
          .addClass("fr-overlay")
          .hide()
          .append($("<div>").addClass("fr-overlay-background"))),
          this.element.on(
            "click",
            $.proxy(function () {
              var a = Pages.page;
              (a &&
                a.view &&
                a.view.options.overlay &&
                !a.view.options.overlay.close) ||
                Window.hide();
            }, this)
          ),
          Support.mobileTouch && this.element.addClass("fr-mobile-touch"),
          this.element.on("fresco:mousewheel", function (a) {
            a.preventDefault();
          });
      },
      setSkin: function (a) {
        this.skin && this.element.removeClass("fr-overlay-skin-" + this.skin),
          this.element.addClass("fr-overlay-skin-" + a),
          (this.skin = a);
      },
      attach: function () {
        $(document.body).append(this.element);
      },
      detach: function () {
        this.element.detach();
      },
      show: function (a, b) {
        if (this.visible) return void (a && a());
        (this.visible = !0), this.attach(), this.max();
        var c =
            (Pages.page && Pages.page.view.options.effects.window.show) || 0,
          d = ("number" == $.type(b) ? b : c) || 0;
        this.element.stop(!0).fadeTo(d, 1, a);
      },
      hide: function (a, b) {
        if (!this.visible) return void (a && a());
        var c =
            (Pages.page && Pages.page.view.options.effects.window.hide) || 0,
          d = ("number" == $.type(b) ? b : c) || 0;
        this.element.stop(!0).fadeOut(
          d || 0,
          $.proxy(function () {
            this.detach(), (this.visible = !1), a && a();
          }, this)
        );
      },
      getScrollDimensions: function () {
        var a = {};
        return (
          $.each(["width", "height"], function (b, c) {
            var d = c.substr(0, 1).toUpperCase() + c.substr(1),
              e = document.documentElement;
            a[c] =
              (Browser.IE
                ? Math.max(e["offset" + d], e["scroll" + d])
                : Browser.WebKit
                ? document.body["scroll" + d]
                : e["scroll" + d]) || 0;
          }),
          a
        );
      },
      max: function () {
        var a;
        if (
          (Browser.MobileSafari &&
            Browser.WebKit &&
            Browser.WebKit < 533.18 &&
            ((a = this.getScrollDimensions()), this.element.css(a)),
          Browser.IE && Browser.IE < 9)
        ) {
          var b = Bounds.viewport();
          this.element.css({ height: b.height, width: b.width });
        }
        Support.mobileTouch &&
          !a &&
          this.element.css({ height: this.getScrollDimensions().height });
      },
    },
    Window = {
      initialize: function () {
        (this.queues = []),
          (this.queues.hide = $({})),
          (this.pages = []),
          (this._tracking = []),
          (this._first = !0),
          (this.timers = new Timers()),
          this.build(),
          this.setSkin(Options.defaults.skin);
      },
      build: function () {
        if (
          ((this.element = $("<div>")
            .addClass("fr-window fr-measured")
            .hide()
            .append(
              (this._box = $("<div>")
                .addClass("fr-box")
                .append((this._pages = $("<div>").addClass("fr-pages"))))
            )
            .append((this._thumbnails = $("<div>").addClass("fr-thumbnails")))),
          Overlay.initialize(),
          Pages.initialize(this._pages),
          Thumbnails.initialize(this._thumbnails),
          Spinner.initialize(),
          UI.initialize(),
          this.element.addClass(
            "fr" + (Support.mobileTouch ? "" : "-no") + "-mobile-touch"
          ),
          this.element.addClass("fr" + (Support.svg ? "" : "-no") + "-svg"),
          Browser.IE)
        )
          for (var a = 7; 9 >= a; a++)
            Browser.IE < a && this.element.addClass("fr-ltIE" + a);
        this.element.on("fresco:mousewheel", function (a) {
          a.preventDefault();
        });
      },
      attach: function () {
        this._attached ||
          ($(document.body).append(this.element), (this._attached = !0));
      },
      detach: function () {
        this._attached && (this.element.detach(), (this._attached = !1));
      },
      setSkin: function (a) {
        this._skin && this.element.removeClass("fr-window-skin-" + this._skin),
          this.element.addClass("fr-window-skin-" + a),
          Overlay.setSkin(a),
          (this._skin = a);
      },
      setShowingType: function (a) {
        this._showingType != a &&
          (this._showingType &&
            (this.element.removeClass("fr-showing-type-" + this._showingType),
            Type.isVideo(this._showingType) &&
              this.element.removeClass("fr-showing-type-video")),
          this.element.addClass("fr-showing-type-" + a),
          Type.isVideo(a) && this.element.addClass("fr-showing-type-video"),
          (this._showingType = a));
      },
      startObservingResize: function () {
        this._onWindowResizeHandler ||
          $(window).on(
            "resize orientationchange",
            (this._onWindowResizeHandler = $.proxy(this._onWindowResize, this))
          );
      },
      stopObservingResize: function () {
        this._onWindowResizeHandler &&
          ($(window).off(
            "resize orientationchange",
            this._onWindowResizeHandler
          ),
          (this._onWindowResizeHandler = null));
      },
      _onScroll: function () {
        Support.mobileTouch &&
          this.timers.set("scroll", $.proxy(this.adjustToScroll, this), 0);
      },
      _onWindowResize: function () {
        var a;
        (a = Pages.page) &&
          (Thumbnails.fitToViewport(),
          this.updateBoxDimensions(),
          a.fitToBox(),
          UI.update(),
          UI.adjustPrevNext(null, 0),
          Spinner.center(),
          Overlay.max(),
          UI._onWindowResize(),
          this._onScroll());
      },
      adjustToScroll: function () {
        Support.mobileTouch && this.element.css({ top: $(window).scrollTop() });
      },
      getBoxDimensions: function () {
        return this._boxDimensions;
      },
      updateBoxDimensions: function () {
        var a;
        if ((a = Pages.page)) {
          var b = Bounds.viewport(),
            c = Thumbnails.getDimensions(),
            d = "horizontal" == Thumbnails._orientation;
          (this._boxDimensions = {
            width: d ? b.width : b.width - c.width,
            height: d ? b.height - c.height : b.height,
          }),
            (this._boxPosition = { top: 0, left: d ? 0 : c.width }),
            this._box.css($.extend({}, this._boxDimensions, this._boxPosition));
        }
      },
      show: function (a, b) {
        if (this.visible) return void (a && a());
        (this.visible = !0),
          (this.opening = !0),
          this.attach(),
          this.timers.clear("show-window"),
          this.timers.clear("hide-overlay"),
          this.adjustToScroll();
        var c =
            ("number" == $.type(b)
              ? b
              : Pages.page && Pages.page.view.options.effects.window.show) || 0,
          d = 2;
        Overlay[
          Pages.page && Pages.page.view.options.overlay ? "show" : "hide"
        ](function () {
          a && --d < 1 && a();
        }, c),
          this.timers.set(
            "show-window",
            $.proxy(function () {
              this._show(
                $.proxy(function () {
                  (this.opening = !1), a && --d < 1 && a();
                }, this),
                c
              );
            }, this),
            c > 1 ? Math.min(0.5 * c, 50) : 1
          );
      },
      _show: function (a, b) {
        var c =
          ("number" == $.type(b)
            ? b
            : Pages.page && Pages.page.view.options.effects.window.show) || 0;
        this.element.stop(!0).fadeTo(c, 1, a);
      },
      hide: function (a) {
        if (this.view) {
          var b = this.queues.hide;
          b.queue([]),
            this.timers.clear("show-window"),
            this.timers.clear("hide-overlay");
          var c = Pages.page ? Pages.page.view.options.effects.window.hide : 0;
          b.queue(
            $.proxy(function (a) {
              Pages.stop(), Spinner.hide(), a();
            }, this)
          ),
            b.queue(
              $.proxy(function (a) {
                UI.disable(), UI.hide(null, c), Keyboard.disable(), a();
              }, this)
            ),
            b.queue(
              $.proxy(function (a) {
                var b = 2;
                this._hide(function () {
                  --b < 1 && a();
                }, c),
                  this.timers.set(
                    "hide-overlay",
                    $.proxy(function () {
                      Overlay.hide(function () {
                        --b < 1 && a();
                      }, c);
                    }, this),
                    c > 1 ? Math.min(0.5 * c, 150) : 1
                  ),
                  (this._first = !0);
              }, this)
            ),
            b.queue(
              $.proxy(function (a) {
                this._reset(),
                  this.stopObservingResize(),
                  Pages.removeAll(),
                  Thumbnails.clear(),
                  this.timers.clear(),
                  (this._position = -1);
                var b = Pages.page && Pages.page.view.options.afterHide;
                "function" == $.type(b) && b.call(Fresco),
                  (this.view = null),
                  (this.opening = !1),
                  (this.closing = !1),
                  this.detach(),
                  a();
              }, this)
            ),
            "function" == $.type(a) &&
              b.queue(
                $.proxy(function (b) {
                  a(), b();
                }, this)
              );
        }
      },
      _hide: function (a, b) {
        var c =
          ("number" == $.type(b)
            ? b
            : Pages.page && Pages.page.view.options.effects.window.hide) || 0;
        this.element.stop(!0).fadeOut(c, a);
      },
      load: function (a, b) {
        (this.views = a),
          this.attach(),
          Thumbnails.load(a),
          Pages.load(a),
          this.startObservingResize(),
          b && this.setPosition(b);
      },
      setPosition: function (a, b) {
        (this._position = a),
          (this.view = this.views[a - 1]),
          this.stopHideQueue(),
          (this.page = Pages.show(
            a,
            $.proxy(function () {
              b && b();
            }, this)
          ));
      },
      stopHideQueue: function () {
        this.queues.hide.queue([]);
      },
      _reset: function () {
        (this.visible = !1), UI.hide(null, 0), UI.reset();
      },
      mayPrevious: function () {
        return (
          (this.view &&
            this.view.options.loop &&
            this.views &&
            this.views.length > 1) ||
          1 != this._position
        );
      },
      previous: function (a) {
        var b = this.mayPrevious();
        (a || b) && this.setPosition(this.getSurroundingIndexes().previous);
      },
      mayNext: function () {
        var a = this.views && this.views.length > 1;
        return (
          (this.view && this.view.options.loop && a) ||
          (a && 1 != this.getSurroundingIndexes().next)
        );
      },
      next: function (a) {
        var b = this.mayNext();
        (a || b) && this.setPosition(this.getSurroundingIndexes().next);
      },
      getSurroundingIndexes: function () {
        if (!this.views) return {};
        var a = this._position,
          b = this.views.length,
          c = 1 >= a ? b : a - 1,
          d = a >= b ? 1 : a + 1;
        return { previous: c, next: d };
      },
    },
    Keyboard = {
      enabled: !1,
      keyCode: { left: 37, right: 39, esc: 27 },
      enable: function (a) {
        this.disable(),
          a &&
            ($(document)
              .on(
                "keydown",
                (this._onKeyDownHandler = $.proxy(this.onKeyDown, this))
              )
              .on(
                "keyup",
                (this._onKeyUpHandler = $.proxy(this.onKeyUp, this))
              ),
            (this.enabled = a));
      },
      disable: function () {
        (this.enabled = !1),
          this._onKeyUpHandler &&
            ($(document)
              .off("keyup", this._onKeyUpHandler)
              .off("keydown", this._onKeyDownHandler),
            (this._onKeyUpHandler = this._onKeyDownHandler = null));
      },
      onKeyDown: function (a) {
        if (this.enabled) {
          var b = this.getKeyByKeyCode(a.keyCode);
          if (b && (!b || !this.enabled || this.enabled[b]))
            switch ((a.preventDefault(), a.stopPropagation(), b)) {
              case "left":
                Window.previous();
                break;
              case "right":
                Window.next();
            }
        }
      },
      onKeyUp: function (a) {
        if (this.enabled) {
          var b = this.getKeyByKeyCode(a.keyCode);
          if (b && (!b || !this.enabled || this.enabled[b]))
            switch (b) {
              case "esc":
                Window.hide();
            }
        }
      },
      getKeyByKeyCode: function (a) {
        for (var b in this.keyCode) if (this.keyCode[b] == a) return b;
        return null;
      },
    },
    Page = (function () {
      function a() {
        return this.initialize.apply(this, _slice.call(arguments));
      }
      var b = 0,
        c = {},
        d = $("<div>")
          .addClass("fr-stroke fr-stroke-top fr-stroke-horizontal")
          .append($("<div>").addClass("fr-stroke-color"))
          .add(
            $("<div>")
              .addClass("fr-stroke fr-stroke-bottom fr-stroke-horizontal")
              .append($("<div>").addClass("fr-stroke-color"))
          )
          .add(
            $("<div>")
              .addClass("fr-stroke fr-stroke-left fr-stroke-vertical")
              .append($("<div>").addClass("fr-stroke-color"))
          )
          .add(
            $("<div>")
              .addClass("fr-stroke fr-stroke-right fr-stroke-vertical")
              .append($("<div>").addClass("fr-stroke-color"))
          );
      return (
        $.extend(a.prototype, {
          initialize: function (a, c, d) {
            (this.view = a),
              (this.dimensions = { width: 0, height: 0 }),
              (this.uid = b++),
              (this._position = c),
              (this._total = d),
              (this._fullClick = !1),
              (this._visible = !1),
              (this.queues = {}),
              (this.queues.showhide = $({}));
          },
          create: function () {
            if (!this._created) {
              Pages.element.append(
                (this.element = $("<div>")
                  .addClass("fr-page")
                  .append(
                    (this.container = $("<div>").addClass("fr-container"))
                  )
                  .css({ opacity: 0 })
                  .hide())
              );
              var a = this.view.options.position && this._total > 1;
              if (
                (a && this.element.addClass("fr-has-position"),
                (this.view.caption || a) &&
                  (this.element.append(
                    (this.info = $("<div>")
                      .addClass("fr-info")
                      .append($("<div>").addClass("fr-info-background"))
                      .append(d.clone(!0))
                      .append(
                        (this.infoPadder =
                          $("<div>").addClass("fr-info-padder"))
                      ))
                  ),
                  a &&
                    (this.element.addClass("fr-has-position"),
                    this.infoPadder.append(
                      (this.pos = $("<div>")
                        .addClass("fr-position")
                        .append(
                          $("<span>")
                            .addClass("fr-position-text")
                            .html(this._position + " / " + this._total)
                        ))
                    )),
                  this.view.caption &&
                    this.infoPadder.append(
                      (this.caption = $("<div>")
                        .addClass("fr-caption")
                        .html(this.view.caption))
                    )),
                this.container
                  .append(
                    (this.background = $("<div>").addClass(
                      "fr-content-background"
                    ))
                  )
                  .append((this.content = $("<div>").addClass("fr-content"))),
                "image" == this.view.type &&
                  (this.content.append(
                    (this.image = $("<img>")
                      .addClass("fr-content-element")
                      .attr({ src: this.view.url }))
                  ),
                  this.content.append(d.clone(!0))),
                a &&
                  "outside" == this.view.options.ui &&
                  this.container.append(
                    (this.positionOutside = $("<div>")
                      .addClass("fr-position-outside")
                      .append($("<div>").addClass("fr-position-background"))
                      .append(
                        $("<span>")
                          .addClass("fr-position-text")
                          .html(this._position + " / " + this._total)
                      ))
                  ),
                "inside" == this.view.options.ui)
              ) {
                this.content
                  .append(
                    (this.previousInside = $("<div>")
                      .addClass("fr-side fr-side-previous fr-toggle-ui")
                      .append(
                        $("<div>")
                          .addClass("fr-side-button")
                          .append(
                            $("<div>").addClass("fr-side-button-background")
                          )
                          .append($("<div>").addClass("fr-side-button-icon"))
                      ))
                  )
                  .append(
                    (this.nextInside = $("<div>")
                      .addClass("fr-side fr-side-next fr-toggle-ui")
                      .append(
                        $("<div>")
                          .addClass("fr-side-button")
                          .append(
                            $("<div>").addClass("fr-side-button-background")
                          )
                          .append($("<div>").addClass("fr-side-button-icon"))
                      ))
                  )
                  .append(
                    (this.closeInside = $("<div>")
                      .addClass("fr-close fr-toggle-ui")
                      .append($("<div>").addClass("fr-close-background"))
                      .append($("<div>").addClass("fr-close-icon")))
                  ),
                  (this.view.caption || (a && this.view.grouped.caption)) &&
                    (this.content.append(
                      (this.infoInside = $("<div>")
                        .addClass("fr-info fr-toggle-ui")
                        .append($("<div>").addClass("fr-info-background"))
                        .append(d.clone(!0))
                        .append(
                          (this.infoPadderInside =
                            $("<div>").addClass("fr-info-padder"))
                        ))
                    ),
                    a &&
                      this.infoPadderInside.append(
                        (this.posInside = $("<div>")
                          .addClass("fr-position")
                          .append(
                            $("<span>")
                              .addClass("fr-position-text")
                              .html(this._position + " / " + this._total)
                          ))
                      ),
                    this.view.caption &&
                      this.infoPadderInside.append(
                        (this.captionInside = $("<div>")
                          .addClass("fr-caption")
                          .html(this.view.caption))
                      )),
                  this.view.caption ||
                    !a ||
                    this.view.grouped.caption ||
                    this.content.append(
                      (this.positionInside = $("<div>")
                        .addClass("fr-position-inside fr-toggle-ui")
                        .append($("<div>").addClass("fr-position-background"))
                        .append(
                          $("<span>")
                            .addClass("fr-position-text")
                            .html(this._position + " / " + this._total)
                        ))
                    );
                var b =
                    (this.view.options.loop && this._total > 1) ||
                    1 != this._position,
                  c =
                    (this.view.options.loop && this._total > 1) ||
                    this._position < this._total;
                this.previousInside[(b ? "remove" : "add") + "Class"](
                  "fr-side-disabled"
                ),
                  this.nextInside[(c ? "remove" : "add") + "Class"](
                    "fr-side-disabled"
                  );
              }
              $.each(
                ["x", "y"],
                $.proxy(function (a, b) {
                  this.view.options.overflow[b] &&
                    this.element.addClass("fr-overflow-" + b);
                }, this)
              ),
                this.element.addClass("fr-type-" + this.view.type),
                Type.isVideo(this.view.type) &&
                  this.element.addClass("fr-type-video"),
                this._total < 2 && this.element.addClass("fr-no-sides"),
                (this._created = !0);
            }
          },
          _getSurroundingPages: function () {
            var a;
            if (!(a = this.view.options.preload)) return [];
            for (
              var b = [],
                c = Math.max(1, this._position - a[0]),
                d = Math.min(this._position + a[1], this._total),
                e = this._position,
                f = e;
              d >= f;
              f++
            ) {
              var g = Pages.pages[f - 1];
              g._position != e && b.push(g);
            }
            for (var f = e; f >= c; f--) {
              var g = Pages.pages[f - 1];
              g._position != e && b.push(g);
            }
            return b;
          },
          preloadSurroundingImages: function () {
            var a = this._getSurroundingPages();
            $.each(
              a,
              $.proxy(function (a, b) {
                b.preload();
              }, this)
            );
          },
          preload: function () {
            this.preloading ||
              this.preloaded ||
              "image" != this.view.type ||
              !this.view.options.preload ||
              this.loaded ||
              (this.create(),
              (this.preloading = !0),
              (this.preloadReady = new ImageReady(
                this.image[0],
                $.proxy(function (a) {
                  (this.loaded = !0),
                    (c[this.view.url] = !0),
                    (this.preloading = !1),
                    (this.preloaded = !0),
                    (this.dimensions = {
                      width: a.img.naturalWidth,
                      height: a.img.naturalHeight,
                    });
                }, this),
                null,
                { method: "naturalWidth" }
              )));
          },
          load: function (a, b) {
            if ((this.create(), this.loaded)) return void (a && a());
            switch (
              (this.abort(),
              (this.loading = !0),
              this.view.options.spinner &&
                (this._spinnerDelay = setTimeout(
                  $.proxy(function () {
                    Spinner.show();
                  }, this),
                  this.view.options.spinnerDelay || 0
                )),
              this.view.type)
            ) {
              case "image":
                if (this.error) return void (a && a());
                this.imageReady = new ImageReady(
                  this.image[0],
                  $.proxy(function (b) {
                    this._markAsLoaded(),
                      this.setDimensions({
                        width: b.img.naturalWidth,
                        height: b.img.naturalHeight,
                      }),
                      a && a();
                  }, this),
                  $.proxy(function () {
                    this._markAsLoaded(),
                      this.image.hide(),
                      this.content.prepend(
                        (this.error = $("<div>")
                          .addClass("fr-error fr-content-element")
                          .append($("<div>").addClass("fr-error-icon")))
                      ),
                      this.element.addClass("fr-has-error"),
                      this.setDimensions({
                        width: this.error.outerWidth(),
                        height: this.error.outerHeight(),
                      }),
                      this.error.css({ width: "100%", height: "100%" }),
                      a && a();
                  }, this),
                  { method: this.view.options.loadedMethod }
                );
                break;
              case "vimeo":
                this.vimeoReady = new VimeoReady(
                  this.view.url,
                  $.proxy(function (b) {
                    this._markAsLoaded(),
                      this.setDimensions({
                        width: b.dimensions.width,
                        height: b.dimensions.height,
                      }),
                      a && a();
                  }, this)
                );
                break;
              case "youtube":
                this._markAsLoaded(),
                  this.setDimensions({
                    width: this.view.options.width,
                    height: this.view.options.height,
                  }),
                  a && a();
            }
          },
          setDimensions: function (a) {
            if (
              ((this.dimensions = a),
              this.view.options.maxWidth || this.view.options.maxHeight)
            ) {
              var b = this.view.options,
                c = {
                  width: b.maxWidth ? b.maxWidth : this.dimensions.width,
                  height: b.maxHeight ? b.maxHeight : this.dimensions.height,
                };
              this.dimensions = Fit.within(c, this.dimensions);
            }
          },
          _markAsLoaded: function () {
            this._abortSpinnerDelay(),
              (this.loading = !1),
              (this.loaded = !0),
              (c[this.view.url] = !0),
              Spinner.hide(null, null, this._position);
          },
          isVideo: function () {
            return Type.isVideo(this.view.type);
          },
          insertVideo: function (a) {
            if (this.playerIframe || !this.isVideo()) return void (a && a());
            var b =
                "http" +
                (window.location && "https:" == window.location.protocol
                  ? "s"
                  : "") +
                ":",
              c = $.extend({}, this.view.options[this.view.type] || {}),
              d = $.param(c),
              e = {
                vimeo: b + "//player.vimeo.com/video/{id}?{queryString}",
                youtube: b + "//www.youtube.com/embed/{id}?{queryString}",
              },
              f = e[this.view.type]
                .replace("{id}", this.view._data.id)
                .replace("{queryString}", d);
            this.content.prepend(
              (this.playerIframe = $(
                "<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>"
              )
                .addClass("fr-content-element")
                .attr({
                  src: f,
                  height: this._contentDimensions.height,
                  width: this._contentDimensions.width,
                  frameborder: 0,
                }))
            ),
              a && a();
          },
          raise: function () {
            var a = Pages.element[0].lastChild;
            (a && a == this.element[0]) || Pages.element.append(this.element);
          },
          show: function (a) {
            var b = this.queues.showhide;
            b.queue([]),
              b.queue(
                $.proxy(function (a) {
                  var b = this.view.options.spinner && !c[this.view.url];
                  Spinner._visible && !b && Spinner.hide(),
                    Pages.stopInactive(),
                    a();
                }, this)
              ),
              b.queue(
                $.proxy(function (a) {
                  this.updateUI(), UI.set(this._ui), a();
                }, this)
              ),
              b.queue(
                $.proxy(function (a) {
                  Keyboard.enable(this.view.options.keyboard), a();
                }, this)
              ),
              b.queue(
                $.proxy(function (a) {
                  Spinner.setSkin(this.view.options.skin),
                    this.load(
                      $.proxy(function () {
                        this.preloadSurroundingImages(), a();
                      }, this)
                    );
                }, this)
              ),
              b.queue(
                $.proxy(function (a) {
                  this.raise(),
                    Window.setSkin(this.view.options.skin),
                    UI.enable(),
                    this.fitToBox(),
                    Window.adjustToScroll(),
                    a();
                }, this)
              ),
              this.isVideo() &&
                b.queue(
                  $.proxy(function (a) {
                    this.insertVideo(
                      $.proxy(function () {
                        a();
                      })
                    );
                  }, this)
                ),
              this.view.options.sync ||
                b.queue(
                  $.proxy(function (a) {
                    Pages.hideInactive(a);
                  }, this)
                ),
              b.queue(
                $.proxy(function (a) {
                  var b = 3,
                    c = this.view.options.effects.content.show;
                  Window.setShowingType(this.view.type),
                    Window.visible ||
                      ((c = this.view.options.effects.window.show),
                      "function" == $.type(this.view.options.onShow) &&
                        this.view.options.onShow.call(Fresco)),
                    this.view.options.sync &&
                      (b++,
                      Pages.hideInactive(function () {
                        --b < 1 && a();
                      })),
                    Window.show(function () {
                      --b < 1 && a();
                    }, this.view.options.effects.window.show),
                    this._show(function () {
                      --b < 1 && a();
                    }, c),
                    UI.adjustPrevNext(
                      function () {
                        --b < 1 && a();
                      },
                      Window._first ? 0 : c
                    ),
                    Window._first
                      ? (UI.show(null, 0), (Window._first = !1))
                      : UI.show(null, 0);
                  var d = this.view.options.afterPosition;
                  "function" == $.type(d) && d.call(Fresco, this._position);
                }, this)
              ),
              b.queue(
                $.proxy(function (b) {
                  (this._visible = !0), a && a(), b();
                }, this)
              );
          },
          _show: function (a, b) {
            var c = Window.visible
              ? "number" == $.type(b)
                ? b
                : this.view.options.effects.content.show
              : 0;
            this.element
              .stop(!0)
              .show()
              .fadeTo(c || 0, 1, a);
          },
          hide: function (a, b) {
            if (!this.element) return void (a && a());
            this.removeVideo(), this.abort();
            var c =
              "number" == $.type(b)
                ? b
                : this.view.options.effects.content.hide;
            this.isVideo() && (c = 0),
              this.element.stop(!0).fadeTo(
                c,
                0,
                "frescoEaseInCubic",
                $.proxy(function () {
                  this.element.hide(),
                    (this._visible = !1),
                    Pages.removeTracking(this._position),
                    a && a();
                }, this)
              );
          },
          stop: function () {
            var a = this.queues.showhide;
            a.queue([]), this.element && this.element.stop(!0), this.abort();
          },
          removeVideo: function () {
            this.playerIframe &&
              ((this.playerIframe[0].src = "//about:blank"),
              this.playerIframe.remove(),
              (this.playerIframe = null));
          },
          remove: function () {
            this.stop(),
              this.removeVideo(),
              this.element && this.element.remove(),
              this._track &&
                (Pages.removeTracking(this._position), (this._track = !1)),
              this.preloadReady &&
                (this.preloadReady.abort(),
                (this.preloadReady = null),
                (this.preloading = null),
                (this.preloaded = null)),
              (this._visible = !1),
              (this.removed = !0);
          },
          abort: function () {
            this.imageReady &&
              (this.imageReady.abort(), (this.imageReady = null)),
              this.vimeoReady &&
                (this.vimeoReady.abort(), (this.vimeoReady = null)),
              this._abortSpinnerDelay(),
              (this.loading = !1);
          },
          _abortSpinnerDelay: function () {
            this._spinnerDelay &&
              (clearTimeout(this._spinnerDelay), (this._spinnerDelay = null));
          },
          _getInfoHeight: function (a) {
            var b = this.view.options.position && this._total > 1;
            switch (this._ui) {
              case "fullclick":
              case "inside":
                if (!this.view.caption && !b) return 0;
                break;
              case "outside":
                if (!this.view.caption) return 0;
            }
            var c = "inside" == this._ui ? this.infoInside : this.info;
            "outside" == this._ui &&
              (a = Math.min(a, Window._boxDimensions.width));
            var d,
              e = c[0].style.width;
            return (
              ("inside" == this._ui || "fullclick" == this._ui) && (e = "100%"),
              c.css({ width: a + "px" }),
              (d = parseFloat(c.outerHeight())),
              c.css({ width: e }),
              d
            );
          },
          _whileVisible: function (a, b) {
            var c = [],
              d = Window.element.add(this.element);
            b && (d = d.add(b)),
              $.each(d, function (a, b) {
                var d = $(b).is(":visible");
                d || c.push($(b).show());
              });
            var e = this.element.hasClass("fr-no-caption");
            this.element.removeClass("fr-no-caption");
            var f = this.element.hasClass("fr-has-caption");
            this.element.addClass("fr-has-caption"),
              Window.element.css({ visibility: "hidden" }),
              a(),
              Window.element.css({ visibility: "visible" }),
              e && this.element.addClass("fr-no-caption"),
              f || this.element.removeClass("fr-has-caption"),
              $.each(c, function (a, b) {
                b.hide();
              });
          },
          updateForced: function () {
            this.create(),
              (this._fullClick = this.view.options.fullClick),
              (this._noOverflow = !1),
              parseInt(this.element.css("min-width")) > 0 &&
                (this._fullClick = !0),
              parseInt(this.element.css("min-height")) > 0 &&
                (this._noOverflow = !0);
          },
          updateUI: function (a) {
            this.updateForced();
            var a = this._fullClick ? "fullclick" : this.view.options.ui;
            this._ui && this.element.removeClass("fr-ui-" + this._ui),
              this.element.addClass("fr-ui-" + a),
              (this._ui = a);
          },
          fitToBox: function () {
            if (this.content) {
              var a = (this.element, $.extend({}, Window.getBoxDimensions())),
                b = $.extend({}, this.dimensions),
                c = this.container;
              this.updateUI();
              var d = {
                left: parseInt(c.css("padding-left")),
                top: parseInt(c.css("padding-top")),
              };
              if ("outside" == this._ui && this._positionOutside) {
                var e = 0;
                this._whileVisible(
                  $.proxy(function () {
                    this._positionOutside.is(":visible") &&
                      (e = this._positionOutside.outerWidth(!0));
                  }, this)
                ),
                  e > d.left && (d.left = e);
              }
              (a.width -= 2 * d.left), (a.height -= 2 * d.top);
              var f,
                g = {
                  width: !0,
                  height: this._noOverflow ? !0 : !this.view.options.overflow.y,
                },
                h = Fit.within(a, b, g),
                i = $.extend({}, h),
                j = (this.content, 0),
                k = "inside" == this._ui,
                l = k ? this.infoInside : this.info,
                m = k ? this.captionInside : this.caption,
                n = k ? this.posInside : this.pos,
                o = !!m;
              switch (this._ui) {
                case "outside":
                  var p,
                    q = $.extend({}, i);
                  this.caption &&
                    ((p = this.caption),
                    this._whileVisible(
                      $.proxy(function () {
                        for (var b = 0, c = 2; c > b; ) {
                          j = this._getInfoHeight(i.width);
                          var d = a.height - i.height;
                          j > d &&
                            (i = Fit.within(
                              {
                                width: i.width,
                                height: Math.max(i.height - (j - d), 0),
                              },
                              i,
                              g
                            )),
                            b++;
                        }
                        j = this._getInfoHeight(i.width);
                        var e = 0.5;
                        ((!this.view.options.overflow.y &&
                          j + i.height > a.height) ||
                          (l && "none" == l.css("display")) ||
                          (e && j >= e * i.height)) &&
                          ((o = !1), (j = 0), (i = q));
                      }, this),
                      p
                    )),
                    l && l.css({ width: i.width + "px" }),
                    (f = { width: i.width, height: i.height + j });
                  break;
                case "inside":
                  if (this.caption) {
                    var p = m;
                    this._whileVisible(
                      $.proxy(function () {
                        j = this._getInfoHeight(i.width);
                        var a = 0.45;
                        a && j >= a * i.height && ((o = !1), (j = 0));
                      }, this),
                      p
                    );
                  }
                  f = i;
                  break;
                case "fullclick":
                  var r = [];
                  m && r.push(m),
                    this._whileVisible(
                      $.proxy(function () {
                        if (
                          ((m || n) && l.css({ width: "100%" }),
                          (j = this._getInfoHeight(
                            Window._boxDimensions.width
                          )),
                          m && j > 0.5 * a.height)
                        )
                          if (((o = !1), n)) {
                            var b = this.caption.is(":visible");
                            this.caption.hide(),
                              (j = this._getInfoHeight(
                                Window._boxDimensions.width
                              )),
                              b && this.caption.show();
                          } else j = 0;
                        (i = Fit.within(
                          { width: a.width, height: Math.max(0, a.height - j) },
                          i,
                          g
                        )),
                          (f = i);
                      }, this),
                      r
                    ),
                    this.content.css({ "padding-bottom": 0 });
              }
              m && m[o ? "show" : "hide"](),
                this.element[(o ? "remove" : "add") + "Class"]("fr-no-caption"),
                this.element[(o ? "add" : "remove") + "Class"](
                  "fr-has-caption"
                ),
                this.content.css(i),
                this.background.css(f),
                this.playerIframe && this.playerIframe.attr(i),
                (this.overlap = {
                  y:
                    f.height +
                    ("fullclick" == this._ui ? j : 0) -
                    Window._boxDimensions.height,
                  x: 0,
                }),
                (this._track =
                  !this._noOverflow &&
                  this.view.options.overflow.y &&
                  this.overlap.y > 0),
                (this._infoHeight = j),
                (this._padding = d),
                (this._contentDimensions = i),
                (this._backgroundDimensions = f),
                Pages[(this._track ? "set" : "remove") + "Tracking"](
                  this._position
                ),
                this.position();
            }
          },
          position: function () {
            if (this.content) {
              var a = this._contentDimensions,
                b = this._backgroundDimensions,
                c = {
                  top: 0.5 * Window._boxDimensions.height - 0.5 * b.height,
                  left: 0.5 * Window._boxDimensions.width - 0.5 * b.width,
                },
                d = { top: c.top + a.height, left: c.left },
                e = 0,
                f = "inside" == this._ui ? this.infoInside : this.info;
              switch (this._ui) {
                case "fullclick":
                  (c.top =
                    0.5 * (Window._boxDimensions.height - this._infoHeight) -
                    0.5 * b.height),
                    (d = {
                      top: Window._boxDimensions.height - this._infoHeight,
                      left: 0,
                      bottom: "auto",
                    }),
                    (e = this._infoHeight);
                  break;
                case "inside":
                  d = { top: "auto", left: 0, bottom: 0 };
              }
              if (this.overlap.y > 0) {
                var g = Pages.getXYP();
                switch (((c.top = 0 - g.y * this.overlap.y), this._ui)) {
                  case "outside":
                  case "fullclick":
                    d.top = Window._boxDimensions.height - this._infoHeight;
                    break;
                  case "inside":
                    var h = c.top + a.height - Window._boxDimensions.height,
                      i = -1 * c.top;
                    if (
                      ((d.bottom = h),
                      this.closeInside.css({ top: i }),
                      this._total > 1)
                    ) {
                      var j = Window.element.is(":visible");
                      j || Window.element.show();
                      var k = this.previousInside.attr("style");
                      this.previousInside.removeAttr("style");
                      var l = parseInt(this.previousInside.css("margin-top"));
                      this.previousInside.attr({ style: k }),
                        j || Window.element.hide();
                      var m = this.previousInside.add(this.nextInside),
                        n = 0.5 * this.overlap.y;
                      m.css({ "margin-top": l + (i - n) }),
                        this.positionInside &&
                          this.positionInside.css({ bottom: h });
                    }
                }
              } else
                "inside" == this._ui &&
                  this.element
                    .find(".fr-info, .fr-side, .fr-close, .fr-position-inside")
                    .removeAttr("style");
              f && f.css(d),
                this.container.css({ bottom: e }),
                this.content.css(c),
                this.background.css(c);
            }
          },
        }),
        a
      );
    })(),
    Pages = {
      initialize: function (a) {
        (this.element = a),
          (this.pages = []),
          (this.uid = 1),
          (this._tracking = []);
      },
      load: function (a) {
        (this.views = a),
          this.removeAll(),
          $.each(
            a,
            $.proxy(function (a, b) {
              this.pages.push(new Page(b, a + 1, this.views.length));
            }, this)
          );
      },
      show: function (a, b) {
        var c = this.pages[a - 1];
        (this.page && this.page.uid == c.uid) ||
          ((this.page = c),
          Thumbnails.show(a),
          Window.updateBoxDimensions(),
          c.show(
            $.proxy(function () {
              b && b();
            }, this)
          ));
      },
      getPositionInActivePageGroup: function (a) {
        var b = 0;
        return (
          $.each(this.pages, function (c, d) {
            d.view.element && d.view.element == a && (b = c + 1);
          }),
          b
        );
      },
      getLoadingCount: function () {
        var a = 0;
        return (
          $.each(this.pages, function (b, c) {
            c.loading && a++;
          }),
          a
        );
      },
      removeAll: function () {
        $.each(this.pages, function (a, b) {
          b.remove();
        }),
          (this.pages = []);
      },
      hideInactive: function (a, b) {
        var c = [];
        $.each(
          this.pages,
          $.proxy(function (a, b) {
            b.uid != this.page.uid && c.push(b);
          }, this)
        );
        var d = 0 + c.length;
        return (
          1 > d
            ? a && a()
            : $.each(c, function (c, e) {
                e.hide(function () {
                  a && --d < 1 && a();
                }, b);
              }),
          c.length
        );
      },
      stopInactive: function () {
        $.each(
          this.pages,
          $.proxy(function (a, b) {
            b.uid != this.page.uid && b.stop();
          }, this)
        );
      },
      stop: function () {
        $.each(this.pages, function (a, b) {
          b.stop();
        });
      },
      handleTracking: function (a) {
        Browser.IE && Browser.IE < 9
          ? (this.setXY({ x: a.pageX, y: a.pageY }), this.updatePositions())
          : (this._tracking_timer = setTimeout(
              $.proxy(function () {
                this.setXY({ x: a.pageX, y: a.pageY }), this.updatePositions();
              }, this),
              30
            ));
      },
      clearTrackingTimer: function () {
        this._tracking_timer &&
          (clearTimeout(this._tracking_timer), (this._tracking_timer = null));
      },
      startTracking: function () {
        Support.mobileTouch ||
          this._handleTracking ||
          $(document.documentElement).on(
            "mousemove",
            (this._handleTracking = $.proxy(this.handleTracking, this))
          );
      },
      stopTracking: function () {
        !Support.mobileTouch &&
          this._handleTracking &&
          ($(document.documentElement).off("mousemove", this._handleTracking),
          (this._handleTracking = null),
          this.clearTrackingTimer());
      },
      setTracking: function (a) {
        this.isTracking(a) ||
          (this._tracking.push(this.pages[a - 1]),
          1 == this._tracking.length && this.startTracking());
      },
      clearTracking: function () {
        this._tracking = [];
      },
      removeTracking: function (a) {
        (this._tracking = $.grep(this._tracking, function (b) {
          return b._position != a;
        })),
          this._tracking.length < 1 && this.stopTracking();
      },
      isTracking: function (a) {
        var b = !1;
        return (
          $.each(this._tracking, function (c, d) {
            return d._position == a ? ((b = !0), !1) : void 0;
          }),
          b
        );
      },
      setXY: function (a) {
        this._xy = a;
      },
      getXYP: function (a) {
        var b = Pages.page,
          c = $.extend({}, Window._boxDimensions),
          a = $.extend({}, this._xy);
        (a.y -= $(window).scrollTop()),
          b &&
            ("outside" == b._ui || "fullclick" == b._ui) &&
            b._infoHeight > 0 &&
            (c.height -= b._infoHeight),
          (a.y -= Window._boxPosition.top);
        var d = { x: 0, y: Math.min(Math.max(a.y / c.height, 0), 1) },
          e = 20,
          f = { x: "width", y: "height" },
          g = {};
        return (
          $.each(
            "y".split(" "),
            $.proxy(function (a, b) {
              (g[b] = Math.min(Math.max(e / c[f[b]], 0), 1)),
                (d[b] *= 1 + 2 * g[b]),
                (d[b] -= g[b]),
                (d[b] = Math.min(Math.max(d[b], 0), 1));
            }, this)
          ),
          this.setXYP(d),
          this._xyp
        );
      },
      setXYP: function (a) {
        this._xyp = a;
      },
      updatePositions: function () {
        this._tracking.length < 1 ||
          $.each(this._tracking, function (a, b) {
            b.position();
          });
      },
    };
  $.extend(View.prototype, {
    initialize: function (object) {
      var options = arguments[1] || {},
        data = {};
      if ("string" === $.type(object)) object = { url: object };
      else if (object && 1 === object.nodeType) {
        var element = $(object);
        object = {
          element: element[0],
          url: element.attr("href"),
          caption: element.attr("data-fresco-caption"),
          group: element.attr("data-fresco-group"),
          extension: element.attr("data-fresco-extension"),
          type: element.attr("data-fresco-type"),
          options:
            (element.attr("data-fresco-options") &&
              eval("({" + element.attr("data-fresco-options") + "})")) ||
            {},
        };
      }
      if (
        object &&
        (object.extension || (object.extension = detectExtension(object.url)),
        !object.type)
      ) {
        var data = getURIData(object.url);
        (object._data = data), (object.type = data.type);
      }
      return (
        object._data || (object._data = getURIData(object.url)),
        object && object.options
          ? (object.options = $.extend(
              !0,
              $.extend({}, options),
              $.extend({}, object.options)
            ))
          : (object.options = $.extend({}, options)),
        (object.options = Options.create(
          object.options,
          object.type,
          object._data
        )),
        $.extend(this, object),
        this
      );
    },
  });
  var Spinner = {
      supported: Support.css.transform && Support.css.animation,
      initialize: function (a) {
        this.element = $("<div>").addClass("fr-spinner").hide();
        for (var b = 1; 12 >= b; b++)
          this.element.append($("<div>").addClass("fr-spin-" + b));
        this.element.on(
          "click",
          $.proxy(function () {
            Window.hide();
          }, this)
        ),
          this.element.on("fresco:mousewheel", function (a) {
            a.preventDefault();
          });
      },
      setSkin: function (a) {
        this.supported &&
          (this._skin &&
            this.element.removeClass("fr-spinner-skin-" + this._skin),
          this.updateDimensions(),
          this.element.addClass("fr-spinner-skin-" + a),
          (this._skin = a));
      },
      updateDimensions: function () {
        var a = this._attached;
        a || this.attach(),
          (this._dimensions = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          a || this.detach();
      },
      attach: function () {
        this._attached ||
          ($(document.body).append(this.element), (this._attached = !0));
      },
      detach: function () {
        this._attached && (this.element.detach(), (this._attached = !1));
      },
      show: function (a, b) {
        (this._visible = !0), this.attach(), this.center();
        var c =
            (Pages.page && Pages.page.view.options.effects.spinner.show) || 0,
          d = ("number" == $.type(b) ? b : c) || 0;
        this.element.stop(!0).fadeTo(d, 1, a);
      },
      hide: function (a, b, c) {
        this._visible = !1;
        var d =
            (Pages.page && Pages.page.view.options.effects.spinner.hide) || 0,
          e = ("number" == $.type(b) ? b : d) || 0;
        this.element.stop(!0).fadeOut(
          e || 0,
          $.proxy(function () {
            this.detach(), a && a();
          }, this)
        );
      },
      center: function () {
        if (this.supported) {
          this._dimensions || this.updateDimensions();
          var a = Pages.page,
            b = 0;
          a &&
            "fullclick" == a._ui &&
            a._whileVisible(function () {
              b = a._getInfoHeight(Window._boxDimensions.width);
            }),
            this.element.css({
              top:
                Window._boxPosition.top +
                0.5 * Window._boxDimensions.height -
                0.5 * this._dimensions.height -
                0.5 * b,
              left:
                Window._boxPosition.left +
                0.5 * Window._boxDimensions.width -
                0.5 * this._dimensions.width,
            });
        }
      },
    },
    _Fresco = {
      _disabled: !1,
      _fallback: !0,
      initialize: function () {
        Window.initialize(), this._disabled || this.startDelegating();
      },
      startDelegating: function () {
        this._delegateHandler ||
          $(document.documentElement)
            .on(
              "click",
              ".fresco[href]",
              (this._delegateHandler = $.proxy(this.delegate, this))
            )
            .on(
              "click",
              (this._setClickXYHandler = $.proxy(this.setClickXY, this))
            );
      },
      stopDelegating: function () {
        this._delegateHandler &&
          ($(document.documentElement)
            .off("click", ".fresco[href]", this._delegateHandler)
            .off("click", this._setClickXYHandler),
          (this._setClickXYHandler = null),
          (this._delegateHandler = null));
      },
      setClickXY: function (a) {
        Pages.setXY({ x: a.pageX, y: a.pageY });
      },
      delegate: function (a) {
        if (!this._disabled) {
          a.stopPropagation(), a.preventDefault();
          var b = a.currentTarget;
          this.setClickXY(a), _Fresco.show(b);
        }
      },
      show: function (object) {
        if (this._disabled)
          return void this.showFallback.apply(_Fresco, _slice.call(arguments));
        var options = arguments[1] || {},
          position = arguments[2];
        arguments[1] &&
          "number" === $.type(arguments[1]) &&
          ((position = arguments[1]), (options = {}));
        var views = [],
          object_type,
          isElement = _.isElement(object);
        switch ((object_type = $.type(object))) {
          case "string":
          case "object":
            var view = new View(object, options),
              _dgo = "data-fresco-group-options";
            if (view.group) {
              if (isElement) {
                var elements = $(
                    '.fresco[data-fresco-group="' +
                      $(object).attr("data-fresco-group") +
                      '"]'
                  ),
                  groupOptions = {};
                elements.filter("[" + _dgo + "]").each(function (i, element) {
                  $.extend(
                    groupOptions,
                    eval("({" + ($(element).attr(_dgo) || "") + "})")
                  );
                }),
                  elements.each(function (a, b) {
                    position || b !== object || (position = a + 1),
                      views.push(
                        new View(b, $.extend({}, groupOptions, options))
                      );
                  });
              }
            } else {
              var groupOptions = {};
              isElement &&
                $(object).is("[" + _dgo + "]") &&
                ($.extend(
                  groupOptions,
                  eval("({" + ($(object).attr(_dgo) || "") + "})")
                ),
                (view = new View(object, $.extend({}, groupOptions, options)))),
                views.push(view);
            }
            break;
          case "array":
            $.each(object, function (a, b) {
              var c = new View(b, options);
              views.push(c);
            });
        }
        var groupExtend = { grouped: { caption: !1 } },
          firstUI = views[0].options.ui;
        $.each(views, function (a, b) {
          b.caption && (groupExtend.grouped.caption = !0),
            a > 0 && b.options.ui != firstUI && (b.options.ui = firstUI);
        }),
          $.each(views, function (a, b) {
            b = $.extend(b, groupExtend);
          }),
          (!position || 1 > position) && (position = 1),
          position > views.length && (position = views.length);
        var positionInAPG;
        isElement &&
        (positionInAPG = Pages.getPositionInActivePageGroup(object))
          ? Window.setPosition(positionInAPG)
          : Window.load(views, position);
      },
      showFallback: (function () {
        function a(b) {
          var c,
            d = $.type(b);
          if ("string" == d) c = b;
          else if ("array" == d && b[0]) c = a(b[0]);
          else if (_.isElement(b) && $(b).attr("href"))
            var c = $(b).attr("href");
          else c = b.url ? b.url : !1;
          return c;
        }
        return function (b) {
          if (this._fallback) {
            var c = a(b);
            c && (window.location.href = c);
          }
        };
      })(),
    };
  $.extend(Fresco, {
    show: function (a) {
      return _Fresco.show.apply(_Fresco, _slice.call(arguments)), this;
    },
    hide: function () {
      return Window.hide(), this;
    },
    disable: function () {
      return _Fresco.stopDelegating(), (_Fresco._disabled = !0), this;
    },
    enable: function () {
      return (_Fresco._disabled = !1), _Fresco.startDelegating(), this;
    },
    fallback: function (a) {
      return (_Fresco._fallback = a), this;
    },
    setDefaultSkin: function (a) {
      return (Options.defaults.skin = a), this;
    },
  }),
    ((Browser.IE && Browser.IE < 7) ||
      ("number" == $.type(Browser.Android) && Browser.Android < 3) ||
      (Browser.MobileSafari &&
        "number" == $.type(Browser.WebKit) &&
        Browser.WebKit < 533.18)) &&
      (_Fresco.show = _Fresco.showFallback);
  var Thumbnails = {
    initialize: function (a) {
      (this.element = a),
        (this._thumbnails = []),
        (this._orientation = "vertical"),
        (this._vars = { thumbnail: {}, thumbnailFrame: {}, thumbnails: {} }),
        this.build(),
        this.startObserving();
    },
    build: function () {
      this.element.append(
        (this.wrapper = $("<div>")
          .addClass("fr-thumbnails-wrapper")
          .append(
            (this._slider = $("<div>")
              .addClass("fr-thumbnails-slider")
              .append(
                (this._previous = $("<div>")
                  .addClass("fr-thumbnails-side fr-thumbnails-side-previous")
                  .append(
                    (this._previous_button = $("<div>")
                      .addClass("fr-thumbnails-side-button")
                      .append(
                        $("<div>").addClass(
                          "fr-thumbnails-side-button-background"
                        )
                      )
                      .append(
                        $("<div>").addClass("fr-thumbnails-side-button-icon")
                      ))
                  ))
              )
              .append(
                (this._thumbs = $("<div>")
                  .addClass("fr-thumbnails-thumbs")
                  .append(
                    (this._slide = $("<div>").addClass("fr-thumbnails-slide"))
                  ))
              )
              .append(
                (this._next = $("<div>")
                  .addClass("fr-thumbnails-side fr-thumbnails-side-next")
                  .append(
                    (this._next_button = $("<div>")
                      .addClass("fr-thumbnails-side-button")
                      .append(
                        $("<div>").addClass(
                          "fr-thumbnails-side-button-background"
                        )
                      )
                      .append(
                        $("<div>").addClass("fr-thumbnails-side-button-icon")
                      ))
                  ))
              ))
          ))
      );
    },
    startObserving: function () {
      this._slider.delegate(
        ".fr-thumbnail",
        "click",
        $.proxy(function (a) {
          a.stopPropagation();
          var b = $(a.target).closest(".fr-thumbnail")[0],
            c = b && $(b).data("fr-position");
          c && (this.setActive(c), Window.setPosition(c));
        }, this)
      ),
        this._slider.bind("click", function (a) {
          a.stopPropagation();
        }),
        this._previous.bind("click", $.proxy(this.previousPage, this)),
        this._next.bind("click", $.proxy(this.nextPage, this));
    },
    load: function (a) {
      this.clear();
      var b = "horizontal",
        c = !1;
      $.each(
        a,
        $.proxy(function (a, d) {
          "vertical" == d.options.thumbnails && (b = "vertical"),
            d.options.thumbnails || (c = !0);
        }, this)
      ),
        this.setOrientation(b),
        (this._disabledGroup = c),
        $.each(
          a,
          $.proxy(function (a, b) {
            this._thumbnails.push(new Thumbnail(b, a + 1));
          }, this)
        ),
        this.fitToViewport();
    },
    clear: function () {
      $.each(this._thumbnails, function (a, b) {
        b.remove();
      }),
        (this._thumbnails = []),
        (this._position = -1),
        (this._page = -1);
    },
    setOrientation: function (a) {
      this._orientation &&
        Window.element.removeClass("fr-thumbnails-" + this._orientation),
        Window.element.addClass("fr-thumbnails-" + a),
        (this._orientation = a);
    },
    disable: function () {
      Window.element
        .removeClass("fr-thumbnails-enabled")
        .addClass("fr-thumbnails-disabled"),
        (this._disabled = !0);
    },
    enable: function () {
      Window.element
        .removeClass("fr-thumbnails-disabled")
        .addClass("fr-thumbnails-enabled"),
        (this._disabled = !1);
    },
    enabled: function () {
      return !this._disabled;
    },
    disabled: function () {
      return this._disabled;
    },
    updateVars: function () {
      var a = Window.element,
        b = this._vars,
        c = this._orientation,
        d = "horizontal" == c,
        e = d ? "top" : "left",
        f = d ? "left" : "top",
        g = d ? "bottom" : "left",
        h = d ? "top" : "right",
        i = d ? "width" : "height",
        j = d ? "height" : "width",
        k = { left: "right", right: "left", top: "bottom", bottom: "top" };
      this.element.removeClass("fr-thumbnails-measured");
      var l = a.is(":visible");
      if (
        (l || a.show(),
        this.disabled() && this.enable(),
        !this.element.is(":visible") ||
          this._thumbnails.length < 2 ||
          this._disabledGroup)
      )
        return (
          this.disable(),
          $.extend(this._vars.thumbnails, { width: 0, height: 0 }),
          l || a.hide(),
          void this.element.addClass("fr-thumbnails-measured")
        );
      this.enable();
      var m = this._previous,
        n = this._next,
        o = this._thumbs,
        p = Bounds.viewport(),
        q = this.element["inner" + _.String.capitalize(j)](),
        r = parseInt(this._thumbs.css("padding-" + e)) || 0,
        s = Math.max(q - 2 * r, 0),
        t = parseInt(this._thumbs.css("padding-" + f)) || 0,
        u =
          (parseInt(this.element.css("margin-" + g)) || 0) +
          (parseInt(this.element.css("margin-" + h)) || 0);
      $.extend(b.thumbnails, {
        height: q + u,
        width: p[d ? "width" : "height"],
        paddingTop: r,
      }),
        $.extend(b.thumbnail, { height: s, width: s }),
        $.extend(b.thumbnailFrame, { width: s + 2 * t, height: q }),
        (b.sides = {
          previous: {
            width: n["inner" + _.String.capitalize(i)](),
            marginLeft: parseInt(m.css("margin-" + f)) || 0,
            marginRight: parseInt(m.css("margin-" + k[f])) || 0,
          },
          next: {
            width: n["inner" + _.String.capitalize(i)](),
            marginLeft: parseInt(n.css("margin-" + f)) || 0,
            marginRight: parseInt(n.css("margin-" + k[f])) || 0,
          },
        });
      var v = p[i],
        w = b.thumbnailFrame.width,
        o = this._thumbnails.length;
      (b.thumbnails.width = v), (b.sides.enabled = (o * w) / v > 1);
      var x = v,
        y = b.sides,
        z = y.previous,
        A = y.next,
        B =
          z.marginLeft +
          z.width +
          z.marginRight +
          A.marginLeft +
          A.width +
          A.marginRight;
      b.sides.enabled && (x -= B), (x = Math.floor(x / w) * w);
      var C = o * w;
      x > C && (x = C);
      var D = x + (b.sides.enabled ? B : 0);
      (b.ipp = x / w),
        (this._mode = "page"),
        b.ipp <= 1 &&
          ((x = v), (D = v), (b.sides.enabled = !1), (this._mode = "center")),
        (b.pages = Math.ceil((o * w) / x)),
        (b.wrapper = { width: D + 1, height: q }),
        (b.thumbs = { width: x, height: q }),
        (b.slide = { width: o * w + 1, height: q }),
        l || a.hide(),
        this.element.addClass("fr-thumbnails-measured");
    },
    hide: function () {
      this.disable(), this.thumbnails.hide(), (this._visible = !1);
    },
    getDimensions: function () {
      var a = "horizontal" == this._orientation;
      return {
        width: a ? this._vars.thumbnails.width : this._vars.thumbnails.height,
        height: a ? this._vars.thumbnails.height : this._vars.thumbnails.width,
      };
    },
    fitToViewport: function () {
      if ((this.updateVars(), !this.disabled())) {
        var a = $.extend({}, this._vars),
          b = "horizontal" == this._orientation;
        $.each(this._thumbnails, function (a, b) {
          b.resize();
        }),
          this._previous[a.sides.enabled ? "show" : "hide"](),
          this._next[a.sides.enabled ? "show" : "hide"](),
          this._thumbs.css({
            width: a.thumbs[b ? "width" : "height"],
            height: a.thumbs[b ? "height" : "width"],
          }),
          this._slide.css({
            width: a.slide[b ? "width" : "height"],
            height: a.slide[b ? "height" : "width"],
          });
        var c = {
          width: a.wrapper[b ? "width" : "height"],
          height: a.wrapper[b ? "height" : "width"],
        };
        (c["margin-" + (b ? "left" : "top")] =
          Math.round(-0.5 * a.wrapper.width) + "px"),
          (c["margin-" + (b ? "top" : "left")] = 0),
          this.wrapper.css(c),
          this._position && this.moveTo(this._position, !0);
      }
    },
    moveToPage: function (a) {
      if (!(1 > a || a > this._vars.pages || a == this._page)) {
        var b = this._vars.ipp * (a - 1) + 1;
        this.moveTo(b);
      }
    },
    previousPage: function () {
      this.moveToPage(this._page - 1);
    },
    nextPage: function () {
      this.moveToPage(this._page + 1);
    },
    show: function (a) {
      var b = this._position < 0;
      1 > a && (a = 1);
      var c = this._thumbnails.length;
      a > c && (a = c),
        (this._position = a),
        this.setActive(a),
        ("page" != this._mode || this._page != Math.ceil(a / this._vars.ipp)) &&
          this.moveTo(a, b);
    },
    moveTo: function (a, b) {
      if ((this.updateVars(), !this.disabled())) {
        var c,
          d = "horizontal" == this._orientation,
          e = Bounds.viewport()[d ? "width" : "height"],
          f = 0.5 * e,
          g = this._vars.thumbnailFrame.width;
        if ("page" == this._mode) {
          var h = Math.ceil(a / this._vars.ipp);
          (this._page = h), (c = -1 * (g * (this._page - 1) * this._vars.ipp));
          var i = "fr-thumbnails-side-button-disabled";
          this._previous_button[(2 > h ? "add" : "remove") + "Class"](i),
            this._next_button[
              (h >= this._vars.pages ? "add" : "remove") + "Class"
            ](i);
        } else c = f + -1 * (g * (a - 1) + 0.5 * g);
        var h = Pages.page,
          j = {},
          k = {};
        (j[d ? "top" : "left"] = 0),
          (k[d ? "left" : "top"] = c + "px"),
          this._slide
            .stop(!0)
            .css(j)
            .animate(
              k,
              b ? 0 : h ? h.view.options.effects.thumbnails.slide || 0 : 0,
              $.proxy(function () {
                this.loadCurrentPage();
              }, this)
            );
      }
    },
    loadCurrentPage: function () {
      var a, b;
      if (
        this._position &&
        this._vars.thumbnailFrame.width &&
        !(this._thumbnails.length < 1)
      ) {
        if ("page" == this._mode) {
          if (this._page < 1) return;
          (a = (this._page - 1) * this._vars.ipp + 1),
            (b = Math.min(a - 1 + this._vars.ipp, this._thumbnails.length));
        } else {
          var c =
            ("horizontal" == this._orientation,
            Math.ceil(
              this._vars.thumbnails.width / this._vars.thumbnailFrame.width
            ));
          (a = Math.max(Math.floor(Math.max(this._position - 0.5 * c, 0)), 1)),
            (b = Math.ceil(Math.min(this._position + 0.5 * c))),
            this._thumbnails.length < b && (b = this._thumbnails.length);
        }
        for (var d = a; b >= d; d++) this._thumbnails[d - 1].load();
      }
    },
    setActive: function (a) {
      this._slide
        .find(".fr-thumbnail-active")
        .removeClass("fr-thumbnail-active");
      var b = a && this._thumbnails[a - 1];
      b && b.activate();
    },
    refresh: function () {
      this._position && this.setPosition(this._position);
    },
  };
  $.extend(Thumbnail.prototype, {
    initialize: function (a, b) {
      (this.view = a), (this._position = b), this.preBuild();
    },
    preBuild: function () {
      this.thumbnail = $("<div>")
        .addClass("fr-thumbnail")
        .data("fr-position", this._position);
    },
    build: function () {
      if (!this.thumbnailFrame) {
        var a = this.view.options;
        Thumbnails._slide.append(
          (this.thumbnailFrame = $("<div>")
            .addClass("fr-thumbnail-frame")
            .append(
              this.thumbnail.append(
                (this.thumbnailWrapper = $("<div>").addClass(
                  "fr-thumbnail-wrapper"
                ))
              )
            ))
        ),
          "image" == this.view.type &&
            this.thumbnail
              .addClass("fr-load-thumbnail")
              .data("thumbnail", {
                view: this.view,
                src: a.thumbnail || this.view.url,
              });
        var b = a.thumbnail && a.thumbnail.icon;
        b &&
          this.thumbnail.append(
            $("<div>").addClass("fr-thumbnail-icon fr-thumbnail-icon-" + b)
          );
        var c;
        this.thumbnail.append(
          (c = $("<div>")
            .addClass("fr-thumbnail-overlay")
            .append($("<div>").addClass("fr-thumbnail-overlay-background"))
            .append(
              (this.loading = $("<div>")
                .addClass("fr-thumbnail-loading")
                .append($("<div>").addClass("fr-thumbnail-loading-background"))
                .append(
                  (this.spinner = $("<div>")
                    .addClass("fr-thumbnail-spinner")
                    .hide()
                    .append($("<div>").addClass("fr-thumbnail-spinner-spin")))
                ))
            )
            .append($("<div>").addClass("fr-thumbnail-overlay-border")))
        ),
          this.thumbnail.append($("<div>").addClass("fr-thumbnail-state")),
          this.resize();
      }
    },
    remove: function () {
      this.thumbnailFrame &&
        (this.thumbnailFrame.remove(),
        (this.thumbnailFrame = null),
        (this.image = null)),
        this.ready && (this.ready.abort(), (this.ready = null)),
        this.vimeoThumbnail &&
          (this.vimeoThumbnail.abort(), (this.vimeoThumbnail = null)),
        (this._loading = !1),
        (this._removed = !0),
        (this.view = null),
        this._clearDelay();
    },
    load: function () {
      if (!(this._loaded || this._loading || this._removed)) {
        this.thumbnailWrapper || this.build(), (this._loading = !0);
        var a = this.view.options.thumbnail,
          b = a && "boolean" == $.type(a) ? this.view.url : a || this.view.url;
        if (((this._url = b), b))
          if ("vimeo" == this.view.type)
            if (b == a) (this._url = b), this._load(this._url);
            else
              switch (this.view.type) {
                case "vimeo":
                  this.vimeoThumbnail = new VimeoThumbnail(
                    this.view.url,
                    $.proxy(function (a) {
                      (this._url = a), this._load(a);
                    }, this),
                    $.proxy(function () {
                      this._error();
                    }, this)
                  );
              }
          else this._load(this._url);
      }
    },
    activate: function () {
      this.thumbnail.addClass("fr-thumbnail-active");
    },
    _load: function (a) {
      this.thumbnailWrapper.prepend(
        (this.image = $("<img>")
          .addClass("fr-thumbnail-image")
          .attr({ src: a })
          .css({ opacity: 1e-4 }))
      ),
        this.fadeInSpinner(),
        (this.ready = new ImageReady(
          this.image[0],
          $.proxy(function (a) {
            var b = a.img;
            this.thumbnailFrame &&
              this._loading &&
              ((this._loaded = !0),
              (this._loading = !1),
              (this._dimensions = {
                width: b.naturalWidth,
                height: b.naturalHeight,
              }),
              this.resize(),
              this.show());
          }, this),
          $.proxy(function () {
            this._error();
          }, this),
          { method: this.view.options.loadedMethod }
        ));
    },
    _error: function () {
      (this._loaded = !0),
        (this._loading = !1),
        this.thumbnail.addClass("fr-thumbnail-error"),
        this.image && this.image.hide(),
        this.thumbnailWrapper.append($("<div>").addClass("fr-thumbnail-image")),
        this.show();
    },
    fadeInSpinner: function () {
      if (Spinner.supported && this.view.options.spinner) {
        this._clearDelay();
        var a = this.view.options.effects.thumbnail;
        this._delay = setTimeout(
          $.proxy(function () {
            this.spinner.stop(!0).fadeTo(a.show || 0, 1);
          }, this),
          this.view.options.spinnerDelay || 0
        );
      }
    },
    show: function () {
      this._clearDelay();
      var a = this.view.options.effects.thumbnail;
      this.loading.stop(!0).delay(a.delay).fadeTo(a.show, 0);
    },
    _clearDelay: function () {
      this._delay && (clearTimeout(this._delay), (this._delay = null));
    },
    resize: function () {
      if (this.thumbnailFrame) {
        var a = "horizontal" == Thumbnails._orientation;
        if (
          (this.thumbnailFrame.css({
            width: Thumbnails._vars.thumbnailFrame[a ? "width" : "height"],
            height: Thumbnails._vars.thumbnailFrame[a ? "height" : "width"],
          }),
          this.thumbnailFrame.css({
            top: a
              ? 0
              : Thumbnails._vars.thumbnailFrame.width * (this._position - 1),
            left: a
              ? Thumbnails._vars.thumbnailFrame.width * (this._position - 1)
              : 0,
          }),
          this.thumbnailWrapper)
        ) {
          var b = Thumbnails._vars.thumbnail;
          if (
            (this.thumbnail.css({
              width: b.width,
              height: b.height,
              "margin-top": Math.round(-0.5 * b.height),
              "margin-left": Math.round(-0.5 * b.width),
              "margin-bottom": 0,
              "margin-right": 0,
            }),
            this._dimensions)
          ) {
            var c,
              d = { width: b.width, height: b.height },
              e = Math.max(d.width, d.height),
              f = $.extend({}, this._dimensions);
            if (f.width > d.width && f.height > d.height) {
              c = Fit.within(d, f);
              var g = 1,
                h = 1;
              c.width < d.width && (g = d.width / c.width),
                c.height < d.height && (h = d.height / c.height);
              var i = Math.max(g, h);
              i > 1 && ((c.width *= i), (c.height *= i)),
                $.each("width height".split(" "), function (a, b) {
                  c[b] = Math.round(c[b]);
                });
            } else
              c = Fit.within(
                this._dimensions,
                f.width < d.width || f.height < d.height
                  ? { width: e, height: e }
                  : d
              );
            var j = Math.round(0.5 * d.width - 0.5 * c.width),
              k = Math.round(0.5 * d.height - 0.5 * c.height);
            this.image
              .removeAttr("style")
              .css($.extend({}, c, { top: k, left: j }));
          }
        }
      }
    },
  });
  var UI = {
    _modes: ["fullclick", "outside", "inside"],
    _ui: !1,
    _validClickTargetSelector: [
      ".fr-content-element",
      ".fr-content",
      ".fr-content > .fr-stroke",
      ".fr-content > .fr-stroke .fr-stroke-color",
    ].join(", "),
    initialize: function (a) {
      $.each(
        this._modes,
        $.proxy(function (a, b) {
          this[b].initialize();
        }, this)
      ),
        Window.element.addClass("fr-ui-inside-hidden fr-ui-fullclick-hidden");
    },
    set: function (a) {
      this._ui &&
        (Window.element.removeClass("fr-window-ui-" + this._ui),
        Overlay.element.removeClass("fr-overlay-ui-" + this._ui)),
        Window.element.addClass("fr-window-ui-" + a),
        Overlay.element.addClass("fr-overlay-ui-" + a),
        this._enabled &&
          this._ui &&
          this._ui != a &&
          (this[this._ui].disable(), this[a].enable(), UI[a].show()),
        (this._ui = a);
    },
    _onWindowResize: function () {
      Support.mobileTouch && this.show();
    },
    enable: function () {
      $.each(
        this._modes,
        $.proxy(function (a, b) {
          UI[b][b == this._ui ? "enable" : "disable"]();
        }, this)
      ),
        (this._enabled = !0);
    },
    disable: function () {
      $.each(
        this._modes,
        $.proxy(function (a, b) {
          UI[b].disable();
        }, this)
      ),
        (this._enabled = !1);
    },
    adjustPrevNext: function (a, b) {
      UI[this._ui].adjustPrevNext(a, b);
    },
    show: function (a, b) {
      UI[this._ui].show(a, b);
    },
    hide: function (a, b) {
      UI[this._ui].hide(a, b);
    },
    reset: function () {
      $.each(
        this._modes,
        $.proxy(function (a, b) {
          UI[b].reset();
        }, this)
      );
    },
    update: function () {
      var a = Pages.page;
      a && this.set(a._ui);
    },
  };
  return (
    (UI.fullclick = {
      initialize: function () {
        this.build(), (this._scrollLeft = -1);
      },
      build: function () {
        Window._box
          .append(
            (this._previous = $("<div>")
              .addClass(
                "fr-side fr-side-previous fr-side-previous-fullclick fr-toggle-ui"
              )
              .append(
                $("<div>")
                  .addClass("fr-side-button")
                  .append($("<div>").addClass("fr-side-button-background"))
                  .append($("<div>").addClass("fr-side-button-icon"))
              ))
          )
          .append(
            (this._next = $("<div>")
              .addClass(
                "fr-side fr-side-next fr-side-next-fullclick fr-toggle-ui"
              )
              .append(
                $("<div>")
                  .addClass("fr-side-button")
                  .append($("<div>").addClass("fr-side-button-background"))
                  .append($("<div>").addClass("fr-side-button-icon"))
              ))
          )
          .append(
            (this._close = $("<div>")
              .addClass("fr-close fr-close-fullclick")
              .append($("<div>").addClass("fr-close-background"))
              .append($("<div>").addClass("fr-close-icon")))
          ),
          Browser.IE &&
            Browser.IE <= 7 &&
            this._previous.add(this._next).add(this._close).hide(),
          this._close.on(
            "click",
            $.proxy(function (a) {
              a.preventDefault(), Window.hide();
            }, this)
          ),
          this._previous.on(
            "click",
            $.proxy(function (a) {
              Window.previous(), this._onMouseMove(a);
            }, this)
          ),
          this._next.on(
            "click",
            $.proxy(function (a) {
              Window.next(), this._onMouseMove(a);
            }, this)
          );
      },
      enable: function () {
        this.bind();
      },
      disable: function () {
        this.unbind();
      },
      reset: function () {
        Window.timers.clear("ui-fullclick"),
          (this._x = -1),
          (this._y = -1),
          (this._scrollLeft = -1),
          this.resetPrevNext(),
          this._onMouseLeave();
      },
      resetPrevNext: function () {
        var a = this._previous.add(this._next);
        a.stop(!0).removeAttr("style");
      },
      bind: function () {
        this._onMouseUpHandler ||
          (this.unbind(),
          Window._pages.on(
            "mouseup",
            ".fr-container",
            (this._onMouseUpHandler = $.proxy(this._onMouseUp, this))
          ),
          Support.mobileTouch ||
            (Window.element
              .on("mouseenter", (this._showHandler = $.proxy(this.show, this)))
              .on("mouseleave", (this._hideHandler = $.proxy(this.hide, this))),
            Window.element.on(
              "mousemove",
              (this._mousemoveHandler = $.proxy(function (a) {
                var b = a.pageX,
                  c = a.pageY;
                this._hoveringSideButton ||
                  (c == this._y && b == this._x) ||
                  ((this._x = b),
                  (this._y = c),
                  this.show(),
                  this.startTimer());
              }, this))
            ),
            Window._pages
              .on(
                "mousemove",
                ".fr-container",
                (this._onMouseMoveHandler = $.proxy(this._onMouseMove, this))
              )
              .on(
                "mouseleave",
                ".fr-container",
                (this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this))
              )
              .on(
                "mouseenter",
                ".fr-container",
                (this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this))
              ),
            Window.element
              .on(
                "mouseenter",
                ".fr-side",
                (this._onSideMouseEnterHandler = $.proxy(
                  this._onSideMouseEnter,
                  this
                ))
              )
              .on(
                "mouseleave",
                ".fr-side",
                (this._onSideMouseLeaveHandler = $.proxy(
                  this._onSideMouseLeave,
                  this
                ))
              ),
            $(window).on(
              "scroll",
              (this._onScrollHandler = $.proxy(this._onScroll, this))
            )));
      },
      unbind: function () {
        this._onMouseUpHandler &&
          (Window._pages.off(
            "mouseup",
            ".fr-container",
            this._onMouseUpHandler
          ),
          (this._onMouseUpHandler = null),
          this._showHandler &&
            (Window.element
              .off("mouseenter", this._showHandler)
              .off("mouseleave", this._hideHandler)
              .off("mousemove", this._mousemoveHandler),
            Window._pages
              .off("mousemove", ".fr-container", this._onMouseMoveHandler)
              .off("mouseleave", ".fr-container", this._onMouseLeaveHandler)
              .off("mouseenter", ".fr-container", this._onMouseEnterHandler),
            Window.element
              .off("mouseenter", ".fr-side", this._onSideMouseEnterHandler)
              .off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler),
            $(window).off("scroll", this._onScrollHandler),
            (this._showHandler = null)));
      },
      adjustPrevNext: function (a, b) {
        var c = Pages.page;
        if (!c) return void (a && a());
        var d = Window.element.is(":visible");
        d || Window.element.show();
        var e = this._previous.attr("style");
        this._previous.removeAttr("style");
        var f = parseInt(this._previous.css("margin-top"));
        this._previous.attr({ style: e }), d || Window.element.hide();
        var g = c._infoHeight || 0,
          h = this._previous.add(this._next),
          i = { "margin-top": f - 0.5 * g },
          j =
            "number" == $.type(b)
              ? b
              : (Pages.page && Pages.page.view.options.effects.content.show) ||
                0;
        this.opening && (j = 0),
          h.stop(!0).animate(i, j, a),
          this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"](
            "fr-side-disabled"
          ),
          this._next[(Window.mayNext() ? "remove" : "add") + "Class"](
            "fr-side-disabled"
          ),
          h[(c._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"),
          a && a();
      },
      _onScroll: function () {
        this._scrollLeft = $(window).scrollLeft();
      },
      _onMouseMove: function (a) {
        if (!Support.mobileTouch) {
          var b = this._getEventSide(a),
            c = _.String.capitalize(b),
            d = b ? Window["may" + c]() : !1;
          if (b != this._hoveringSide || d != this._mayClickHoveringSide)
            switch (
              ((this._hoveringSide = b),
              (this._mayClickHoveringSide = d),
              Window._box[(d ? "add" : "remove") + "Class"](
                "fr-hovering-clickable"
              ),
              b)
            ) {
              case "previous":
                Window._box
                  .addClass("fr-hovering-previous")
                  .removeClass("fr-hovering-next");
                break;
              case "next":
                Window._box
                  .addClass("fr-hovering-next")
                  .removeClass("fr-hovering-previous");
            }
        }
      },
      _onMouseLeave: function (a) {
        Window._box.removeClass(
          "fr-hovering-clickable fr-hovering-previous fr-hovering-next"
        ),
          (this._hoveringSide = !1);
      },
      _onMouseUp: function (a) {
        if (!(a.which > 1)) {
          if (1 == Pages.pages.length) return void Window.hide();
          var b = this._getEventSide(a);
          Window[b](), this._onMouseMove(a);
        }
      },
      _onMouseEnter: function (a) {
        this._onMouseMove(a);
      },
      _getEventSide: function (a) {
        var b =
            (this._scrollLeft > -1
              ? this._scrollLeft
              : (this._scrollLeft = $(window).scrollLeft()),
            a.pageX - Window._boxPosition.left - this._scrollLeft),
          c = Window._boxDimensions.width;
        return 0.5 * c > b ? "previous" : "next";
      },
      _onSideMouseEnter: function (a) {
        (this._hoveringSideButton = !0),
          (this._hoveringSide = this._getEventSide(a)),
          (this._mayClickHoveringSide =
            Window["may" + _.String.capitalize(this._hoveringSide)]()),
          this.clearTimer();
      },
      _onSideMouseLeave: function (a) {
        (this._hoveringSideButton = !1),
          (this._hoveringSide = !1),
          (this._mayClickHoveringSide = !1),
          this.startTimer();
      },
      show: function (a) {
        return this._visible
          ? (this.startTimer(), void ("function" == $.type(a) && a()))
          : ((this._visible = !0),
            this.startTimer(),
            Window.element
              .addClass("fr-visible-fullclick-ui")
              .removeClass("fr-hidden-fullclick-ui"),
            Browser.IE &&
              Browser.IE <= 7 &&
              this._previous.add(this._next).add(this._close).show(),
            void ("function" == $.type(a) && a()));
      },
      hide: function (a) {
        var b = Pages.page && Pages.page.view.type;
        return !this._visible || (b && ("youtube" == b || "vimeo" == b))
          ? void ("function" == $.type(a) && a())
          : ((this._visible = !1),
            Window.element
              .removeClass("fr-visible-fullclick-ui")
              .addClass("fr-hidden-fullclick-ui"),
            void ("function" == $.type(a) && a()));
      },
      clearTimer: function () {
        Support.mobileTouch || Window.timers.clear("ui-fullclick");
      },
      startTimer: function () {
        Support.mobileTouch ||
          (this.clearTimer(),
          Window.timers.set(
            "ui-fullclick",
            $.proxy(function () {
              this.hide();
            }, this),
            Window.view ? Window.view.options.uiDelay : 0
          ));
      },
    }),
    (UI.inside = {
      initialize: function () {},
      enable: function () {
        this.bind();
      },
      disable: function () {
        this.unbind();
      },
      bind: function () {
        this._onMouseUpHandler ||
          (this.unbind(),
          Window._pages.on(
            "mouseup",
            ".fr-content",
            (this._onMouseUpHandler = $.proxy(this._onMouseUp, this))
          ),
          Window._pages
            .on(
              "click",
              ".fr-content .fr-close",
              $.proxy(function (a) {
                a.preventDefault(), Window.hide();
              }, this)
            )
            .on(
              "click",
              ".fr-content .fr-side-previous",
              $.proxy(function (a) {
                Window.previous(), this._onMouseMove(a);
              }, this)
            )
            .on(
              "click",
              ".fr-content .fr-side-next",
              $.proxy(function (a) {
                Window.next(), this._onMouseMove(a);
              }, this)
            ),
          Window.element.on(
            "click",
            ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",
            (this._delegateOverlayCloseHandler = $.proxy(
              this._delegateOverlayClose,
              this
            ))
          ),
          Support.mobileTouch ||
            (Window.element
              .on(
                "mouseenter",
                ".fr-content",
                (this._showHandler = $.proxy(this.show, this))
              )
              .on(
                "mouseleave",
                ".fr-content",
                (this._hideHandler = $.proxy(this.hide, this))
              ),
            Window.element.on(
              "mousemove",
              ".fr-content",
              (this._mousemoveHandler = $.proxy(function (a) {
                var b = a.pageX,
                  c = a.pageY;
                this._hoveringSideButton ||
                  (c == this._y && b == this._x) ||
                  ((this._x = b),
                  (this._y = c),
                  this.show(),
                  this.startTimer());
              }, this))
            ),
            Window._pages.on(
              "mousemove",
              ".fr-info, .fr-close",
              $.proxy(function (a) {
                a.stopPropagation(), this._onMouseLeave(a);
              }, this)
            ),
            Window._pages.on(
              "mousemove",
              ".fr-info",
              $.proxy(function (a) {
                this.clearTimer();
              }, this)
            ),
            Window._pages
              .on(
                "mousemove",
                ".fr-content",
                (this._onMouseMoveHandler = $.proxy(this._onMouseMove, this))
              )
              .on(
                "mouseleave",
                ".fr-content",
                (this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this))
              )
              .on(
                "mouseenter",
                ".fr-content",
                (this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this))
              ),
            Window.element
              .on(
                "mouseenter",
                ".fr-side",
                (this._onSideMouseEnterHandler = $.proxy(
                  this._onSideMouseEnter,
                  this
                ))
              )
              .on(
                "mouseleave",
                ".fr-side",
                (this._onSideMouseLeaveHandler = $.proxy(
                  this._onSideMouseLeave,
                  this
                ))
              ),
            $(window).on(
              "scroll",
              (this._onScrollHandler = $.proxy(this._onScroll, this))
            )));
      },
      unbind: function () {
        this._onMouseUpHandler &&
          (Window._pages.off("mouseup", ".fr-content", this._onMouseUpHandler),
          (this._onMouseUpHandler = null),
          Window._pages
            .off("click", ".fr-content .fr-close")
            .off("click", ".fr-content .fr-side-previous")
            .off("click", ".fr-content .fr-side-next"),
          Window.element.off(
            "click",
            ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",
            this._delegateOverlayCloseHandler
          ),
          this._showHandler &&
            (Window.element
              .off("mouseenter", ".fr-content", this._showHandler)
              .off("mouseleave", ".fr-content", this._hideHandler)
              .off("mousemove", ".fr-content", this._mousemoveHandler),
            Window._pages.off("mousemove", ".fr-info, .fr-close"),
            Window._pages.off("mousemove", ".fr-info"),
            Window._pages
              .off("mousemove", ".fr-content-element", this._onMouseMoveHandler)
              .off("mouseleave", ".fr-content", this._onMouseLeaveHandler)
              .off("mouseenter", ".fr-content", this._onMouseEnterHandler),
            Window.element
              .off("mouseenter", ".fr-side", this._onSideMouseEnterHandler)
              .off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler),
            $(window).off("scroll", this._onScrollHandler),
            (this._showHandler = null)));
      },
      reset: function () {
        Window.timers.clear("ui-fullclick"),
          (this._x = -1),
          (this._y = -1),
          (this._scrollLeft = -1),
          (this._hoveringSide = !1),
          this._onMouseLeave();
      },
      adjustPrevNext: function (a) {
        a && a();
      },
      _onScroll: function () {
        this._scrollLeft = $(window).scrollLeft();
      },
      _delegateOverlayClose: function (a) {
        var b = Pages.page;
        (b && b.view.options.overlay && !b.view.options.overlay.close) ||
          ($(a.target).is(
            ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper"
          ) &&
            (a.preventDefault(), a.stopPropagation(), Window.hide()));
      },
      _onMouseMove: function (a) {
        if (!Support.mobileTouch) {
          var b = this._getEventSide(a),
            c = _.String.capitalize(b),
            d = b ? Window["may" + c]() : !1;
          if (
            ((1 == Pages.pages.length ||
              (Pages.page && "close" == Pages.page.view.options.onClick)) &&
              (b = !1),
            b != this._hoveringSide || d != this._mayClickHoveringSide)
          )
            if (((this._hoveringSide = b), (this._mayClickHoveringSide = d), b))
              switch (
                (Window._box[(d ? "add" : "remove") + "Class"](
                  "fr-hovering-clickable"
                ),
                b)
              ) {
                case "previous":
                  Window._box
                    .addClass("fr-hovering-previous")
                    .removeClass("fr-hovering-next");
                  break;
                case "next":
                  Window._box
                    .addClass("fr-hovering-next")
                    .removeClass("fr-hovering-previous");
              }
            else
              Window._box.removeClass(
                "fr-hovering-clickable fr-hovering-previous fr-hovering-next"
              );
        }
      },
      _onMouseLeave: function (a) {
        Window._box.removeClass(
          "fr-hovering-clickable fr-hovering-previous fr-hovering-next"
        ),
          (this._hoveringSide = !1);
      },
      _onMouseUp: function (a) {
        if (!(a.which > 1) && $(a.target).is(UI._validClickTargetSelector)) {
          if (
            1 == Pages.pages.length ||
            (Pages.page && "close" == Pages.page.view.options.onClick)
          )
            return void Window.hide();
          var b = this._getEventSide(a);
          Window[b](), this._onMouseMove(a);
        }
      },
      _onMouseEnter: function (a) {
        this._onMouseMove(a);
      },
      _getEventSide: function (a) {
        var b =
            (this._scrollLeft > -1
              ? this._scrollLeft
              : (this._scrollLeft = $(window).scrollLeft()),
            a.pageX - Window._boxPosition.left - this._scrollLeft),
          c = Window._boxDimensions.width;
        return 0.5 * c > b ? "previous" : "next";
      },
      _onSideMouseEnter: function (a) {
        (this._hoveringSideButton = !0),
          (this._hoveringSide = this._getEventSide(a)),
          (this._mayClickHoveringSide =
            Window["may" + _.String.capitalize(this._hoveringSide)]()),
          this.clearTimer();
      },
      _onSideMouseLeave: function (a) {
        (this._hoveringSideButton = !1),
          (this._hoveringSide = !1),
          (this._mayClickHoveringSide = !1),
          this.startTimer();
      },
      show: function (a) {
        return this._visible
          ? (this.startTimer(), void ("function" == $.type(a) && a()))
          : ((this._visible = !0),
            this.startTimer(),
            Window.element
              .addClass("fr-visible-inside-ui")
              .removeClass("fr-hidden-inside-ui"),
            void ("function" == $.type(a) && a()));
      },
      hide: function (a) {
        return this._visible
          ? ((this._visible = !1),
            Window.element
              .removeClass("fr-visible-inside-ui")
              .addClass("fr-hidden-inside-ui"),
            void ("function" == $.type(a) && a()))
          : void ("function" == $.type(a) && a());
      },
      clearTimer: function () {
        Support.mobileTouch || Window.timers.clear("ui-inside");
      },
      startTimer: function () {
        Support.mobileTouch ||
          (this.clearTimer(),
          Window.timers.set(
            "ui-inside",
            $.proxy(function () {
              this.hide();
            }, this),
            Window.view ? Window.view.options.uiDelay : 0
          ));
      },
    }),
    (UI.outside = {
      initialize: function () {
        this.build(), (this._scrollLeft = -1);
      },
      build: function () {
        Window._box
          .append(
            (this._previous = $("<div>")
              .addClass("fr-side fr-side-previous fr-side-previous-outside")
              .append(
                $("<div>")
                  .addClass("fr-side-button")
                  .append($("<div>").addClass("fr-side-button-background"))
                  .append($("<div>").addClass("fr-side-button-icon"))
              ))
          )
          .append(
            (this._next = $("<div>")
              .addClass("fr-side fr-side-next fr-side-next-outside")
              .append(
                $("<div>")
                  .addClass("fr-side-button")
                  .append($("<div>").addClass("fr-side-button-background"))
                  .append($("<div>").addClass("fr-side-button-icon"))
              ))
          )
          .append(
            (this._close = $("<div>")
              .addClass("fr-close fr-close-outside")
              .append($("<div>").addClass("fr-close-background"))
              .append($("<div>").addClass("fr-close-icon")))
          ),
          Browser.IE &&
            Browser.IE <= 7 &&
            this._previous.add(this._next).add(this._close).hide(),
          this._close.on(
            "click",
            $.proxy(function (a) {
              a.preventDefault(), Window.hide();
            }, this)
          ),
          this._previous.on(
            "click",
            $.proxy(function (a) {
              Window.previous(), this._onMouseMove(a);
            }, this)
          ),
          this._next.on(
            "click",
            $.proxy(function (a) {
              Window.next(), this._onMouseMove(a);
            }, this)
          );
      },
      enable: function () {
        this.bind();
      },
      disable: function () {
        this.unbind();
      },
      reset: function () {
        Window.timers.clear("ui-outside"),
          (this._x = -1),
          (this._y = -1),
          (this._scrollLeft = -1),
          this._onMouseLeave();
      },
      bind: function () {
        this._onMouseUpHandler ||
          (this.unbind(),
          Window.element.on(
            "mouseup",
            ".fr-content",
            (this._onMouseUpHandler = $.proxy(this._onMouseUp, this))
          ),
          Window.element.on(
            "click",
            ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",
            (this._delegateOverlayCloseHandler = $.proxy(
              this._delegateOverlayClose,
              this
            ))
          ),
          Support.mobileTouch ||
            (Window._pages
              .on(
                "mousemove",
                ".fr-content",
                (this._onMouseMoveHandler = $.proxy(this._onMouseMove, this))
              )
              .on(
                "mouseleave",
                ".fr-content",
                (this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this))
              )
              .on(
                "mouseenter",
                ".fr-content",
                (this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this))
              ),
            Window.element
              .on(
                "mouseenter",
                ".fr-side",
                (this._onSideMouseEnterHandler = $.proxy(
                  this._onSideMouseEnter,
                  this
                ))
              )
              .on(
                "mouseleave",
                ".fr-side",
                (this._onSideMouseLeaveHandler = $.proxy(
                  this._onSideMouseLeave,
                  this
                ))
              ),
            $(window).on(
              "scroll",
              (this._onScrollHandler = $.proxy(this._onScroll, this))
            )));
      },
      unbind: function () {
        this._onMouseUpHandler &&
          (Window.element.off("mouseup", ".fr-content", this._onMouseUpHandler),
          (this._onMouseUpHandler = null),
          Window.element.off(
            "click",
            ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper",
            this._delegateOverlayCloseHandler
          ),
          this._onMouseMoveHandler &&
            (Window._pages
              .off("mousemove", ".fr-content", this._onMouseMoveHandler)
              .off("mouseleave", ".fr-content", this._onMouseLeaveHandler)
              .off("mouseenter", ".fr-content", this._onMouseEnterHandler),
            Window.element
              .off("mouseenter", ".fr-side", this._onSideMouseEnterHandler)
              .off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler),
            $(window).off("scroll", this._onScrollHandler),
            (this._onMouseMoveHandler = null)));
      },
      adjustPrevNext: function (a, b) {
        var c = Pages.page;
        if (!c) return void (a && a());
        var d = this._previous.add(this._next);
        this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"](
          "fr-side-disabled"
        ),
          this._next[(Window.mayNext() ? "remove" : "add") + "Class"](
            "fr-side-disabled"
          ),
          d[(c._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"),
          a && a();
      },
      _onScroll: function () {
        this._scrollLeft = $(window).scrollLeft();
      },
      _delegateOverlayClose: function (a) {
        var b = Pages.page;
        (b && b.view.options.overlay && !b.view.options.overlay.close) ||
          ($(a.target).is(
            ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper"
          ) &&
            (a.preventDefault(), a.stopPropagation(), Window.hide()));
      },
      _onMouseMove: function (a) {
        if (!Support.mobileTouch) {
          var b = this._getEventSide(a),
            c = _.String.capitalize(b),
            d = b ? Window["may" + c]() : !1;
          if (
            ((1 == Pages.pages.length ||
              (Pages.page && "close" == Pages.page.view.options.onClick)) &&
              (b = !1),
            b != this._hoveringSide || d != this._mayClickHoveringSide)
          )
            if (((this._hoveringSide = b), (this._mayClickHoveringSide = d), b))
              switch (
                (Window._box[(d ? "add" : "remove") + "Class"](
                  "fr-hovering-clickable"
                ),
                b)
              ) {
                case "previous":
                  Window._box
                    .addClass("fr-hovering-previous")
                    .removeClass("fr-hovering-next");
                  break;
                case "next":
                  Window._box
                    .addClass("fr-hovering-next")
                    .removeClass("fr-hovering-previous");
              }
            else
              Window._box.removeClass(
                "fr-hovering-clickable fr-hovering-previous fr-hovering-next"
              );
        }
      },
      _onMouseLeave: function (a) {
        Window._box.removeClass(
          "fr-hovering-clickable fr-hovering-previous fr-hovering-next"
        ),
          (this._hoveringSide = !1);
      },
      _onMouseUp: function (a) {
        if (!(a.which > 1) && $(a.target).is(UI._validClickTargetSelector)) {
          if (
            1 == Pages.pages.length ||
            (Pages.page && "close" == Pages.page.view.options.onClick)
          )
            return void Window.hide();
          var b = this._getEventSide(a);
          Window[b](), this._onMouseMove(a);
        }
      },
      _onMouseEnter: function (a) {
        this._onMouseMove(a);
      },
      _getEventSide: function (a) {
        var b =
            (this._scrollLeft > -1
              ? this._scrollLeft
              : (this._scrollLeft = $(window).scrollLeft()),
            a.pageX - Window._boxPosition.left - this._scrollLeft),
          c = Window._boxDimensions.width;
        return 0.5 * c > b ? "previous" : "next";
      },
      show: function () {
        Browser.IE &&
          Browser.IE <= 7 &&
          this._previous.add(this._next).add(this._close).show();
      },
      hide: function () {},
      _onSideMouseEnter: function (a) {
        (this._hoveringSideButton = !0),
          (this._hoveringSide = this._getEventSide(a)),
          (this._mayClickHoveringSide =
            Window["may" + _.String.capitalize(this._hoveringSide)]());
      },
      _onSideMouseLeave: function (a) {
        (this._hoveringSideButton = !1),
          (this._hoveringSide = !1),
          (this._mayClickHoveringSide = !1);
      },
      clearTimer: function () {},
    }),
    $(document).ready(function (a) {
      _Fresco.initialize();
    }),
    Fresco
  );
});

/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
!(function (a) {
  "use strict";
  var b = a.GreenSockGlobals || a,
    c = function (a) {
      var c,
        d = a.split("."),
        e = b;
      for (c = 0; c < d.length; c++) e[d[c]] = e = e[d[c]] || {};
      return e;
    },
    d = c("com.greensock.utils"),
    e = function (a) {
      var b = a.nodeType,
        c = "";
      if (1 === b || 9 === b || 11 === b) {
        if ("string" == typeof a.textContent) return a.textContent;
        for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
      } else if (3 === b || 4 === b) return a.nodeValue;
      return c;
    },
    f = document,
    g = f.defaultView ? f.defaultView.getComputedStyle : function () {},
    h = /([A-Z])/g,
    i = function (a, b, c, d) {
      var e;
      return (
        (c = c || g(a, null))
          ? ((a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase())),
            (e = a || c.length ? a : c[b]))
          : a.currentStyle && ((c = a.currentStyle), (e = c[b])),
        d ? e : parseInt(e, 10) || 0
      );
    },
    j = function (a) {
      return a.length &&
        a[0] &&
        ((a[0].nodeType && a[0].style && !a.nodeType) ||
          (a[0].length && a[0][0]))
        ? !0
        : !1;
    },
    k = function (a) {
      var b,
        c,
        d,
        e = [],
        f = a.length;
      for (b = 0; f > b; b++)
        if (((c = a[b]), j(c)))
          for (d = c.length, d = 0; d < c.length; d++) e.push(c[d]);
        else e.push(c);
      return e;
    },
    l = /(?:\r|\n|\t\t)/g,
    m = /(?:\s\s+)/g,
    n = 55296,
    o = 56319,
    p = 56320,
    q = 127462,
    r = 127487,
    s = 127995,
    t = 127999,
    u = function (a) {
      return ((a.charCodeAt(0) - n) << 10) + (a.charCodeAt(1) - p) + 65536;
    },
    v = f.all && !f.addEventListener,
    w =
      " style='position:relative;display:inline-block;" +
      (v ? "*display:inline;*zoom:1;'" : "'"),
    x = function (a, b) {
      a = a || "";
      var c = -1 !== a.indexOf("++"),
        d = 1;
      return (
        c && (a = a.split("++").join("")),
        function () {
          return (
            "<" + b + w + (a ? " class='" + a + (c ? d++ : "") + "'>" : ">")
          );
        }
      );
    },
    y =
      (d.SplitText =
      b.SplitText =
        function (a, b) {
          if (("string" == typeof a && (a = y.selector(a)), !a))
            throw "cannot split a null element.";
          (this.elements = j(a) ? k(a) : [a]),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = b || {}),
            this.split(b);
        }),
    z = function (a, b, c) {
      var d = a.nodeType;
      if (1 === d || 9 === d || 11 === d)
        for (a = a.firstChild; a; a = a.nextSibling) z(a, b, c);
      else (3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c));
    },
    A = function (a, b) {
      for (var c = b.length; --c > -1; ) a.push(b[c]);
    },
    B = function (a) {
      var b,
        c = [],
        d = a.length;
      for (b = 0; b !== d; c.push(a[b++]));
      return c;
    },
    C = function (a, b, c) {
      for (var d; a && a !== b; ) {
        if ((d = a._next || a.nextSibling))
          return d.textContent.charAt(0) === c;
        a = a.parentNode || a._parent;
      }
      return !1;
    },
    D = function (a) {
      var b,
        c,
        d = B(a.childNodes),
        e = d.length;
      for (b = 0; e > b; b++)
        (c = d[b]),
          c._isSplit
            ? D(c)
            : (b && 3 === c.previousSibling.nodeType
                ? (c.previousSibling.nodeValue +=
                    3 === c.nodeType ? c.nodeValue : c.firstChild.nodeValue)
                : 3 !== c.nodeType && a.insertBefore(c.firstChild, c),
              a.removeChild(c));
    },
    E = function (a, b, c, d, e, h, j) {
      var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w = g(a),
        x = i(a, "paddingLeft", w),
        y = -999,
        B = i(a, "borderBottomWidth", w) + i(a, "borderTopWidth", w),
        E = i(a, "borderLeftWidth", w) + i(a, "borderRightWidth", w),
        F = i(a, "paddingTop", w) + i(a, "paddingBottom", w),
        G = i(a, "paddingLeft", w) + i(a, "paddingRight", w),
        H = 0.2 * i(a, "fontSize"),
        I = i(a, "textAlign", w, !0),
        J = [],
        K = [],
        L = [],
        M = b.wordDelimiter || " ",
        N = b.span ? "span" : "div",
        O = b.type || b.split || "chars,words,lines",
        P = e && -1 !== O.indexOf("lines") ? [] : null,
        Q = -1 !== O.indexOf("words"),
        R = -1 !== O.indexOf("chars"),
        S = "absolute" === b.position || b.absolute === !0,
        T = b.linesClass,
        U = -1 !== (T || "").indexOf("++"),
        V = [];
      for (
        P &&
          1 === a.children.length &&
          a.children[0]._isSplit &&
          (a = a.children[0]),
          U && (T = T.split("++").join("")),
          l = a.getElementsByTagName("*"),
          m = l.length,
          o = [],
          k = 0;
        m > k;
        k++
      )
        o[k] = l[k];
      if (P || S)
        for (k = 0; m > k; k++)
          (n = o[k]),
            (p = n.parentNode === a),
            (p || S || (R && !Q)) &&
              ((v = n.offsetTop),
              P &&
                p &&
                Math.abs(v - y) > H &&
                "BR" !== n.nodeName &&
                ((q = []), P.push(q), (y = v)),
              S &&
                ((n._x = n.offsetLeft),
                (n._y = v),
                (n._w = n.offsetWidth),
                (n._h = n.offsetHeight)),
              P &&
                (((n._isSplit && p) ||
                  (!R && p) ||
                  (Q && p) ||
                  (!Q &&
                    n.parentNode.parentNode === a &&
                    !n.parentNode._isSplit)) &&
                  (q.push(n), (n._x -= x), C(n, a, M) && (n._wordEnd = !0)),
                "BR" === n.nodeName &&
                  n.nextSibling &&
                  "BR" === n.nextSibling.nodeName &&
                  P.push([])));
      for (k = 0; m > k; k++)
        (n = o[k]),
          (p = n.parentNode === a),
          "BR" !== n.nodeName
            ? (S &&
                ((s = n.style),
                Q ||
                  p ||
                  ((n._x += n.parentNode._x), (n._y += n.parentNode._y)),
                (s.left = n._x + "px"),
                (s.top = n._y + "px"),
                (s.position = "absolute"),
                (s.display = "block"),
                (s.width = n._w + 1 + "px"),
                (s.height = n._h + "px")),
              !Q && R
                ? n._isSplit
                  ? ((n._next = n.nextSibling), n.parentNode.appendChild(n))
                  : n.parentNode._isSplit
                  ? ((n._parent = n.parentNode),
                    !n.previousSibling &&
                      n.firstChild &&
                      (n.firstChild._isFirst = !0),
                    n.nextSibling &&
                      " " === n.nextSibling.textContent &&
                      !n.nextSibling.nextSibling &&
                      V.push(n.nextSibling),
                    (n._next =
                      n.nextSibling && n.nextSibling._isFirst
                        ? null
                        : n.nextSibling),
                    n.parentNode.removeChild(n),
                    o.splice(k--, 1),
                    m--)
                  : p ||
                    ((v = !n.nextSibling && C(n.parentNode, a, M)),
                    n.parentNode._parent && n.parentNode._parent.appendChild(n),
                    v && n.parentNode.appendChild(f.createTextNode(" ")),
                    b.span && (n.style.display = "inline"),
                    J.push(n))
                : n.parentNode._isSplit && !n._isSplit && "" !== n.innerHTML
                ? K.push(n)
                : R &&
                  !n._isSplit &&
                  (b.span && (n.style.display = "inline"), J.push(n)))
            : P || S
            ? (n.parentNode && n.parentNode.removeChild(n),
              o.splice(k--, 1),
              m--)
            : Q || a.appendChild(n);
      for (k = V.length; --k > -1; ) V[k].parentNode.removeChild(V[k]);
      if (P) {
        for (
          S &&
            ((t = f.createElement(N)),
            a.appendChild(t),
            (u = t.offsetWidth + "px"),
            (v = t.offsetParent === a ? 0 : a.offsetLeft),
            a.removeChild(t)),
            s = a.style.cssText,
            a.style.cssText = "display:none;";
          a.firstChild;

        )
          a.removeChild(a.firstChild);
        for (r = " " === M && (!S || (!Q && !R)), k = 0; k < P.length; k++) {
          for (
            q = P[k],
              t = f.createElement(N),
              t.style.cssText =
                "display:block;text-align:" +
                I +
                ";position:" +
                (S ? "absolute;" : "relative;"),
              T && (t.className = T + (U ? k + 1 : "")),
              L.push(t),
              m = q.length,
              l = 0;
            m > l;
            l++
          )
            "BR" !== q[l].nodeName &&
              ((n = q[l]),
              t.appendChild(n),
              r && n._wordEnd && t.appendChild(f.createTextNode(" ")),
              S &&
                (0 === l &&
                  ((t.style.top = n._y + "px"), (t.style.left = x + v + "px")),
                (n.style.top = "0px"),
                v && (n.style.left = n._x - v + "px")));
          0 === m
            ? (t.innerHTML = "&nbsp;")
            : Q || R || (D(t), z(t, String.fromCharCode(160), " ")),
            S && ((t.style.width = u), (t.style.height = n._h + "px")),
            a.appendChild(t);
        }
        a.style.cssText = s;
      }
      S &&
        (j > a.clientHeight &&
          ((a.style.height = j - F + "px"),
          a.clientHeight < j && (a.style.height = j + B + "px")),
        h > a.clientWidth &&
          ((a.style.width = h - G + "px"),
          a.clientWidth < h && (a.style.width = h + E + "px"))),
        A(c, J),
        A(d, K),
        A(e, L);
    },
    F = function (a, b, c, d) {
      var g,
        h,
        i,
        j,
        k,
        p,
        v,
        w,
        x,
        y = b.span ? "span" : "div",
        A = b.type || b.split || "chars,words,lines",
        B = (-1 !== A.indexOf("words"), -1 !== A.indexOf("chars")),
        C = "absolute" === b.position || b.absolute === !0,
        D = b.wordDelimiter || " ",
        E = " " !== D ? "" : C ? "&#173; " : " ",
        F = b.span ? "</span>" : "</div>",
        G = !0,
        H = f.createElement("div"),
        I = a.parentNode;
      for (
        I.insertBefore(H, a),
          H.textContent = a.nodeValue,
          I.removeChild(a),
          a = H,
          g = e(a),
          v = -1 !== g.indexOf("<"),
          b.reduceWhiteSpace !== !1 && (g = g.replace(m, " ").replace(l, "")),
          v && (g = g.split("<").join("{{LT}}")),
          k = g.length,
          h = (" " === g.charAt(0) ? E : "") + c(),
          i = 0;
        k > i;
        i++
      )
        if (((p = g.charAt(i)), p === D && g.charAt(i - 1) !== D && i)) {
          for (h += G ? F : "", G = !1; g.charAt(i + 1) === D; ) (h += E), i++;
          i === k - 1
            ? (h += E)
            : ")" !== g.charAt(i + 1) && ((h += E + c()), (G = !0));
        } else
          "{" === p && "{{LT}}" === g.substr(i, 6)
            ? ((h += B ? d() + "{{LT}}</" + y + ">" : "{{LT}}"), (i += 5))
            : (p.charCodeAt(0) >= n && p.charCodeAt(0) <= o) ||
              (g.charCodeAt(i + 1) >= 65024 && g.charCodeAt(i + 1) <= 65039)
            ? ((w = u(g.substr(i, 2))),
              (x = u(g.substr(i + 2, 2))),
              (j =
                (w >= q && r >= w && x >= q && r >= x) || (x >= s && t >= x)
                  ? 4
                  : 2),
              (h +=
                B && " " !== p
                  ? d() + g.substr(i, j) + "</" + y + ">"
                  : g.substr(i, j)),
              (i += j - 1))
            : (h += B && " " !== p ? d() + p + "</" + y + ">" : p);
      (a.outerHTML = h + (G ? F : "")), v && z(I, "{{LT}}", "<");
    },
    G = function (a, b, c, d) {
      var e,
        f,
        g = B(a.childNodes),
        h = g.length,
        j = "absolute" === b.position || b.absolute === !0;
      if (3 !== a.nodeType || h > 1) {
        for (b.absolute = !1, e = 0; h > e; e++)
          (f = g[e]),
            (3 !== f.nodeType || /\S+/.test(f.nodeValue)) &&
              (j &&
                3 !== f.nodeType &&
                "inline" === i(f, "display", null, !0) &&
                ((f.style.display = "inline-block"),
                (f.style.position = "relative")),
              (f._isSplit = !0),
              G(f, b, c, d));
        return (b.absolute = j), void (a._isSplit = !0);
      }
      F(a, b, c, d);
    },
    H = y.prototype;
  (H.split = function (a) {
    this.isSplit && this.revert(),
      (this.vars = a = a || this.vars),
      (this._originals.length =
        this.chars.length =
        this.words.length =
        this.lines.length =
          0);
    for (
      var b,
        c,
        d,
        e = this.elements.length,
        f = a.span ? "span" : "div",
        g =
          ("absolute" === a.position || a.absolute === !0, x(a.wordsClass, f)),
        h = x(a.charsClass, f);
      --e > -1;

    )
      (d = this.elements[e]),
        (this._originals[e] = d.innerHTML),
        (b = d.clientHeight),
        (c = d.clientWidth),
        G(d, a, g, h),
        E(d, a, this.chars, this.words, this.lines, c, b);
    return (
      this.chars.reverse(),
      this.words.reverse(),
      this.lines.reverse(),
      (this.isSplit = !0),
      this
    );
  }),
    (H.revert = function () {
      if (!this._originals) throw "revert() call wasn't scoped properly.";
      for (var a = this._originals.length; --a > -1; )
        this.elements[a].innerHTML = this._originals[a];
      return (
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.isSplit = !1),
        this
      );
    }),
    (y.selector =
      a.$ ||
      a.jQuery ||
      function (b) {
        var c = a.$ || a.jQuery;
        return c
          ? ((y.selector = c), c(b))
          : "undefined" == typeof document
          ? b
          : document.querySelectorAll
          ? document.querySelectorAll(b)
          : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
      }),
    (y.version = "0.5.6");
})(_gsScope),
  (function (a) {
    "use strict";
    var b = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[a];
    };
    "function" == typeof define && define.amd
      ? define([], b)
      : "undefined" != typeof module &&
        module.exports &&
        (module.exports = b());
  })("SplitText");

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(t)
    : "object" == typeof exports
    ? (module.exports = t())
    : (e.ScrollMagic = t());
})(this, function () {
  "use strict";
  var _ = function () {};
  (_.version = "2.0.7"), window.addEventListener("mousewheel", function () {});
  var P = "data-scrollmagic-pin-spacer";
  _.Controller = function (e) {
    var n,
      r,
      i = "REVERSE",
      t = "PAUSED",
      o = z.defaults,
      s = this,
      a = R.extend({}, o, e),
      l = [],
      c = !1,
      f = 0,
      u = t,
      d = !0,
      h = 0,
      p = !0,
      g = function () {
        0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval));
      },
      v = function () {
        return a.vertical
          ? R.get.scrollTop(a.container)
          : R.get.scrollLeft(a.container);
      },
      m = function () {
        return a.vertical
          ? R.get.height(a.container)
          : R.get.width(a.container);
      },
      w = (this._setScrollPos = function (e) {
        a.vertical
          ? d
            ? window.scrollTo(R.get.scrollLeft(), e)
            : (a.container.scrollTop = e)
          : d
          ? window.scrollTo(e, R.get.scrollTop())
          : (a.container.scrollLeft = e);
      }),
      y = function () {
        if (p && c) {
          var e = R.type.Array(c) ? c : l.slice(0);
          c = !1;
          var t = f,
            n = (f = s.scrollPos()) - t;
          0 !== n && (u = 0 < n ? "FORWARD" : i),
            u === i && e.reverse(),
            e.forEach(function (e, t) {
              e.update(!0);
            });
        }
      },
      S = function () {
        n = R.rAF(y);
      },
      b = function (e) {
        "resize" == e.type && ((h = m()), (u = t)), !0 !== c && ((c = !0), S());
      },
      E = function () {
        if (!d && h != m()) {
          var t;
          try {
            t = new Event("resize", { bubbles: !1, cancelable: !1 });
          } catch (e) {
            (t = document.createEvent("Event")).initEvent("resize", !1, !1);
          }
          a.container.dispatchEvent(t);
        }
        l.forEach(function (e, t) {
          e.refresh();
        }),
          g();
      };
    this._options = a;
    var x = function (e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return (
        t.sort(function (e, t) {
          return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
        }),
        t
      );
    };
    return (
      (this.addScene = function (e) {
        if (R.type.Array(e))
          e.forEach(function (e, t) {
            s.addScene(e);
          });
        else if (e instanceof _.Scene)
          if (e.controller() !== s) e.addTo(s);
          else if (l.indexOf(e) < 0)
            for (var t in (l.push(e),
            (l = x(l)),
            e.on("shift.controller_sort", function () {
              l = x(l);
            }),
            a.globalSceneOptions))
              e[t] && e[t].call(e, a.globalSceneOptions[t]);
        return s;
      }),
      (this.removeScene = function (e) {
        if (R.type.Array(e))
          e.forEach(function (e, t) {
            s.removeScene(e);
          });
        else {
          var t = l.indexOf(e);
          -1 < t &&
            (e.off("shift.controller_sort"), l.splice(t, 1), e.remove());
        }
        return s;
      }),
      (this.updateScene = function (e, n) {
        return (
          R.type.Array(e)
            ? e.forEach(function (e, t) {
                s.updateScene(e, n);
              })
            : n
            ? e.update(!0)
            : !0 !== c &&
              e instanceof _.Scene &&
              (-1 == (c = c || []).indexOf(e) && c.push(e), (c = x(c)), S()),
          s
        );
      }),
      (this.update = function (e) {
        return b({ type: "resize" }), e && y(), s;
      }),
      (this.scrollTo = function (e, t) {
        if (R.type.Number(e)) w.call(a.container, e, t);
        else if (e instanceof _.Scene)
          e.controller() === s && s.scrollTo(e.scrollOffset(), t);
        else if (R.type.Function(e)) w = e;
        else {
          var n = R.get.elements(e)[0];
          if (n) {
            for (; n.parentNode.hasAttribute(P); ) n = n.parentNode;
            var r = a.vertical ? "top" : "left",
              i = R.get.offset(a.container),
              o = R.get.offset(n);
            d || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t);
          }
        }
        return s;
      }),
      (this.scrollPos = function (e) {
        return arguments.length
          ? (R.type.Function(e) && (v = e), s)
          : v.call(s);
      }),
      (this.info = function (e) {
        var t = {
          size: h,
          vertical: a.vertical,
          scrollPos: f,
          scrollDirection: u,
          container: a.container,
          isDocument: d,
        };
        return arguments.length ? (void 0 !== t[e] ? t[e] : void 0) : t;
      }),
      (this.loglevel = function (e) {
        return s;
      }),
      (this.enabled = function (e) {
        return arguments.length
          ? (p != e && ((p = !!e), s.updateScene(l, !0)), s)
          : p;
      }),
      (this.destroy = function (e) {
        window.clearTimeout(r);
        for (var t = l.length; t--; ) l[t].destroy(e);
        return (
          a.container.removeEventListener("resize", b),
          a.container.removeEventListener("scroll", b),
          R.cAF(n),
          null
        );
      }),
      (function () {
        for (var e in a) o.hasOwnProperty(e) || delete a[e];
        if (((a.container = R.get.elements(a.container)[0]), !a.container))
          throw "ScrollMagic.Controller init failed.";
        (d =
          a.container === window ||
          a.container === document.body ||
          !document.body.contains(a.container)) && (a.container = window),
          (h = m()),
          a.container.addEventListener("resize", b),
          a.container.addEventListener("scroll", b);
        var t = parseInt(a.refreshInterval, 10);
        (a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval), g();
      })(),
      s
    );
  };
  var z = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100,
    },
  };
  (_.Controller.addOption = function (e, t) {
    z.defaults[e] = t;
  }),
    (_.Controller.extend = function (e) {
      var t = this;
      (_.Controller = function () {
        return (
          t.apply(this, arguments),
          (this.$super = R.extend({}, this)),
          e.apply(this, arguments) || this
        );
      }),
        R.extend(_.Controller, t),
        (_.Controller.prototype = t.prototype),
        (_.Controller.prototype.constructor = _.Controller);
    }),
    (_.Scene = function (e) {
      var n,
        l,
        c = "BEFORE",
        f = "DURING",
        u = "AFTER",
        r = D.defaults,
        d = this,
        h = R.extend({}, r, e),
        p = c,
        g = 0,
        a = { start: 0, end: 0 },
        v = 0,
        i = !0,
        s = {};
      (this.on = function (e, i) {
        return (
          R.type.Function(i) &&
            (e = e.trim().split(" ")).forEach(function (e) {
              var t = e.split("."),
                n = t[0],
                r = t[1];
              "*" != n &&
                (s[n] || (s[n] = []),
                s[n].push({ namespace: r || "", callback: i }));
            }),
          d
        );
      }),
        (this.off = function (e, o) {
          return (
            e &&
              (e = e.trim().split(" ")).forEach(function (e, t) {
                var n = e.split("."),
                  r = n[0],
                  i = n[1] || "";
                ("*" === r ? Object.keys(s) : [r]).forEach(function (e) {
                  for (var t = s[e] || [], n = t.length; n--; ) {
                    var r = t[n];
                    !r ||
                      (i !== r.namespace && "*" !== i) ||
                      (o && o != r.callback) ||
                      t.splice(n, 1);
                  }
                  t.length || delete s[e];
                });
              }),
            d
          );
        }),
        (this.trigger = function (e, n) {
          if (e) {
            var t = e.trim().split("."),
              r = t[0],
              i = t[1],
              o = s[r];
            o &&
              o.forEach(function (e, t) {
                (i && i !== e.namespace) ||
                  e.callback.call(d, new _.Event(r, e.namespace, d, n));
              });
          }
          return d;
        }),
        d
          .on("change.internal", function (e) {
            "loglevel" !== e.what &&
              "tweenChanges" !== e.what &&
              ("triggerElement" === e.what
                ? y()
                : "reverse" === e.what && d.update());
          })
          .on("shift.internal", function (e) {
            t(), d.update();
          }),
        (this.addTo = function (e) {
          return (
            e instanceof _.Controller &&
              l != e &&
              (l && l.removeScene(d),
              (l = e),
              E(),
              o(!0),
              y(!0),
              t(),
              l.info("container").addEventListener("resize", S),
              e.addScene(d),
              d.trigger("add", { controller: l }),
              d.update()),
            d
          );
        }),
        (this.enabled = function (e) {
          return arguments.length
            ? (i != e && ((i = !!e), d.update(!0)), d)
            : i;
        }),
        (this.remove = function () {
          if (l) {
            l.info("container").removeEventListener("resize", S);
            var e = l;
            (l = void 0), e.removeScene(d), d.trigger("remove");
          }
          return d;
        }),
        (this.destroy = function (e) {
          return (
            d.trigger("destroy", { reset: e }), d.remove(), d.off("*.*"), null
          );
        }),
        (this.update = function (e) {
          if (l)
            if (e)
              if (l.enabled() && i) {
                var t,
                  n = l.info("scrollPos");
                (t =
                  0 < h.duration
                    ? (n - a.start) / (a.end - a.start)
                    : n >= a.start
                    ? 1
                    : 0),
                  d.trigger("update", {
                    startPos: a.start,
                    endPos: a.end,
                    scrollPos: n,
                  }),
                  d.progress(t);
              } else m && p === f && C(!0);
            else l.updateScene(d, !1);
          return d;
        }),
        (this.refresh = function () {
          return o(), y(), d;
        }),
        (this.progress = function (e) {
          if (arguments.length) {
            var t = !1,
              n = p,
              r = l ? l.info("scrollDirection") : "PAUSED",
              i = h.reverse || g <= e;
            if (
              (0 === h.duration
                ? ((t = g != e), (p = 0 === (g = e < 1 && i ? 0 : 1) ? c : f))
                : e < 0 && p !== c && i
                ? ((p = c), (t = !(g = 0)))
                : 0 <= e && e < 1 && i
                ? ((g = e), (p = f), (t = !0))
                : 1 <= e && p !== u
                ? ((g = 1), (p = u), (t = !0))
                : p !== f || i || C(),
              t)
            ) {
              var o = { progress: g, state: p, scrollDirection: r },
                s = p != n,
                a = function (e) {
                  d.trigger(e, o);
                };
              s && n !== f && (a("enter"), a(n === c ? "start" : "end")),
                a("progress"),
                s && p !== f && (a(p === c ? "start" : "end"), a("leave"));
            }
            return d;
          }
          return g;
        });
      var m,
        w,
        t = function () {
          (a = { start: v + h.offset }),
            l &&
              h.triggerElement &&
              (a.start -= l.info("size") * h.triggerHook),
            (a.end = a.start + h.duration);
        },
        o = function (e) {
          if (n) {
            var t = "duration";
            x(t, n.call(d)) &&
              !e &&
              (d.trigger("change", { what: t, newval: h[t] }),
              d.trigger("shift", { reason: t }));
          }
        },
        y = function (e) {
          var t = 0,
            n = h.triggerElement;
          if (l && (n || 0 < v)) {
            if (n)
              if (n.parentNode) {
                for (
                  var r = l.info(),
                    i = R.get.offset(r.container),
                    o = r.vertical ? "top" : "left";
                  n.parentNode.hasAttribute(P);

                )
                  n = n.parentNode;
                var s = R.get.offset(n);
                r.isDocument || (i[o] -= l.scrollPos()), (t = s[o] - i[o]);
              } else d.triggerElement(void 0);
            var a = t != v;
            (v = t),
              a &&
                !e &&
                d.trigger("shift", { reason: "triggerElementPosition" });
          }
        },
        S = function (e) {
          0 < h.triggerHook &&
            d.trigger("shift", { reason: "containerResize" });
        },
        b = R.extend(D.validate, {
          duration: function (t) {
            if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
              var e = parseFloat(t) / 100;
              t = function () {
                return l ? l.info("size") * e : 0;
              };
            }
            if (R.type.Function(t)) {
              n = t;
              try {
                t = parseFloat(n.call(d));
              } catch (e) {
                t = -1;
              }
            }
            if (((t = parseFloat(t)), !R.type.Number(t) || t < 0))
              throw (n && (n = void 0), 0);
            return t;
          },
        }),
        E = function (e) {
          (e = arguments.length ? [e] : Object.keys(b)).forEach(function (
            t,
            e
          ) {
            var n;
            if (b[t])
              try {
                n = b[t](h[t]);
              } catch (e) {
                n = r[t];
              } finally {
                h[t] = n;
              }
          });
        },
        x = function (e, t) {
          var n = !1,
            r = h[e];
          return h[e] != t && ((h[e] = t), E(e), (n = r != h[e])), n;
        },
        z = function (t) {
          d[t] ||
            (d[t] = function (e) {
              return arguments.length
                ? ("duration" === t && (n = void 0),
                  x(t, e) &&
                    (d.trigger("change", { what: t, newval: h[t] }),
                    -1 < D.shifts.indexOf(t) &&
                      d.trigger("shift", { reason: t })),
                  d)
                : h[t];
            });
        };
      (this.controller = function () {
        return l;
      }),
        (this.state = function () {
          return p;
        }),
        (this.scrollOffset = function () {
          return a.start;
        }),
        (this.triggerPosition = function () {
          var e = h.offset;
          return (
            l &&
              (h.triggerElement
                ? (e += v)
                : (e += l.info("size") * d.triggerHook())),
            e
          );
        }),
        d
          .on("shift.internal", function (e) {
            var t = "duration" === e.reason;
            ((p === u && t) || (p === f && 0 === h.duration)) && C(), t && F();
          })
          .on("progress.internal", function (e) {
            C();
          })
          .on("add.internal", function (e) {
            F();
          })
          .on("destroy.internal", function (e) {
            d.removePin(e.reset);
          });
      var C = function (e) {
          if (m && l) {
            var t = l.info(),
              n = w.spacer.firstChild;
            if (e || p !== f) {
              var r = {
                  position: w.inFlow ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                },
                i = R.css(n, "position") != r.position;
              w.pushFollowers
                ? 0 < h.duration &&
                  (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top"))
                    ? (i = !0)
                    : p === c &&
                      0 === parseFloat(R.css(w.spacer, "padding-bottom")) &&
                      (i = !0))
                : (r[t.vertical ? "top" : "left"] = h.duration * g),
                R.css(n, r),
                i && F();
            } else {
              "fixed" != R.css(n, "position") &&
                (R.css(n, { position: "fixed" }), F());
              var o = R.get.offset(w.spacer, !0),
                s =
                  h.reverse || 0 === h.duration
                    ? t.scrollPos - a.start
                    : Math.round(g * h.duration * 10) / 10;
              (o[t.vertical ? "top" : "left"] += s),
                R.css(w.spacer.firstChild, { top: o.top, left: o.left });
            }
          }
        },
        F = function () {
          if (m && l && w.inFlow) {
            var e = p === f,
              t = l.info("vertical"),
              n = w.spacer.firstChild,
              r = R.isMarginCollapseType(R.css(w.spacer, "display")),
              i = {};
            w.relSize.width || w.relSize.autoFullWidth
              ? e
                ? R.css(m, { width: R.get.width(w.spacer) })
                : R.css(m, { width: "100%" })
              : ((i["min-width"] = R.get.width(t ? m : n, !0, !0)),
                (i.width = e ? i["min-width"] : "auto")),
              w.relSize.height
                ? e
                  ? R.css(m, {
                      height:
                        R.get.height(w.spacer) -
                        (w.pushFollowers ? h.duration : 0),
                    })
                  : R.css(m, { height: "100%" })
                : ((i["min-height"] = R.get.height(t ? n : m, !0, !r)),
                  (i.height = e ? i["min-height"] : "auto")),
              w.pushFollowers &&
                ((i["padding" + (t ? "Top" : "Left")] = h.duration * g),
                (i["padding" + (t ? "Bottom" : "Right")] =
                  h.duration * (1 - g))),
              R.css(w.spacer, i);
          }
        },
        L = function () {
          l && m && p === f && !l.info("isDocument") && C();
        },
        T = function () {
          l &&
            m &&
            p === f &&
            (((w.relSize.width || w.relSize.autoFullWidth) &&
              R.get.width(window) != R.get.width(w.spacer.parentNode)) ||
              (w.relSize.height &&
                R.get.height(window) != R.get.height(w.spacer.parentNode))) &&
            F();
        },
        A = function (e) {
          l &&
            m &&
            p === f &&
            !l.info("isDocument") &&
            (e.preventDefault(),
            l._setScrollPos(
              l.info("scrollPos") -
                ((e.wheelDelta ||
                  e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 ||
                  30 * -e.detail)
            ));
        };
      (this.setPin = function (e, t) {
        if (
          ((t = R.extend(
            {},
            { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" },
            t
          )),
          !(e = R.get.elements(e)[0]))
        )
          return d;
        if ("fixed" === R.css(e, "position")) return d;
        if (m) {
          if (m === e) return d;
          d.removePin();
        }
        var n = (m = e).parentNode.style.display,
          r = [
            "top",
            "left",
            "bottom",
            "right",
            "margin",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
          ];
        m.parentNode.style.display = "none";
        var i = "absolute" != R.css(m, "position"),
          o = R.css(m, r.concat(["display"])),
          s = R.css(m, ["width", "height"]);
        (m.parentNode.style.display = n),
          !i && t.pushFollowers && (t.pushFollowers = !1);
        var a = m.parentNode.insertBefore(document.createElement("div"), m),
          l = R.extend(o, {
            position: i ? "relative" : "absolute",
            boxSizing: "content-box",
            mozBoxSizing: "content-box",
            webkitBoxSizing: "content-box",
          });
        if (
          (i || R.extend(l, R.css(m, ["width", "height"])),
          R.css(a, l),
          a.setAttribute(P, ""),
          R.addClass(a, t.spacerClass),
          (w = {
            spacer: a,
            relSize: {
              width: "%" === s.width.slice(-1),
              height: "%" === s.height.slice(-1),
              autoFullWidth:
                "auto" === s.width && i && R.isMarginCollapseType(o.display),
            },
            pushFollowers: t.pushFollowers,
            inFlow: i,
          }),
          !m.___origStyle)
        ) {
          m.___origStyle = {};
          var c = m.style;
          r.concat([
            "width",
            "height",
            "position",
            "boxSizing",
            "mozBoxSizing",
            "webkitBoxSizing",
          ]).forEach(function (e) {
            m.___origStyle[e] = c[e] || "";
          });
        }
        return (
          w.relSize.width && R.css(a, { width: s.width }),
          w.relSize.height && R.css(a, { height: s.height }),
          a.appendChild(m),
          R.css(m, {
            position: i ? "relative" : "absolute",
            margin: "auto",
            top: "auto",
            left: "auto",
            bottom: "auto",
            right: "auto",
          }),
          (w.relSize.width || w.relSize.autoFullWidth) &&
            R.css(m, {
              boxSizing: "border-box",
              mozBoxSizing: "border-box",
              webkitBoxSizing: "border-box",
            }),
          window.addEventListener("scroll", L),
          window.addEventListener("resize", L),
          window.addEventListener("resize", T),
          m.addEventListener("mousewheel", A),
          m.addEventListener("DOMMouseScroll", A),
          C(),
          d
        );
      }),
        (this.removePin = function (e) {
          if (m) {
            if ((p === f && C(!0), e || !l)) {
              var t = w.spacer.firstChild;
              if (t.hasAttribute(P)) {
                var n = w.spacer.style,
                  r = {};
                [
                  "margin",
                  "marginLeft",
                  "marginRight",
                  "marginTop",
                  "marginBottom",
                ].forEach(function (e) {
                  r[e] = n[e] || "";
                }),
                  R.css(t, r);
              }
              w.spacer.parentNode.insertBefore(t, w.spacer),
                w.spacer.parentNode.removeChild(w.spacer),
                m.parentNode.hasAttribute(P) ||
                  (R.css(m, m.___origStyle), delete m.___origStyle);
            }
            window.removeEventListener("scroll", L),
              window.removeEventListener("resize", L),
              window.removeEventListener("resize", T),
              m.removeEventListener("mousewheel", A),
              m.removeEventListener("DOMMouseScroll", A),
              (m = void 0);
          }
          return d;
        });
      var N,
        O = [];
      return (
        d.on("destroy.internal", function (e) {
          d.removeClassToggle(e.reset);
        }),
        (this.setClassToggle = function (e, t) {
          var n = R.get.elements(e);
          return (
            0 !== n.length &&
              R.type.String(t) &&
              (0 < O.length && d.removeClassToggle(),
              (N = t),
              (O = n),
              d.on("enter.internal_class leave.internal_class", function (e) {
                var n = "enter" === e.type ? R.addClass : R.removeClass;
                O.forEach(function (e, t) {
                  n(e, N);
                });
              })),
            d
          );
        }),
        (this.removeClassToggle = function (e) {
          return (
            e &&
              O.forEach(function (e, t) {
                R.removeClass(e, N);
              }),
            d.off("start.internal_class end.internal_class"),
            (N = void 0),
            (O = []),
            d
          );
        }),
        (function () {
          for (var e in h) r.hasOwnProperty(e) || delete h[e];
          for (var t in r) z(t);
          E();
        })(),
        d
      );
    });
  var D = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: 0.5,
      reverse: !0,
      loglevel: 2,
    },
    validate: {
      offset: function (e) {
        if (((e = parseFloat(e)), !R.type.Number(e))) throw 0;
        return e;
      },
      triggerElement: function (e) {
        if ((e = e || void 0)) {
          var t = R.get.elements(e)[0];
          if (!t || !t.parentNode) throw 0;
          e = t;
        }
        return e;
      },
      triggerHook: function (e) {
        var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
        if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
        else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function (e) {
        return !!e;
      },
    },
    shifts: ["duration", "offset", "triggerHook"],
  };
  (_.Scene.addOption = function (e, t, n, r) {
    e in D.defaults ||
      ((D.defaults[e] = t), (D.validate[e] = n), r && D.shifts.push(e));
  }),
    (_.Scene.extend = function (e) {
      var t = this;
      (_.Scene = function () {
        return (
          t.apply(this, arguments),
          (this.$super = R.extend({}, this)),
          e.apply(this, arguments) || this
        );
      }),
        R.extend(_.Scene, t),
        (_.Scene.prototype = t.prototype),
        (_.Scene.prototype.constructor = _.Scene);
    }),
    (_.Event = function (e, t, n, r) {
      for (var i in (r = r || {})) this[i] = r[i];
      return (
        (this.type = e),
        (this.target = this.currentTarget = n),
        (this.namespace = t || ""),
        (this.timeStamp = this.timestamp = Date.now()),
        this
      );
    });
  var R = (_._util = (function (s) {
    var n,
      e = {},
      a = function (e) {
        return parseFloat(e) || 0;
      },
      l = function (e) {
        return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
      },
      r = function (e, t, n, r) {
        if ((t = t === document ? s : t) === s) r = !1;
        else if (!u.DomElement(t)) return 0;
        e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        var i =
          (n
            ? t["offset" + e] || t["outer" + e]
            : t["client" + e] || t["inner" + e]) || 0;
        if (n && r) {
          var o = l(t);
          i +=
            "Height" === e
              ? a(o.marginTop) + a(o.marginBottom)
              : a(o.marginLeft) + a(o.marginRight);
        }
        return i;
      },
      c = function (e) {
        return e
          .replace(/^[^a-z]+([a-z])/g, "$1")
          .replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          });
      };
    (e.extend = function (e) {
      for (e = e || {}, n = 1; n < arguments.length; n++)
        if (arguments[n])
          for (var t in arguments[n])
            arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
      return e;
    }),
      (e.isMarginCollapseType = function (e) {
        return (
          -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e)
        );
      });
    var i = 0,
      t = ["ms", "moz", "webkit", "o"],
      o = s.requestAnimationFrame,
      f = s.cancelAnimationFrame;
    for (n = 0; !o && n < 4; ++n)
      (o = s[t[n] + "RequestAnimationFrame"]),
        (f =
          s[t[n] + "CancelAnimationFrame"] ||
          s[t[n] + "CancelRequestAnimationFrame"]);
    o ||
      (o = function (e) {
        var t = new Date().getTime(),
          n = Math.max(0, 16 - (t - i)),
          r = s.setTimeout(function () {
            e(t + n);
          }, n);
        return (i = t + n), r;
      }),
      f ||
        (f = function (e) {
          s.clearTimeout(e);
        }),
      (e.rAF = o.bind(s)),
      (e.cAF = f.bind(s));
    var u = (e.type = function (e) {
      return Object.prototype.toString
        .call(e)
        .replace(/^\[object (.+)\]$/, "$1")
        .toLowerCase();
    });
    (u.String = function (e) {
      return "string" === u(e);
    }),
      (u.Function = function (e) {
        return "function" === u(e);
      }),
      (u.Array = function (e) {
        return Array.isArray(e);
      }),
      (u.Number = function (e) {
        return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
      }),
      (u.DomElement = function (e) {
        return "object" == typeof HTMLElement ||
          "function" == typeof HTMLElement
          ? e instanceof HTMLElement || e instanceof SVGElement
          : e &&
              "object" == typeof e &&
              null !== e &&
              1 === e.nodeType &&
              "string" == typeof e.nodeName;
      });
    var d = (e.get = {});
    return (
      (d.elements = function (e) {
        var t = [];
        if (u.String(e))
          try {
            e = document.querySelectorAll(e);
          } catch (e) {
            return t;
          }
        if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList)
          for (var n = 0, r = (t.length = e.length); n < r; n++) {
            var i = e[n];
            t[n] = u.DomElement(i) ? i : d.elements(i);
          }
        else (u.DomElement(e) || e === document || e === s) && (t = [e]);
        return t;
      }),
      (d.scrollTop = function (e) {
        return e && "number" == typeof e.scrollTop
          ? e.scrollTop
          : s.pageYOffset || 0;
      }),
      (d.scrollLeft = function (e) {
        return e && "number" == typeof e.scrollLeft
          ? e.scrollLeft
          : s.pageXOffset || 0;
      }),
      (d.width = function (e, t, n) {
        return r("width", e, t, n);
      }),
      (d.height = function (e, t, n) {
        return r("height", e, t, n);
      }),
      (d.offset = function (e, t) {
        var n = { top: 0, left: 0 };
        if (e && e.getBoundingClientRect) {
          var r = e.getBoundingClientRect();
          (n.top = r.top),
            (n.left = r.left),
            t || ((n.top += d.scrollTop()), (n.left += d.scrollLeft()));
        }
        return n;
      }),
      (e.addClass = function (e, t) {
        t && (e.classList ? e.classList.add(t) : (e.className += " " + t));
      }),
      (e.removeClass = function (e, t) {
        t &&
          (e.classList
            ? e.classList.remove(t)
            : (e.className = e.className.replace(
                RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
              )));
      }),
      (e.css = function (e, t) {
        if (u.String(t)) return l(e)[c(t)];
        if (u.Array(t)) {
          var n = {},
            r = l(e);
          return (
            t.forEach(function (e, t) {
              n[e] = r[c(e)];
            }),
            n
          );
        }
        for (var i in t) {
          var o = t[i];
          o == parseFloat(o) && (o += "px"), (e.style[c(i)] = o);
        }
      }),
      e
    );
  })(window || {}));
  return _;
});

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/*!
 * Packery layout mode PACKAGED v2.0.1
 * sub-classes Packery
 */

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define("packery/js/rect", b)
    : "object" == typeof module && module.exports
    ? (module.exports = b())
    : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
})(window, function () {
  function a(b) {
    for (var c in a.defaults) this[c] = a.defaults[c];
    for (c in b) this[c] = b[c];
  }
  a.defaults = { x: 0, y: 0, width: 0, height: 0 };
  var b = a.prototype;
  return (
    (b.contains = function (a) {
      var b = a.width || 0,
        c = a.height || 0;
      return (
        this.x <= a.x &&
        this.y <= a.y &&
        this.x + this.width >= a.x + b &&
        this.y + this.height >= a.y + c
      );
    }),
    (b.overlaps = function (a) {
      var b = this.x + this.width,
        c = this.y + this.height,
        d = a.x + a.width,
        e = a.y + a.height;
      return this.x < d && b > a.x && this.y < e && c > a.y;
    }),
    (b.getMaximalFreeRects = function (b) {
      if (!this.overlaps(b)) return !1;
      var c,
        d = [],
        e = this.x + this.width,
        f = this.y + this.height,
        g = b.x + b.width,
        h = b.y + b.height;
      return (
        this.y < b.y &&
          ((c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y,
          })),
          d.push(c)),
        e > g &&
          ((c = new a({ x: g, y: this.y, width: e - g, height: this.height })),
          d.push(c)),
        f > h &&
          ((c = new a({ x: this.x, y: h, width: this.width, height: f - h })),
          d.push(c)),
        this.x < b.x &&
          ((c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height,
          })),
          d.push(c)),
        d
      );
    }),
    (b.canFit = function (a) {
      return this.width >= a.width && this.height >= a.height;
    }),
    a
  );
}),
  (function (a, b) {
    if ("function" == typeof define && define.amd)
      define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof module && module.exports)
      module.exports = b(require("./rect"));
    else {
      var c = (a.Packery = a.Packery || {});
      c.Packer = b(c.Rect);
    }
  })(window, function (a) {
    function b(a, b, c) {
      (this.width = a || 0),
        (this.height = b || 0),
        (this.sortDirection = c || "downwardLeftToRight"),
        this.reset();
    }
    var c = b.prototype;
    (c.reset = function () {
      this.spaces = [];
      var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
      this.spaces.push(b),
        (this.sorter = d[this.sortDirection] || d.downwardLeftToRight);
    }),
      (c.pack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b];
          if (c.canFit(a)) {
            this.placeInSpace(a, c);
            break;
          }
        }
      }),
      (c.columnPack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b],
            d =
              c.x <= a.x &&
              c.x + c.width >= a.x + a.width &&
              c.height >= a.height - 0.01;
          if (d) {
            (a.y = c.y), this.placed(a);
            break;
          }
        }
      }),
      (c.rowPack = function (a) {
        for (var b = 0; b < this.spaces.length; b++) {
          var c = this.spaces[b],
            d =
              c.y <= a.y &&
              c.y + c.height >= a.y + a.height &&
              c.width >= a.width - 0.01;
          if (d) {
            (a.x = c.x), this.placed(a);
            break;
          }
        }
      }),
      (c.placeInSpace = function (a, b) {
        (a.x = b.x), (a.y = b.y), this.placed(a);
      }),
      (c.placed = function (a) {
        for (var b = [], c = 0; c < this.spaces.length; c++) {
          var d = this.spaces[c],
            e = d.getMaximalFreeRects(a);
          e ? b.push.apply(b, e) : b.push(d);
        }
        (this.spaces = b), this.mergeSortSpaces();
      }),
      (c.mergeSortSpaces = function () {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
      }),
      (c.addSpace = function (a) {
        this.spaces.push(a), this.mergeSortSpaces();
      }),
      (b.mergeRects = function (a) {
        var b = 0,
          c = a[b];
        a: for (; c; ) {
          for (var d = 0, e = a[b + d]; e; ) {
            if (e == c) d++;
            else {
              if (e.contains(c)) {
                a.splice(b, 1), (c = a[b]);
                continue a;
              }
              c.contains(e) ? a.splice(b + d, 1) : d++;
            }
            e = a[b + d];
          }
          b++, (c = a[b]);
        }
        return a;
      });
    var d = {
      downwardLeftToRight: function (a, b) {
        return a.y - b.y || a.x - b.x;
      },
      rightwardTopToBottom: function (a, b) {
        return a.x - b.x || a.y - b.y;
      },
    };
    return b;
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define("packery/js/item", ["outlayer/outlayer", "./rect"], b)
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("outlayer"), require("./rect")))
      : (a.Packery.Item = b(a.Outlayer, a.Packery.Rect));
  })(window, function (a, b) {
    var c = document.documentElement.style,
      d = "string" == typeof c.transform ? "transform" : "WebkitTransform",
      e = function () {
        a.Item.apply(this, arguments);
      },
      f = (e.prototype = Object.create(a.Item.prototype)),
      g = f._create;
    f._create = function () {
      g.call(this), (this.rect = new b());
    };
    var h = f.moveTo;
    return (
      (f.moveTo = function (a, b) {
        var c = Math.abs(this.position.x - a),
          d = Math.abs(this.position.y - b),
          e =
            this.layout.dragItemCount &&
            !this.isPlacing &&
            !this.isTransitioning &&
            1 > c &&
            1 > d;
        return e ? void this.goTo(a, b) : void h.apply(this, arguments);
      }),
      (f.enablePlacing = function () {
        this.removeTransitionStyles(),
          this.isTransitioning && d && (this.element.style[d] = "none"),
          (this.isTransitioning = !1),
          this.getSize(),
          this.layout._setRectSize(this.element, this.rect),
          (this.isPlacing = !0);
      }),
      (f.disablePlacing = function () {
        this.isPlacing = !1;
      }),
      (f.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.layout.packer.addSpace(this.rect),
          this.emitEvent("remove", [this]);
      }),
      (f.showDropPlaceholder = function () {
        var a = this.dropPlaceholder;
        a ||
          ((a = this.dropPlaceholder = document.createElement("div")),
          (a.className = "packery-drop-placeholder"),
          (a.style.position = "absolute")),
          (a.style.width = this.size.width + "px"),
          (a.style.height = this.size.height + "px"),
          this.positionDropPlaceholder(),
          this.layout.element.appendChild(a);
      }),
      (f.positionDropPlaceholder = function () {
        this.dropPlaceholder.style[d] =
          "translate(" + this.rect.x + "px, " + this.rect.y + "px)";
      }),
      (f.hideDropPlaceholder = function () {
        this.layout.element.removeChild(this.dropPlaceholder);
      }),
      e
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(
          "packery/js/packery",
          [
            "get-size/get-size",
            "outlayer/outlayer",
            "./rect",
            "./packer",
            "./item",
          ],
          b
        )
      : "object" == typeof module && module.exports
      ? (module.exports = b(
          require("get-size"),
          require("outlayer"),
          require("./rect"),
          require("./packer"),
          require("./item")
        ))
      : (a.Packery = b(
          a.getSize,
          a.Outlayer,
          a.Packery.Rect,
          a.Packery.Packer,
          a.Packery.Item
        ));
  })(window, function (a, b, c, d, e) {
    function f(a, b) {
      return a.position.y - b.position.y || a.position.x - b.position.x;
    }
    function g(a, b) {
      return a.position.x - b.position.x || a.position.y - b.position.y;
    }
    function h(a, b) {
      var c = b.x - a.x,
        d = b.y - a.y;
      return Math.sqrt(c * c + d * d);
    }
    c.prototype.canFit = function (a) {
      return this.width >= a.width - 1 && this.height >= a.height - 1;
    };
    var i = b.create("packery");
    i.Item = e;
    var j = i.prototype;
    (j._create = function () {
      b.prototype._create.call(this),
        (this.packer = new d()),
        (this.shiftPacker = new d()),
        (this.isEnabled = !0),
        (this.dragItemCount = 0);
      var a = this;
      (this.handleDraggabilly = {
        dragStart: function () {
          a.itemDragStart(this.element);
        },
        dragMove: function () {
          a.itemDragMove(this.element, this.position.x, this.position.y);
        },
        dragEnd: function () {
          a.itemDragEnd(this.element);
        },
      }),
        (this.handleUIDraggable = {
          start: function (b, c) {
            c && a.itemDragStart(b.currentTarget);
          },
          drag: function (b, c) {
            c &&
              a.itemDragMove(b.currentTarget, c.position.left, c.position.top);
          },
          stop: function (b, c) {
            c && a.itemDragEnd(b.currentTarget);
          },
        });
    }),
      (j._resetLayout = function () {
        this.getSize(), this._getMeasurements();
        var a, b, c;
        this._getOption("horizontal")
          ? ((a = 1 / 0),
            (b = this.size.innerHeight + this.gutter),
            (c = "rightwardTopToBottom"))
          : ((a = this.size.innerWidth + this.gutter),
            (b = 1 / 0),
            (c = "downwardLeftToRight")),
          (this.packer.width = this.shiftPacker.width = a),
          (this.packer.height = this.shiftPacker.height = b),
          (this.packer.sortDirection = this.shiftPacker.sortDirection = c),
          this.packer.reset(),
          (this.maxY = 0),
          (this.maxX = 0);
      }),
      (j._getMeasurements = function () {
        this._getMeasurement("columnWidth", "width"),
          this._getMeasurement("rowHeight", "height"),
          this._getMeasurement("gutter", "width");
      }),
      (j._getItemLayoutPosition = function (a) {
        if (
          (this._setRectSize(a.element, a.rect),
          this.isShifting || this.dragItemCount > 0)
        ) {
          var b = this._getPackMethod();
          this.packer[b](a.rect);
        } else this.packer.pack(a.rect);
        return this._setMaxXY(a.rect), a.rect;
      }),
      (j.shiftLayout = function () {
        (this.isShifting = !0), this.layout(), delete this.isShifting;
      }),
      (j._getPackMethod = function () {
        return this._getOption("horizontal") ? "rowPack" : "columnPack";
      }),
      (j._setMaxXY = function (a) {
        (this.maxX = Math.max(a.x + a.width, this.maxX)),
          (this.maxY = Math.max(a.y + a.height, this.maxY));
      }),
      (j._setRectSize = function (b, c) {
        var d = a(b),
          e = d.outerWidth,
          f = d.outerHeight;
        (e || f) &&
          ((e = this._applyGridGutter(e, this.columnWidth)),
          (f = this._applyGridGutter(f, this.rowHeight))),
          (c.width = Math.min(e, this.packer.width)),
          (c.height = Math.min(f, this.packer.height));
      }),
      (j._applyGridGutter = function (a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
          d = c && 1 > c ? "round" : "ceil";
        return (a = Math[d](a / b) * b);
      }),
      (j._getContainerSize = function () {
        return this._getOption("horizontal")
          ? { width: this.maxX - this.gutter }
          : { height: this.maxY - this.gutter };
      }),
      (j._manageStamp = function (a) {
        var b,
          d = this.getItem(a);
        if (d && d.isPlacing) b = d.rect;
        else {
          var e = this._getElementOffset(a);
          b = new c({
            x: this._getOption("originLeft") ? e.left : e.right,
            y: this._getOption("originTop") ? e.top : e.bottom,
          });
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
      }),
      (j.sortItemsByPosition = function () {
        var a = this._getOption("horizontal") ? g : f;
        this.items.sort(a);
      }),
      (j.fit = function (a, b, c) {
        var d = this.getItem(a);
        d &&
          (this.stamp(d.element),
          d.enablePlacing(),
          this.updateShiftTargets(d),
          (b = void 0 === b ? d.rect.x : b),
          (c = void 0 === c ? d.rect.y : c),
          this.shift(d, b, c),
          this._bindFitEvents(d),
          d.moveTo(d.rect.x, d.rect.y),
          this.shiftLayout(),
          this.unstamp(d.element),
          this.sortItemsByPosition(),
          d.disablePlacing());
      }),
      (j._bindFitEvents = function (a) {
        function b() {
          d++, 2 == d && c.dispatchEvent("fitComplete", null, [a]);
        }
        var c = this,
          d = 0;
        a.once("layout", b), this.once("layoutComplete", b);
      }),
      (j.resize = function () {
        this.isResizeBound &&
          this.needsResizeLayout() &&
          (this.options.shiftPercentResize
            ? this.resizeShiftPercentLayout()
            : this.layout());
      }),
      (j.needsResizeLayout = function () {
        var b = a(this.element),
          c = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return b[c] != this.size[c];
      }),
      (j.resizeShiftPercentLayout = function () {
        var b = this._getItemsForLayout(this.items),
          c = this._getOption("horizontal"),
          d = c ? "y" : "x",
          e = c ? "height" : "width",
          f = c ? "rowHeight" : "columnWidth",
          g = c ? "innerHeight" : "innerWidth",
          h = this[f];
        if ((h = h && h + this.gutter)) {
          this._getMeasurements();
          var i = this[f] + this.gutter;
          b.forEach(function (a) {
            var b = Math.round(a.rect[d] / h);
            a.rect[d] = b * i;
          });
        } else {
          var j = a(this.element)[g] + this.gutter,
            k = this.packer[e];
          b.forEach(function (a) {
            a.rect[d] = (a.rect[d] / k) * j;
          });
        }
        this.shiftLayout();
      }),
      (j.itemDragStart = function (a) {
        if (this.isEnabled) {
          this.stamp(a);
          var b = this.getItem(a);
          b &&
            (b.enablePlacing(),
            b.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(b));
        }
      }),
      (j.updateShiftTargets = function (a) {
        this.shiftPacker.reset(), this._getBoundingRect();
        var b = this._getOption("originLeft"),
          d = this._getOption("originTop");
        this.stamps.forEach(function (a) {
          var e = this.getItem(a);
          if (!e || !e.isPlacing) {
            var f = this._getElementOffset(a),
              g = new c({ x: b ? f.left : f.right, y: d ? f.top : f.bottom });
            this._setRectSize(a, g), this.shiftPacker.placed(g);
          }
        }, this);
        var e = this._getOption("horizontal"),
          f = e ? "rowHeight" : "columnWidth",
          g = e ? "height" : "width";
        (this.shiftTargetKeys = []), (this.shiftTargets = []);
        var h,
          i = this[f];
        if ((i = i && i + this.gutter)) {
          var j = Math.ceil(a.rect[g] / i),
            k = Math.floor((this.shiftPacker[g] + this.gutter) / i);
          h = (k - j) * i;
          for (var l = 0; k > l; l++) this._addShiftTarget(l * i, 0, h);
        } else
          (h = this.shiftPacker[g] + this.gutter - a.rect[g]),
            this._addShiftTarget(0, 0, h);
        var m = this._getItemsForLayout(this.items),
          n = this._getPackMethod();
        m.forEach(function (a) {
          var b = a.rect;
          this._setRectSize(a.element, b),
            this.shiftPacker[n](b),
            this._addShiftTarget(b.x, b.y, h);
          var c = e ? b.x + b.width : b.x,
            d = e ? b.y : b.y + b.height;
          if ((this._addShiftTarget(c, d, h), i))
            for (var f = Math.round(b[g] / i), j = 1; f > j; j++) {
              var k = e ? c : b.x + i * j,
                l = e ? b.y + i * j : d;
              this._addShiftTarget(k, l, h);
            }
        }, this);
      }),
      (j._addShiftTarget = function (a, b, c) {
        var d = this._getOption("horizontal") ? b : a;
        if (!(0 !== d && d > c)) {
          var e = a + "," + b,
            f = -1 != this.shiftTargetKeys.indexOf(e);
          f ||
            (this.shiftTargetKeys.push(e),
            this.shiftTargets.push({ x: a, y: b }));
        }
      }),
      (j.shift = function (a, b, c) {
        var d,
          e = 1 / 0,
          f = { x: b, y: c };
        this.shiftTargets.forEach(function (a) {
          var b = h(a, f);
          e > b && ((d = a), (e = b));
        }),
          (a.rect.x = d.x),
          (a.rect.y = d.y);
      });
    var k = 120;
    (j.itemDragMove = function (a, b, c) {
      function d() {
        f.shift(e, b, c), e.positionDropPlaceholder(), f.layout();
      }
      var e = this.isEnabled && this.getItem(a);
      if (e) {
        (b -= this.size.paddingLeft), (c -= this.size.paddingTop);
        var f = this,
          g = new Date();
        this._itemDragTime && g - this._itemDragTime < k
          ? (clearTimeout(this.dragTimeout),
            (this.dragTimeout = setTimeout(d, k)))
          : (d(), (this._itemDragTime = g));
      }
    }),
      (j.itemDragEnd = function (a) {
        function b() {
          d++,
            2 == d &&
              (c.element.classList.remove("is-positioning-post-drag"),
              c.hideDropPlaceholder(),
              e.dispatchEvent("dragItemPositioned", null, [c]));
        }
        var c = this.isEnabled && this.getItem(a);
        if (c) {
          clearTimeout(this.dragTimeout),
            c.element.classList.add("is-positioning-post-drag");
          var d = 0,
            e = this;
          c.once("layout", b),
            this.once("layoutComplete", b),
            c.moveTo(c.rect.x, c.rect.y),
            this.layout(),
            (this.dragItemCount = Math.max(0, this.dragItemCount - 1)),
            this.sortItemsByPosition(),
            c.disablePlacing(),
            this.unstamp(c.element);
        }
      }),
      (j.bindDraggabillyEvents = function (a) {
        this._bindDraggabillyEvents(a, "on");
      }),
      (j.unbindDraggabillyEvents = function (a) {
        this._bindDraggabillyEvents(a, "off");
      }),
      (j._bindDraggabillyEvents = function (a, b) {
        var c = this.handleDraggabilly;
        a[b]("dragStart", c.dragStart),
          a[b]("dragMove", c.dragMove),
          a[b]("dragEnd", c.dragEnd);
      }),
      (j.bindUIDraggableEvents = function (a) {
        this._bindUIDraggableEvents(a, "on");
      }),
      (j.unbindUIDraggableEvents = function (a) {
        this._bindUIDraggableEvents(a, "off");
      }),
      (j._bindUIDraggableEvents = function (a, b) {
        var c = this.handleUIDraggable;
        a[b]("dragstart", c.start)[b]("drag", c.drag)[b]("dragstop", c.stop);
      });
    var l = j.destroy;
    return (
      (j.destroy = function () {
        l.apply(this, arguments), (this.isEnabled = !1);
      }),
      (i.Rect = c),
      (i.Packer = d),
      i
    );
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["isotope-layout/js/layout-mode", "packery/js/packery"], b)
      : "object" == typeof module && module.exports
      ? (module.exports = b(
          require("isotope-layout/js/layout-mode"),
          require("packery")
        ))
      : b(a.Isotope.LayoutMode, a.Packery);
  })(window, function (a, b) {
    var c = a.create("packery"),
      d = c.prototype,
      e = { _getElementOffset: !0, _getMeasurement: !0 };
    for (var f in b.prototype) e[f] || (d[f] = b.prototype[f]);
    var g = d._resetLayout;
    d._resetLayout = function () {
      (this.packer = this.packer || new b.Packer()),
        (this.shiftPacker = this.shiftPacker || new b.Packer()),
        g.apply(this, arguments);
    };
    var h = d._getItemLayoutPosition;
    d._getItemLayoutPosition = function (a) {
      return (a.rect = a.rect || new b.Rect()), h.call(this, a);
    };
    var i = d.needsResizeLayout;
    d.needsResizeLayout = function () {
      return this._getOption("horizontal")
        ? this.needsVerticalResizeLayout()
        : i.call(this);
    };
    var j = d._getOption;
    return (
      (d._getOption = function (a) {
        return "horizontal" == a
          ? void 0 !== this.options.isHorizontal
            ? this.options.isHorizontal
            : this.options.horizontal
          : j.apply(this.isotope, arguments);
      }),
      c
    );
  });

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
  return a.indexOf(e) > -1;
}
var pJS = function (e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance,
    }),
    (i.fn.retinaInit = function () {
      i.retina_detect && window.devicePixelRatio > 1
        ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
        : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed =
          i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance =
          i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance =
          i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance =
          i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width =
          i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size =
          i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance =
          i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function () {
      i.canvas.ctx = i.canvas.el.getContext("2d");
    }),
    (i.fn.canvasSize = function () {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina &&
                ((i.canvas.w *= i.canvas.pxratio),
                (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable ||
                (i.fn.particlesEmpty(),
                i.fn.particlesCreate(),
                i.fn.particlesDraw(),
                i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function () {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function (e, a, t) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = t ? t.x : Math.random() * i.canvas.w),
        (this.y = t ? t.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var s =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(s);
        } else
          void 0 != e.value.r &&
            void 0 != e.value.g &&
            void 0 != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            void 0 != e.value.h &&
              void 0 != e.value.s &&
              void 0 != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (i.particles.opacity.random ? Math.random() : 1) *
        i.particles.opacity.value),
        i.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = i.particles.opacity.anim.speed / 100),
          i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (i.particles.move.direction) {
        case "top":
          n = { x: 0, y: -1 };
          break;
        case "top-right":
          n = { x: 0.5, y: -0.5 };
          break;
        case "right":
          n = { x: 1, y: -0 };
          break;
        case "bottom-right":
          n = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          n = { x: 0, y: 1 };
          break;
        case "bottom-left":
          n = { x: -0.5, y: 1 };
          break;
        case "left":
          n = { x: -1, y: 0 };
          break;
        case "top-left":
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          i.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var r = i.particles.shape.type;
      if ("object" == typeof r) {
        if (r instanceof Array) {
          var c = r[Math.floor(Math.random() * r.length)];
          this.shape = c;
        }
      } else this.shape = r;
      if ("image" == this.shape) {
        var o = i.particles.shape;
        (this.img = {
          src: o.image.src,
          ratio: o.image.width / o.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type &&
            void 0 != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      function e() {
        i.canvas.ctx.drawImage(
          r,
          a.x - t,
          a.y - t,
          2 * t,
          (2 * t) / a.img.ratio
        );
      }
      var a = this;
      if (void 0 != a.radius_bubble) var t = a.radius_bubble;
      else var t = a.radius;
      if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
      else var s = a.opacity;
      if (a.color.rgb)
        var n =
          "rgba(" +
          a.color.rgb.r +
          "," +
          a.color.rgb.g +
          "," +
          a.color.rgb.b +
          "," +
          s +
          ")";
      else
        var n =
          "hsla(" +
          a.color.hsl.h +
          "," +
          a.color.hsl.s +
          "%," +
          a.color.hsl.l +
          "%," +
          s +
          ")";
      switch (
        ((i.canvas.ctx.fillStyle = n), i.canvas.ctx.beginPath(), a.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t,
            a.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - t / (i.particles.shape.polygon.nb_sides / 3.5),
            a.y - t / 0.76,
            (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            a.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4),
            a.y - t / 1.52,
            (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == i.tmp.img_type) var r = a.img.obj;
          else var r = i.tmp.img_obj;
          r && e();
      }
      i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 &&
          ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
          (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
          i.canvas.ctx.stroke()),
        i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function () {
      for (var e = 0; e < i.particles.number.value; e++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value)
        );
    }),
    (i.fn.particlesUpdate = function () {
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        if (i.particles.move.enable) {
          var t = i.particles.move.speed / 2;
          (a.x += a.vx * t), (a.y += a.vy * t);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == a.opacity_status
              ? (a.opacity >= i.particles.opacity.value &&
                  (a.opacity_status = !1),
                (a.opacity += a.vo))
              : (a.opacity <= i.particles.opacity.anim.opacity_min &&
                  (a.opacity_status = !0),
                (a.opacity -= a.vo)),
            a.opacity < 0 && (a.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == a.size_status
              ? (a.radius >= i.particles.size.value && (a.size_status = !1),
                (a.radius += a.vs))
              : (a.radius <= i.particles.size.anim.size_min &&
                  (a.size_status = !0),
                (a.radius -= a.vs)),
            a.radius < 0 && (a.radius = 0)),
          "bounce" == i.particles.move.out_mode)
        )
          var s = {
            x_left: a.radius,
            x_right: i.canvas.w,
            y_top: a.radius,
            y_bottom: i.canvas.h,
          };
        else
          var s = {
            x_left: -a.radius,
            x_right: i.canvas.w + a.radius,
            y_top: -a.radius,
            y_bottom: i.canvas.h + a.radius,
          };
        switch (
          (a.x - a.radius > i.canvas.w
            ? ((a.x = s.x_left), (a.y = Math.random() * i.canvas.h))
            : a.x + a.radius < 0 &&
              ((a.x = s.x_right), (a.y = Math.random() * i.canvas.h)),
          a.y - a.radius > i.canvas.h
            ? ((a.y = s.y_top), (a.x = Math.random() * i.canvas.w))
            : a.y + a.radius < 0 &&
              ((a.y = s.y_bottom), (a.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            a.x + a.radius > i.canvas.w
              ? (a.vx = -a.vx)
              : a.x - a.radius < 0 && (a.vx = -a.vx),
              a.y + a.radius > i.canvas.h
                ? (a.vy = -a.vy)
                : a.y - a.radius < 0 && (a.vy = -a.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(a),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(a),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(a),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var n = e + 1; n < i.particles.array.length; n++) {
            var r = i.particles.array[n];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(a, r),
              i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        a.draw();
      }
    }),
    (i.fn.particlesEmpty = function () {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        (i.tmp.source_svg = void 0),
        (i.tmp.img_obj = void 0),
        (i.tmp.count_svg = 0),
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r =
          i.particles.line_linked.opacity -
          n /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (r > 0) {
          var c = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(a.x, a.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= r), (e.vy -= c), (a.vx += r), (a.vy += c);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, a) {
      var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
      n >= s &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (a.vx = -a.vx), (a.vy = -a.vy));
    }),
    (i.fn.modes.pushParticles = function (e, a) {
      i.tmp.pushing = !0;
      for (var t = 0; e > t; t++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h,
          })
        ),
          t == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      function a() {
        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
      }
      function t(a, t, s, n, c) {
        if (a != t)
          if (i.tmp.bubble_duration_end) {
            if (void 0 != s) {
              var o = n - (p * (n - a)) / i.interactivity.modes.bubble.duration,
                l = a - o;
              (d = a + l),
                "size" == c && (e.radius_bubble = d),
                "opacity" == c && (e.opacity_bubble = d);
            }
          } else if (r <= i.interactivity.modes.bubble.distance) {
            if (void 0 != s) var v = s;
            else var v = n;
            if (v != a) {
              var d = n - (p * (n - a)) / i.interactivity.modes.bubble.duration;
              "size" == c && (e.radius_bubble = d),
                "opacity" == c && (e.opacity_bubble = d);
            }
          } else
            "size" == c && (e.radius_bubble = void 0),
              "opacity" == c && (e.opacity_bubble = void 0);
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;
        if (r <= i.interactivity.modes.bubble.distance) {
          if (c >= 0 && "mousemove" == i.interactivity.status) {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                var o = e.radius + i.interactivity.modes.bubble.size * c;
                o >= 0 && (e.radius_bubble = o);
              } else {
                var l = e.radius - i.interactivity.modes.bubble.size,
                  o = e.radius - l * c;
                o > 0 ? (e.radius_bubble = o) : (e.radius_bubble = 0);
              }
            if (
              i.interactivity.modes.bubble.opacity != i.particles.opacity.value
            )
              if (
                i.interactivity.modes.bubble.opacity > i.particles.opacity.value
              ) {
                var v = i.interactivity.modes.bubble.opacity * c;
                v > e.opacity &&
                  v <= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              } else {
                var v =
                  e.opacity -
                  (i.particles.opacity.value -
                    i.interactivity.modes.bubble.opacity) *
                    c;
                v < e.opacity &&
                  v >= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = v);
              }
          }
        } else a();
        "mouseleave" == i.interactivity.status && a();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          p > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            p > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        i.tmp.bubble_clicking &&
          (t(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          t(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      function a() {
        var a = Math.atan2(d, p);
        if (
          ((e.vx = u * Math.cos(a)),
          (e.vy = u * Math.sin(a)),
          "bounce" == i.particles.move.out_mode)
        ) {
          var t = { x: e.x + e.vx, y: e.y + e.vy };
          t.x + e.radius > i.canvas.w
            ? (e.vx = -e.vx)
            : t.x - e.radius < 0 && (e.vx = -e.vx),
            t.y + e.radius > i.canvas.h
              ? (e.vy = -e.vy)
              : t.y - e.radius < 0 && (e.vy = -e.vy);
        }
      }
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
      ) {
        var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = { x: t / n, y: s / n },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp((1 / c) * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = { x: e.x + r.x * l, y: e.y + r.y * l };
        "bounce" == i.particles.move.out_mode
          ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x),
            v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y))
          : ((e.x = v.x), (e.y = v.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            p = i.interactivity.mouse.click_pos_x - e.x,
            d = i.interactivity.mouse.click_pos_y - e.y,
            m = p * p + d * d,
            u = (-c / m) * 1;
          c >= m && a();
        } else
          0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (
        i.interactivity.events.onhover.enable &&
        "mousemove" == i.interactivity.status
      ) {
        var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);
        if (s <= i.interactivity.modes.grab.distance) {
          var n =
            i.interactivity.modes.grab.line_linked.opacity -
            s /
              (1 / i.interactivity.modes.grab.line_linked.opacity) /
              i.interactivity.modes.grab.distance;
          if (n > 0) {
            var r = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle =
              "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")"),
              (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(
                i.interactivity.mouse.pos_x,
                i.interactivity.mouse.pos_y
              ),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath();
          }
        }
      }
    }),
    (i.fn.vendors.eventsListeners = function () {
      "window" == i.interactivity.detect_on
        ? (i.interactivity.el = window)
        : (i.interactivity.el = i.canvas.el),
        (i.interactivity.events.onhover.enable ||
          i.interactivity.events.onclick.enable) &&
          (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)
              var a = e.clientX,
                t = e.clientY;
            else
              var a = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            (i.interactivity.mouse.pos_x = a),
              (i.interactivity.mouse.pos_y = t),
              i.tmp.retina &&
                ((i.interactivity.mouse.pos_x *= i.canvas.pxratio),
                (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
              (i.interactivity.status = "mousemove");
          }),
          i.interactivity.el.addEventListener("mouseleave", function (e) {
            (i.interactivity.mouse.pos_x = null),
              (i.interactivity.mouse.pos_y = null),
              (i.interactivity.status = "mouseleave");
          })),
        i.interactivity.events.onclick.enable &&
          i.interactivity.el.addEventListener("click", function () {
            if (
              ((i.interactivity.mouse.click_pos_x =
                i.interactivity.mouse.pos_x),
              (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
              (i.interactivity.mouse.click_time = new Date().getTime()),
              i.interactivity.events.onclick.enable)
            )
              switch (i.interactivity.events.onclick.mode) {
                case "push":
                  i.particles.move.enable
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : 1 == i.interactivity.modes.push.particles_nb
                    ? i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb,
                        i.interactivity.mouse
                      )
                    : i.interactivity.modes.push.particles_nb > 1 &&
                      i.fn.modes.pushParticles(
                        i.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  i.fn.modes.removeParticles(
                    i.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  i.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (i.tmp.repulse_clicking = !0),
                    (i.tmp.repulse_count = 0),
                    (i.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
              }
          });
    }),
    (i.fn.vendors.densityAutoParticles = function () {
      if (i.particles.number.density.enable) {
        var e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
        i.tmp.retina && (e /= 2 * i.canvas.pxratio);
        var a =
            (e * i.particles.number.value) /
            i.particles.number.density.value_area,
          t = i.particles.array.length - a;
        0 > t
          ? i.fn.modes.pushParticles(Math.abs(t))
          : i.fn.modes.removeParticles(t);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, a) {
      for (var t = 0; t < i.particles.array.length; t++) {
        var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
        c <= e.radius + s.radius &&
          ((e.x = a ? a.x : Math.random() * i.canvas.w),
          (e.y = a ? a.y : Math.random() * i.canvas.h),
          i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
          if (e.color.rgb)
            var n =
              "rgba(" +
              e.color.rgb.r +
              "," +
              e.color.rgb.g +
              "," +
              e.color.rgb.b +
              "," +
              e.opacity +
              ")";
          else
            var n =
              "hsla(" +
              e.color.hsl.h +
              "," +
              e.color.hsl.s +
              "%," +
              e.color.hsl.l +
              "%," +
              e.opacity +
              ")";
          return n;
        }),
        n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
      o.addEventListener("load", function () {
        (e.img.obj = o),
          (e.img.loaded = !0),
          r.revokeObjectURL(c),
          i.tmp.count_svg++;
      }),
        (o.src = c);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
      var r = s * n,
        c = s / n,
        o = (180 * (c - 2)) / c,
        l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
      for (var v = 0; r > v; v++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), "" != i.particles.shape.image.src))
        if ("svg" == e) {
          var a = new XMLHttpRequest();
          a.open("GET", i.particles.shape.image.src),
            (a.onreadystatechange = function (e) {
              4 == a.readyState &&
                (200 == a.status
                  ? ((i.tmp.source_svg = e.currentTarget.response),
                    i.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (i.tmp.img_error = !0)));
            }),
            a.send();
        } else {
          var t = new Image();
          t.addEventListener("load", function () {
            (i.tmp.img_obj = t), i.fn.vendors.checkBeforeDraw();
          }),
            (t.src = i.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (i.tmp.img_error = !0);
    }),
    (i.fn.vendors.draw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type
          ? i.tmp.count_svg >= i.particles.number.value
            ? (i.fn.particlesDraw(),
              i.particles.move.enable
                ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error ||
              (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : void 0 != i.tmp.img_obj
          ? (i.fn.particlesDraw(),
            i.particles.move.enable
              ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
              : cancelRequestAnimFrame(i.fn.drawAnimFrame))
          : i.tmp.img_error ||
            (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
        : (i.fn.particlesDraw(),
          i.particles.move.enable
            ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
            : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }),
    (i.fn.vendors.checkBeforeDraw = function () {
      "image" == i.particles.shape.type
        ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg
          ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(i.tmp.checkAnimFrame),
            i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
        : (i.fn.vendors.init(), i.fn.vendors.draw());
    }),
    (i.fn.vendors.init = function () {
      i.fn.retinaInit(),
        i.fn.canvasInit(),
        i.fn.canvasSize(),
        i.fn.canvasPaint(),
        i.fn.particlesCreate(),
        i.fn.vendors.densityAutoParticles(),
        (i.particles.line_linked.color_rgb_line = hexToRgb(
          i.particles.line_linked.color
        ));
    }),
    (i.fn.vendors.start = function () {
      isInArray("image", i.particles.shape.type)
        ? ((i.tmp.img_type = i.particles.shape.image.src.substr(
            i.particles.shape.image.src.length - 3
          )),
          i.fn.vendors.loadImg(i.tmp.img_type))
        : i.fn.vendors.checkBeforeDraw();
    }),
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start();
};
(Object.deepExtend = function (e, a) {
  for (var t in a)
    a[t] && a[t].constructor && a[t].constructor === Object
      ? ((e[t] = e[t] || {}), arguments.callee(e[t], a[t]))
      : (e[t] = a[t]);
  return e;
}),
  (window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }
    );
  })()),
  (window.cancelRequestAnimFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout
    );
  })()),
  (window.pJSDom = []),
  (window.particlesJS = function (e, a) {
    "string" != typeof e && ((a = e), (e = "particles-js")),
      e || (e = "particles-js");
    var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
    if (s.length) for (; s.length > 0; ) t.removeChild(s[0]);
    var n = document.createElement("canvas");
    (n.className = i), (n.style.width = "100%"), (n.style.height = "100%");
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a));
  }),
  (window.particlesJS.load = function (e, a, t) {
    var i = new XMLHttpRequest();
    i.open("GET", a),
      (i.onreadystatechange = function (a) {
        if (4 == i.readyState)
          if (200 == i.status) {
            var s = JSON.parse(a.currentTarget.response);
            window.particlesJS(e, s), t && t();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found");
      }),
      i.send();
  });

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!(function (i) {
  if ("function" == typeof define && define.amd) define(["jquery"], i);
  else if ("object" == typeof module && module.exports) {
    var t = require("jquery");
    i(t), (module.exports = t);
  } else i(jQuery);
})(function (i) {
  function t(i) {
    this.init(i);
  }
  (t.prototype = {
    value: 0,
    size: 100,
    startAngle: -Math.PI,
    thickness: "auto",
    fill: { gradient: ["#3aeabb", "#fdd250"] },
    emptyFill: "rgba(0, 0, 0, .1)",
    animation: { duration: 1200, easing: "circleProgressEasing" },
    animationStartValue: 0,
    reverse: !1,
    lineCap: "butt",
    insertMode: "prepend",
    constructor: t,
    el: null,
    canvas: null,
    ctx: null,
    radius: 0,
    arcFill: null,
    lastFrameValue: 0,
    init: function (t) {
      i.extend(this, t),
        (this.radius = this.size / 2),
        this.initWidget(),
        this.initFill(),
        this.draw(),
        this.el.trigger("circle-inited");
    },
    initWidget: function () {
      this.canvas ||
        (this.canvas = i("<canvas>")[
          "prepend" == this.insertMode ? "prependTo" : "appendTo"
        ](this.el)[0]);
      var t = this.canvas;
      if (
        ((t.width = this.size),
        (t.height = this.size),
        (this.ctx = t.getContext("2d")),
        window.devicePixelRatio > 1)
      ) {
        var e = window.devicePixelRatio;
        (t.style.width = t.style.height = this.size + "px"),
          (t.width = t.height = this.size * e),
          this.ctx.scale(e, e);
      }
    },
    initFill: function () {
      function t() {
        var t = i("<canvas>")[0];
        (t.width = e.size),
          (t.height = e.size),
          t.getContext("2d").drawImage(g, 0, 0, r, r),
          (e.arcFill = e.ctx.createPattern(t, "no-repeat")),
          e.drawFrame(e.lastFrameValue);
      }
      var e = this,
        a = this.fill,
        n = this.ctx,
        r = this.size;
      if (!a) throw Error("The fill is not specified!");
      if (
        ("string" == typeof a && (a = { color: a }),
        a.color && (this.arcFill = a.color),
        a.gradient)
      ) {
        var s = a.gradient;
        if (1 == s.length) this.arcFill = s[0];
        else if (s.length > 1) {
          for (
            var l = a.gradientAngle || 0,
              o = a.gradientDirection || [
                (r / 2) * (1 - Math.cos(l)),
                (r / 2) * (1 + Math.sin(l)),
                (r / 2) * (1 + Math.cos(l)),
                (r / 2) * (1 - Math.sin(l)),
              ],
              h = n.createLinearGradient.apply(n, o),
              c = 0;
            c < s.length;
            c++
          ) {
            var d = s[c],
              u = c / (s.length - 1);
            i.isArray(d) && ((u = d[1]), (d = d[0])), h.addColorStop(u, d);
          }
          this.arcFill = h;
        }
      }
      if (a.image) {
        var g;
        a.image instanceof Image
          ? (g = a.image)
          : ((g = new Image()), (g.src = a.image)),
          g.complete ? t() : (g.onload = t);
      }
    },
    draw: function () {
      this.animation
        ? this.drawAnimated(this.value)
        : this.drawFrame(this.value);
    },
    drawFrame: function (i) {
      (this.lastFrameValue = i),
        this.ctx.clearRect(0, 0, this.size, this.size),
        this.drawEmptyArc(i),
        this.drawArc(i);
    },
    drawArc: function (i) {
      if (0 !== i) {
        var t = this.ctx,
          e = this.radius,
          a = this.getThickness(),
          n = this.startAngle;
        t.save(),
          t.beginPath(),
          this.reverse
            ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n)
            : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i),
          (t.lineWidth = a),
          (t.lineCap = this.lineCap),
          (t.strokeStyle = this.arcFill),
          t.stroke(),
          t.restore();
      }
    },
    drawEmptyArc: function (i) {
      var t = this.ctx,
        e = this.radius,
        a = this.getThickness(),
        n = this.startAngle;
      i < 1 &&
        (t.save(),
        t.beginPath(),
        i <= 0
          ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI)
          : this.reverse
          ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i)
          : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n),
        (t.lineWidth = a),
        (t.strokeStyle = this.emptyFill),
        t.stroke(),
        t.restore());
    },
    drawAnimated: function (t) {
      var e = this,
        a = this.el,
        n = i(this.canvas);
      n.stop(!0, !1),
        a.trigger("circle-animation-start"),
        n
          .css({ animationProgress: 0 })
          .animate(
            { animationProgress: 1 },
            i.extend({}, this.animation, {
              step: function (i) {
                var n = e.animationStartValue * (1 - i) + t * i;
                e.drawFrame(n), a.trigger("circle-animation-progress", [i, n]);
              },
            })
          )
          .promise()
          .always(function () {
            a.trigger("circle-animation-end");
          });
    },
    getThickness: function () {
      return i.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },
    getValue: function () {
      return this.value;
    },
    setValue: function (i) {
      this.animation && (this.animationStartValue = this.lastFrameValue),
        (this.value = i),
        this.draw();
    },
  }),
    (i.circleProgress = { defaults: t.prototype }),
    (i.easing.circleProgressEasing = function (i) {
      return i < 0.5
        ? ((i = 2 * i), 0.5 * i * i * i)
        : ((i = 2 - 2 * i), 1 - 0.5 * i * i * i);
    }),
    (i.fn.circleProgress = function (e, a) {
      var n = "circle-progress",
        r = this.data(n);
      if ("widget" == e) {
        if (!r)
          throw Error(
            'Calling "widget" method on not initialized instance is forbidden'
          );
        return r.canvas;
      }
      if ("value" == e) {
        if (!r)
          throw Error(
            'Calling "value" method on not initialized instance is forbidden'
          );
        if ("undefined" == typeof a) return r.getValue();
        var s = arguments[1];
        return this.each(function () {
          i(this).data(n).setValue(s);
        });
      }
      return this.each(function () {
        var a = i(this),
          r = a.data(n),
          s = i.isPlainObject(e) ? e : {};
        if (r) r.init(s);
        else {
          var l = i.extend({}, a.data());
          "string" == typeof l.fill && (l.fill = JSON.parse(l.fill)),
            "string" == typeof l.animation &&
              (l.animation = JSON.parse(l.animation)),
            (s = i.extend(l, s)),
            (s.el = a),
            (r = new t(s)),
            a.data(n, r);
        }
      });
    });
});

/*! Lity - v2.3.1 - 2018-04-20
 * http://sorgalla.com/lity/
 * Copyright (c) 2015-2018 Jan Sorgalla; Licensed MIT */

!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (c) {
        return b(a, c);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = b(a, require("jquery")))
    : (a.lity = b(a, a.jQuery || a.Zepto));
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  function c(a) {
    var b = B();
    return (
      N && a.length
        ? (a.one(N, b.resolve), setTimeout(b.resolve, 500))
        : b.resolve(),
      b.promise()
    );
  }
  function d(a, c, d) {
    if (1 === arguments.length) return b.extend({}, a);
    if ("string" == typeof c) {
      if (void 0 === d) return void 0 === a[c] ? null : a[c];
      a[c] = d;
    } else b.extend(a, c);
    return this;
  }
  function e(a) {
    for (
      var b,
        c = decodeURI(a.split("#")[0]).split("&"),
        d = {},
        e = 0,
        f = c.length;
      e < f;
      e++
    )
      c[e] && ((b = c[e].split("=")), (d[b[0]] = b[1]));
    return d;
  }
  function f(a, c) {
    return a + (a.indexOf("?") > -1 ? "&" : "?") + b.param(c);
  }
  function g(a, b) {
    var c = a.indexOf("#");
    return -1 === c ? b : (c > 0 && (a = a.substr(c)), b + a);
  }
  function h(a) {
    return b('<span class="lity-error"/>').append(a);
  }
  function i(a, c) {
    var d =
        (c.opener() && c.opener().data("lity-desc")) ||
        "Image with no description",
      e = b('<img src="' + a + '" alt="' + d + '"/>'),
      f = B(),
      g = function () {
        f.reject(h("Failed loading image"));
      };
    return (
      e
        .on("load", function () {
          if (0 === this.naturalWidth) return g();
          f.resolve(e);
        })
        .on("error", g),
      f.promise()
    );
  }
  function j(a, c) {
    var d, e, f;
    try {
      d = b(a);
    } catch (a) {
      return !1;
    }
    return (
      !!d.length &&
      ((e = b('<i style="display:none !important"/>')),
      (f = d.hasClass("lity-hide")),
      c.element().one("lity:remove", function () {
        e.before(d).remove(),
          f && !d.closest(".lity-content").length && d.addClass("lity-hide");
      }),
      d.removeClass("lity-hide").after(e))
    );
  }
  function k(a) {
    var c = J.exec(a);
    return (
      !!c &&
      o(
        g(
          a,
          f(
            "https://www.youtube" + (c[2] || "") + ".com/embed/" + c[4],
            b.extend({ autoplay: 1 }, e(c[5] || ""))
          )
        )
      )
    );
  }
  function l(a) {
    var c = K.exec(a);
    return (
      !!c &&
      o(
        g(
          a,
          f(
            "https://player.vimeo.com/video/" + c[3],
            b.extend({ autoplay: 1 }, e(c[4] || ""))
          )
        )
      )
    );
  }
  function m(a) {
    var c = M.exec(a);
    return (
      !!c &&
      (0 !== a.indexOf("http") && (a = "https:" + a),
      o(
        g(
          a,
          f(
            "https://www.facebook.com/plugins/video.php?href=" + a,
            b.extend({ autoplay: 1 }, e(c[4] || ""))
          )
        )
      ))
    );
  }
  function n(a) {
    var b = L.exec(a);
    return (
      !!b &&
      o(
        g(
          a,
          f("https://www.google." + b[3] + "/maps?" + b[6], {
            output: b[6].indexOf("layer=c") > 0 ? "svembed" : "embed",
          })
        )
      )
    );
  }
  function o(a) {
    return (
      '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' +
      a +
      '"/></div>'
    );
  }
  function p() {
    return z.documentElement.clientHeight
      ? z.documentElement.clientHeight
      : Math.round(A.height());
  }
  function q(a) {
    var b = v();
    b &&
      (27 === a.keyCode && b.options("esc") && b.close(),
      9 === a.keyCode && r(a, b));
  }
  function r(a, b) {
    var c = b.element().find(G),
      d = c.index(z.activeElement);
    a.shiftKey && d <= 0
      ? (c.get(c.length - 1).focus(), a.preventDefault())
      : a.shiftKey ||
        d !== c.length - 1 ||
        (c.get(0).focus(), a.preventDefault());
  }
  function s() {
    b.each(D, function (a, b) {
      b.resize();
    });
  }
  function t(a) {
    1 === D.unshift(a) &&
      (C.addClass("lity-active"), A.on({ resize: s, keydown: q })),
      b("body > *")
        .not(a.element())
        .addClass("lity-hidden")
        .each(function () {
          var a = b(this);
          void 0 === a.data(F) && a.data(F, a.attr(E) || null);
        })
        .attr(E, "true");
  }
  function u(a) {
    var c;
    a.element().attr(E, "true"),
      1 === D.length &&
        (C.removeClass("lity-active"), A.off({ resize: s, keydown: q })),
      (D = b.grep(D, function (b) {
        return a !== b;
      })),
      (c = D.length ? D[0].element() : b(".lity-hidden")),
      c.removeClass("lity-hidden").each(function () {
        var a = b(this),
          c = a.data(F);
        c ? a.attr(E, c) : a.removeAttr(E), a.removeData(F);
      });
  }
  function v() {
    return 0 === D.length ? null : D[0];
  }
  function w(a, c, d, e) {
    var f,
      g = "inline",
      h = b.extend({}, d);
    return (
      e && h[e]
        ? ((f = h[e](a, c)), (g = e))
        : (b.each(["inline", "iframe"], function (a, b) {
            delete h[b], (h[b] = d[b]);
          }),
          b.each(h, function (b, d) {
            return (
              !d ||
              !(!d.test || d.test(a, c)) ||
              ((f = d(a, c)), !1 !== f ? ((g = b), !1) : void 0)
            );
          })),
      { handler: g, content: f || "" }
    );
  }
  function x(a, e, f, g) {
    function h(a) {
      (k = b(a).css("max-height", p() + "px")),
        j.find(".lity-loader").each(function () {
          var a = b(this);
          c(a).always(function () {
            a.remove();
          });
        }),
        j.removeClass("lity-loading").find(".lity-content").empty().append(k),
        (m = !0),
        k.trigger("lity:ready", [l]);
    }
    var i,
      j,
      k,
      l = this,
      m = !1,
      n = !1;
    (e = b.extend({}, H, e)),
      (j = b(e.template)),
      (l.element = function () {
        return j;
      }),
      (l.opener = function () {
        return f;
      }),
      (l.options = b.proxy(d, l, e)),
      (l.handlers = b.proxy(d, l, e.handlers)),
      (l.resize = function () {
        m && !n && k.css("max-height", p() + "px").trigger("lity:resize", [l]);
      }),
      (l.close = function () {
        if (m && !n) {
          (n = !0), u(l);
          var a = B();
          if (
            g &&
            (z.activeElement === j[0] || b.contains(j[0], z.activeElement))
          )
            try {
              g.focus();
            } catch (a) {}
          return (
            k.trigger("lity:close", [l]),
            j.removeClass("lity-opened").addClass("lity-closed"),
            c(k.add(j)).always(function () {
              k.trigger("lity:remove", [l]),
                j.remove(),
                (j = void 0),
                a.resolve();
            }),
            a.promise()
          );
        }
      }),
      (i = w(a, l, e.handlers, e.handler)),
      j
        .attr(E, "false")
        .addClass("lity-loading lity-opened lity-" + i.handler)
        .appendTo("body")
        .focus()
        .on("click", "[data-lity-close]", function (a) {
          b(a.target).is("[data-lity-close]") && l.close();
        })
        .trigger("lity:open", [l]),
      t(l),
      b.when(i.content).always(h);
  }
  function y(a, c, d) {
    a.preventDefault
      ? (a.preventDefault(),
        (d = b(this)),
        (a = d.data("lity-target") || d.attr("href") || d.attr("src")))
      : (d = b(d));
    var e = new x(
      a,
      b.extend({}, d.data("lity-options") || d.data("lity"), c),
      d,
      z.activeElement
    );
    if (!a.preventDefault) return e;
  }
  var z = a.document,
    A = b(a),
    B = b.Deferred,
    C = b("html"),
    D = [],
    E = "aria-hidden",
    F = "lity-" + E,
    G =
      'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
    H = {
      esc: !0,
      handler: null,
      handlers: {
        image: i,
        inline: j,
        youtube: k,
        vimeo: l,
        googlemaps: n,
        facebookvideo: m,
        iframe: o,
      },
      template:
        '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>',
    },
    I = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
    J =
      /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
    K = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
    L = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
    M = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,
    N = (function () {
      var a = z.createElement("div"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return b[c];
      return !1;
    })();
  return (
    (i.test = function (a) {
      return I.test(a);
    }),
    (y.version = "2.3.1"),
    (y.options = b.proxy(d, y, H)),
    (y.handlers = b.proxy(d, y, H.handlers)),
    (y.current = v),
    b(z).on("click.lity", "[data-lity]", y),
    y
  );
});

/*

StackBlur - a fast almost Gaussian Blur For Canvas

Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr: 
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
var mul_table = [
    512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
    512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
    273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
    496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
    282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
    364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
    507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
    374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
    287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
    454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
    368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
    305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
    257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
    437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
    377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
    329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
    289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
  ],
  shg_table = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17,
    17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24,
  ];
function stackBlurImage(a, t, e, r) {
  var n = document.getElementById(a),
    l = n.naturalWidth,
    g = n.naturalHeight,
    c = document.getElementById(t);
  (c.style.width = l + "px"),
    (c.style.height = g + "px"),
    (c.width = l),
    (c.height = g);
  var o = c.getContext("2d");
  o.clearRect(0, 0, l, g),
    o.drawImage(n, 0, 0),
    isNaN(e) ||
      e < 1 ||
      (r
        ? stackBlurCanvasRGBA(t, 0, 0, l, g, e)
        : stackBlurCanvasRGB(t, 0, 0, l, g, e));
}
function stackBlurCanvasRGBA(a, t, e, r, n, l) {
  if (!(isNaN(l) || l < 1)) {
    l |= 0;
    var g,
      c = document.getElementById(a).getContext("2d");
    try {
      try {
        g = c.getImageData(t, e, r, n);
      } catch (a) {
        try {
          netscape.security.PrivilegeManager.enablePrivilege(
            "UniversalBrowserRead"
          ),
            (g = c.getImageData(t, e, r, n));
        } catch (a) {
          throw new Error("unable to access local image data: " + a);
        }
      }
    } catch (a) {
      throw new Error("unable to access image data: " + a);
    }
    var o,
      s,
      i,
      u,
      b,
      m,
      f,
      h,
      x,
      d,
      v,
      B,
      w,
      y,
      I,
      C,
      k,
      E,
      R,
      p,
      D,
      N,
      _,
      S,
      G = g.data,
      P = l + l + 1,
      A = r - 1,
      M = n - 1,
      U = l + 1,
      H = (U * (U + 1)) / 2,
      W = new BlurStack(),
      j = W;
    for (i = 1; i < P; i++)
      if (((j = j.next = new BlurStack()), i == U)) var q = j;
    j.next = W;
    var z = null,
      F = null;
    f = m = 0;
    var J = mul_table[l],
      K = shg_table[l];
    for (s = 0; s < n; s++) {
      for (
        C = k = E = R = h = x = d = v = 0,
          B = U * (p = G[m]),
          w = U * (D = G[m + 1]),
          y = U * (N = G[m + 2]),
          I = U * (_ = G[m + 3]),
          h += H * p,
          x += H * D,
          d += H * N,
          v += H * _,
          j = W,
          i = 0;
        i < U;
        i++
      )
        (j.r = p), (j.g = D), (j.b = N), (j.a = _), (j = j.next);
      for (i = 1; i < U; i++)
        (u = m + ((A < i ? A : i) << 2)),
          (h += (j.r = p = G[u]) * (S = U - i)),
          (x += (j.g = D = G[u + 1]) * S),
          (d += (j.b = N = G[u + 2]) * S),
          (v += (j.a = _ = G[u + 3]) * S),
          (C += p),
          (k += D),
          (E += N),
          (R += _),
          (j = j.next);
      for (z = W, F = q, o = 0; o < r; o++)
        (G[m + 3] = _ = (v * J) >> K),
          0 != _
            ? ((_ = 255 / _),
              (G[m] = ((h * J) >> K) * _),
              (G[m + 1] = ((x * J) >> K) * _),
              (G[m + 2] = ((d * J) >> K) * _))
            : (G[m] = G[m + 1] = G[m + 2] = 0),
          (h -= B),
          (x -= w),
          (d -= y),
          (v -= I),
          (B -= z.r),
          (w -= z.g),
          (y -= z.b),
          (I -= z.a),
          (u = (f + ((u = o + l + 1) < A ? u : A)) << 2),
          (h += C += z.r = G[u]),
          (x += k += z.g = G[u + 1]),
          (d += E += z.b = G[u + 2]),
          (v += R += z.a = G[u + 3]),
          (z = z.next),
          (B += p = F.r),
          (w += D = F.g),
          (y += N = F.b),
          (I += _ = F.a),
          (C -= p),
          (k -= D),
          (E -= N),
          (R -= _),
          (F = F.next),
          (m += 4);
      f += r;
    }
    for (o = 0; o < r; o++) {
      for (
        k = E = R = C = x = d = v = h = 0,
          B = U * (p = G[(m = o << 2)]),
          w = U * (D = G[m + 1]),
          y = U * (N = G[m + 2]),
          I = U * (_ = G[m + 3]),
          h += H * p,
          x += H * D,
          d += H * N,
          v += H * _,
          j = W,
          i = 0;
        i < U;
        i++
      )
        (j.r = p), (j.g = D), (j.b = N), (j.a = _), (j = j.next);
      for (b = r, i = 1; i <= l; i++)
        (m = (b + o) << 2),
          (h += (j.r = p = G[m]) * (S = U - i)),
          (x += (j.g = D = G[m + 1]) * S),
          (d += (j.b = N = G[m + 2]) * S),
          (v += (j.a = _ = G[m + 3]) * S),
          (C += p),
          (k += D),
          (E += N),
          (R += _),
          (j = j.next),
          i < M && (b += r);
      for (m = o, z = W, F = q, s = 0; s < n; s++)
        (G[(u = m << 2) + 3] = _ = (v * J) >> K),
          _ > 0
            ? ((_ = 255 / _),
              (G[u] = ((h * J) >> K) * _),
              (G[u + 1] = ((x * J) >> K) * _),
              (G[u + 2] = ((d * J) >> K) * _))
            : (G[u] = G[u + 1] = G[u + 2] = 0),
          (h -= B),
          (x -= w),
          (d -= y),
          (v -= I),
          (B -= z.r),
          (w -= z.g),
          (y -= z.b),
          (I -= z.a),
          (u = (o + ((u = s + U) < M ? u : M) * r) << 2),
          (h += C += z.r = G[u]),
          (x += k += z.g = G[u + 1]),
          (d += E += z.b = G[u + 2]),
          (v += R += z.a = G[u + 3]),
          (z = z.next),
          (B += p = F.r),
          (w += D = F.g),
          (y += N = F.b),
          (I += _ = F.a),
          (C -= p),
          (k -= D),
          (E -= N),
          (R -= _),
          (F = F.next),
          (m += r);
    }
    c.putImageData(g, t, e);
  }
}
function stackBlurCanvasRGB(a, t, e, r, n, l) {
  if (!(isNaN(l) || l < 1)) {
    l |= 0;
    var g,
      c = document.getElementById(a).getContext("2d");
    try {
      try {
        g = c.getImageData(t, e, r, n);
      } catch (a) {
        try {
          netscape.security.PrivilegeManager.enablePrivilege(
            "UniversalBrowserRead"
          ),
            (g = c.getImageData(t, e, r, n));
        } catch (a) {
          throw new Error("unable to access local image data: " + a);
        }
      }
    } catch (a) {
      throw new Error("unable to access image data: " + a);
    }
    var o,
      s,
      i,
      u,
      b,
      m,
      f,
      h,
      x,
      d,
      v,
      B,
      w,
      y,
      I,
      C,
      k,
      E,
      R,
      p,
      D = g.data,
      N = l + l + 1,
      _ = r - 1,
      S = n - 1,
      G = l + 1,
      P = (G * (G + 1)) / 2,
      A = new BlurStack(),
      M = A;
    for (i = 1; i < N; i++)
      if (((M = M.next = new BlurStack()), i == G)) var U = M;
    M.next = A;
    var H = null,
      W = null;
    f = m = 0;
    var j = mul_table[l],
      q = shg_table[l];
    for (s = 0; s < n; s++) {
      for (
        y = I = C = h = x = d = 0,
          v = G * (k = D[m]),
          B = G * (E = D[m + 1]),
          w = G * (R = D[m + 2]),
          h += P * k,
          x += P * E,
          d += P * R,
          M = A,
          i = 0;
        i < G;
        i++
      )
        (M.r = k), (M.g = E), (M.b = R), (M = M.next);
      for (i = 1; i < G; i++)
        (u = m + ((_ < i ? _ : i) << 2)),
          (h += (M.r = k = D[u]) * (p = G - i)),
          (x += (M.g = E = D[u + 1]) * p),
          (d += (M.b = R = D[u + 2]) * p),
          (y += k),
          (I += E),
          (C += R),
          (M = M.next);
      for (H = A, W = U, o = 0; o < r; o++)
        (D[m] = (h * j) >> q),
          (D[m + 1] = (x * j) >> q),
          (D[m + 2] = (d * j) >> q),
          (h -= v),
          (x -= B),
          (d -= w),
          (v -= H.r),
          (B -= H.g),
          (w -= H.b),
          (u = (f + ((u = o + l + 1) < _ ? u : _)) << 2),
          (h += y += H.r = D[u]),
          (x += I += H.g = D[u + 1]),
          (d += C += H.b = D[u + 2]),
          (H = H.next),
          (v += k = W.r),
          (B += E = W.g),
          (w += R = W.b),
          (y -= k),
          (I -= E),
          (C -= R),
          (W = W.next),
          (m += 4);
      f += r;
    }
    for (o = 0; o < r; o++) {
      for (
        I = C = y = x = d = h = 0,
          v = G * (k = D[(m = o << 2)]),
          B = G * (E = D[m + 1]),
          w = G * (R = D[m + 2]),
          h += P * k,
          x += P * E,
          d += P * R,
          M = A,
          i = 0;
        i < G;
        i++
      )
        (M.r = k), (M.g = E), (M.b = R), (M = M.next);
      for (b = r, i = 1; i <= l; i++)
        (m = (b + o) << 2),
          (h += (M.r = k = D[m]) * (p = G - i)),
          (x += (M.g = E = D[m + 1]) * p),
          (d += (M.b = R = D[m + 2]) * p),
          (y += k),
          (I += E),
          (C += R),
          (M = M.next),
          i < S && (b += r);
      for (m = o, H = A, W = U, s = 0; s < n; s++)
        (D[(u = m << 2)] = (h * j) >> q),
          (D[u + 1] = (x * j) >> q),
          (D[u + 2] = (d * j) >> q),
          (h -= v),
          (x -= B),
          (d -= w),
          (v -= H.r),
          (B -= H.g),
          (w -= H.b),
          (u = (o + ((u = s + G) < S ? u : S) * r) << 2),
          (h += y += H.r = D[u]),
          (x += I += H.g = D[u + 1]),
          (d += C += H.b = D[u + 2]),
          (H = H.next),
          (v += k = W.r),
          (B += E = W.g),
          (w += R = W.b),
          (y -= k),
          (I -= E),
          (C -= R),
          (W = W.next),
          (m += r);
    }
    c.putImageData(g, t, e);
  }
}
function BlurStack() {
  (this.r = 0), (this.g = 0), (this.b = 0), (this.a = 0), (this.next = null);
}

/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
!(function () {
  "use strict";
  var a = !1;
  (window.JQClass = function () {}),
    (JQClass.classes = {}),
    (JQClass.extend = function b(c) {
      function d() {
        !a && this._init && this._init.apply(this, arguments);
      }
      var e = this.prototype;
      a = !0;
      var f = new this();
      a = !1;
      for (var g in c)
        if ("function" == typeof c[g] && "function" == typeof e[g])
          f[g] = (function (a, b) {
            return function () {
              var c = this._super;
              this._super = function (b) {
                return e[a].apply(this, b || []);
              };
              var d = b.apply(this, arguments);
              return (this._super = c), d;
            };
          })(g, c[g]);
        else if (
          "object" == typeof c[g] &&
          "object" == typeof e[g] &&
          "defaultOptions" === g
        ) {
          var h,
            i = e[g],
            j = c[g],
            k = {};
          for (h in i) k[h] = i[h];
          for (h in j) k[h] = j[h];
          f[g] = k;
        } else f[g] = c[g];
      return (
        (d.prototype = f), (d.prototype.constructor = d), (d.extend = b), d
      );
    });
})() /*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */,
  (function ($) {
    "use strict";
    function camelCase(a) {
      return a.replace(/-([a-z])/g, function (a, b) {
        return b.toUpperCase();
      });
    }
    (JQClass.classes.JQPlugin = JQClass.extend({
      name: "plugin",
      defaultOptions: {},
      regionalOptions: {},
      deepMerge: !0,
      _getMarker: function () {
        return "is-" + this.name;
      },
      _init: function () {
        $.extend(
          this.defaultOptions,
          (this.regionalOptions && this.regionalOptions[""]) || {}
        );
        var a = camelCase(this.name);
        ($[a] = this),
          ($.fn[a] = function (b) {
            var c = Array.prototype.slice.call(arguments, 1),
              d = this,
              e = this;
            return (
              this.each(function () {
                if ("string" == typeof b) {
                  if ("_" === b[0] || !$[a][b]) throw "Unknown method: " + b;
                  var f = $[a][b].apply($[a], [this].concat(c));
                  if (f !== d && void 0 !== f) return (e = f), !1;
                } else $[a]._attach(this, b);
              }),
              e
            );
          });
      },
      setDefaults: function (a) {
        $.extend(this.defaultOptions, a || {});
      },
      _attach: function (a, b) {
        if (((a = $(a)), !a.hasClass(this._getMarker()))) {
          a.addClass(this._getMarker()),
            (b = $.extend(
              this.deepMerge,
              {},
              this.defaultOptions,
              this._getMetadata(a),
              b || {}
            ));
          var c = $.extend(
            { name: this.name, elem: a, options: b },
            this._instSettings(a, b)
          );
          a.data(this.name, c), this._postAttach(a, c), this.option(a, b);
        }
      },
      _instSettings: function (a, b) {
        return {};
      },
      _postAttach: function (a, b) {},
      _getMetadata: function (elem) {
        try {
          var data = elem.data(this.name.toLowerCase()) || "";
          (data = data
            .replace(/(\\?)'/g, function (a, b) {
              return b ? "'" : '"';
            })
            .replace(/([a-zA-Z0-9]+):/g, function (a, b, c) {
              var d = data.substring(0, c).match(/"/g);
              return d && d.length % 2 !== 0 ? b + ":" : '"' + b + '":';
            })
            .replace(/\\:/g, ":")),
            (data = $.parseJSON("{" + data + "}"));
          for (var key in data)
            if (data.hasOwnProperty(key)) {
              var value = data[key];
              "string" == typeof value &&
                value.match(/^new Date\(([-0-9,\s]*)\)$/) &&
                (data[key] = eval(value));
            }
          return data;
        } catch (a) {
          return {};
        }
      },
      _getInst: function (a) {
        return $(a).data(this.name) || {};
      },
      option: function (a, b, c) {
        a = $(a);
        var d = a.data(this.name),
          e = b || {};
        return !b || ("string" == typeof b && "undefined" == typeof c)
          ? ((e = (d || {}).options), e && b ? e[b] : e)
          : void (
              a.hasClass(this._getMarker()) &&
              ("string" == typeof b && ((e = {}), (e[b] = c)),
              this._optionsChanged(a, d, e),
              $.extend(d.options, e))
            );
      },
      _optionsChanged: function (a, b, c) {},
      destroy: function (a) {
        (a = $(a)),
          a.hasClass(this._getMarker()) &&
            (this._preDestroy(a, this._getInst(a)),
            a.removeData(this.name).removeClass(this._getMarker()));
      },
      _preDestroy: function (a, b) {},
    })),
      ($.JQPlugin = {
        createPlugin: function (a, b) {
          "object" == typeof a && ((b = a), (a = "JQPlugin")),
            (a = camelCase(a));
          var c = camelCase(b.name);
          (JQClass.classes[c] = JQClass.classes[a].extend(b)),
            new JQClass.classes[c]();
        },
      });
  })(jQuery);

/*! http://keith-wood.name/countdown.html
	Countdown for jQuery v2.1.0.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) January 2008.
	Available under the MIT (http://keith-wood.name/licence.html) license.
	Please attribute the author if you use it. */
!(function (a) {
  "use strict";
  var b = "countdown",
    c = 0,
    d = 1,
    e = 2,
    f = 3,
    g = 4,
    h = 5,
    i = 6;
  a.JQPlugin.createPlugin({
    name: b,
    defaultOptions: {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: "dHMS",
      layout: "",
      compact: !1,
      padZeroes: !1,
      significant: 0,
      description: "",
      expiryUrl: "",
      expiryText: "",
      alwaysExpire: !1,
      onExpiry: null,
      onTick: null,
      tickInterval: 1,
    },
    regionalOptions: {
      "": {
        labels: [
          "Years",
          "Months",
          "Weeks",
          "Days",
          "Hours",
          "Minutes",
          "Seconds",
        ],
        labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
        compactLabels: ["y", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1,
      },
    },
    _rtlClass: b + "-rtl",
    _sectionClass: b + "-section",
    _amountClass: b + "-amount",
    _periodClass: b + "-period",
    _rowClass: b + "-row",
    _holdingClass: b + "-holding",
    _showClass: b + "-show",
    _descrClass: b + "-descr",
    _timerElems: [],
    _init: function () {
      function b(a) {
        var h =
          a < 1e12
            ? e
              ? window.performance.now() +
                window.performance.timing.navigationStart
              : d()
            : a || d();
        h - g >= 1e3 && (c._updateElems(), (g = h)), f(b);
      }
      var c = this;
      this._super(), (this._serverSyncs = []);
      var d =
          "function" == typeof Date.now
            ? Date.now
            : function () {
                return new Date().getTime();
              },
        e = window.performance && "function" == typeof window.performance.now,
        f =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          null,
        g = 0;
      !f || a.noRequestAnimationFrame
        ? ((a.noRequestAnimationFrame = null),
          (a.countdown._timer = setInterval(function () {
            c._updateElems();
          }, 1e3)))
        : ((g =
            window.animationStartTime ||
            window.webkitAnimationStartTime ||
            window.mozAnimationStartTime ||
            window.oAnimationStartTime ||
            window.msAnimationStartTime ||
            d()),
          f(b));
    },
    UTCDate: function (a, b, c, d, e, f, g, h) {
      "object" == typeof b &&
        b instanceof Date &&
        ((h = b.getMilliseconds()),
        (g = b.getSeconds()),
        (f = b.getMinutes()),
        (e = b.getHours()),
        (d = b.getDate()),
        (c = b.getMonth()),
        (b = b.getFullYear()));
      var i = new Date();
      return (
        i.setUTCFullYear(b),
        i.setUTCDate(1),
        i.setUTCMonth(c || 0),
        i.setUTCDate(d || 1),
        i.setUTCHours(e || 0),
        i.setUTCMinutes((f || 0) - (Math.abs(a) < 30 ? 60 * a : a)),
        i.setUTCSeconds(g || 0),
        i.setUTCMilliseconds(h || 0),
        i
      );
    },
    periodsToSeconds: function (a) {
      return (
        31557600 * a[0] +
        2629800 * a[1] +
        604800 * a[2] +
        86400 * a[3] +
        3600 * a[4] +
        60 * a[5] +
        a[6]
      );
    },
    resync: function () {
      var b = this;
      a("." + this._getMarker()).each(function () {
        var c = a.data(this, b.name);
        if (c.options.serverSync) {
          for (var d = null, e = 0; e < b._serverSyncs.length; e++)
            if (b._serverSyncs[e][0] === c.options.serverSync) {
              d = b._serverSyncs[e];
              break;
            }
          if (b._eqNull(d[2])) {
            var f = a.isFunction(c.options.serverSync)
              ? c.options.serverSync.apply(this, [])
              : null;
            d[2] = (f ? new Date().getTime() - f.getTime() : 0) - d[1];
          }
          c._since &&
            c._since.setMilliseconds(c._since.getMilliseconds() + d[2]),
            c._until.setMilliseconds(c._until.getMilliseconds() + d[2]);
        }
      });
      for (var c = 0; c < b._serverSyncs.length; c++)
        b._eqNull(b._serverSyncs[c][2]) ||
          ((b._serverSyncs[c][1] += b._serverSyncs[c][2]),
          delete b._serverSyncs[c][2]);
    },
    _instSettings: function (a, b) {
      return { _periods: [0, 0, 0, 0, 0, 0, 0] };
    },
    _addElem: function (a) {
      this._hasElem(a) || this._timerElems.push(a);
    },
    _hasElem: function (b) {
      return a.inArray(b, this._timerElems) > -1;
    },
    _removeElem: function (b) {
      this._timerElems = a.map(this._timerElems, function (a) {
        return a === b ? null : a;
      });
    },
    _updateElems: function () {
      for (var a = this._timerElems.length - 1; a >= 0; a--)
        this._updateCountdown(this._timerElems[a]);
    },
    _optionsChanged: function (b, c, d) {
      d.layout &&
        (d.layout = d.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
        this._resetExtraLabels(c.options, d);
      var e = c.options.timezone !== d.timezone;
      a.extend(c.options, d),
        this._adjustSettings(
          b,
          c,
          !this._eqNull(d.until) || !this._eqNull(d.since) || e
        );
      var f = new Date();
      ((c._since && c._since < f) || (c._until && c._until > f)) &&
        this._addElem(b[0]),
        this._updateCountdown(b, c);
    },
    _updateCountdown: function (b, c) {
      if (((b = b.jquery ? b : a(b)), (c = c || this._getInst(b)))) {
        if (
          (b
            .html(this._generateHTML(c))
            .toggleClass(this._rtlClass, c.options.isRTL),
          "pause" !== c._hold && a.isFunction(c.options.onTick))
        ) {
          var d =
            "lap" !== c._hold
              ? c._periods
              : this._calculatePeriods(
                  c,
                  c._show,
                  c.options.significant,
                  new Date()
                );
          (1 !== c.options.tickInterval &&
            this.periodsToSeconds(d) % c.options.tickInterval !== 0) ||
            c.options.onTick.apply(b[0], [d]);
        }
        var e =
          "pause" !== c._hold &&
          (c._since
            ? c._now.getTime() < c._since.getTime()
            : c._now.getTime() >= c._until.getTime());
        if (e && !c._expiring) {
          if (
            ((c._expiring = !0), this._hasElem(b[0]) || c.options.alwaysExpire)
          ) {
            if (
              (this._removeElem(b[0]),
              a.isFunction(c.options.onExpiry) &&
                c.options.onExpiry.apply(b[0], []),
              c.options.expiryText)
            ) {
              var f = c.options.layout;
              (c.options.layout = c.options.expiryText),
                this._updateCountdown(b[0], c),
                (c.options.layout = f);
            }
            c.options.expiryUrl && (window.location = c.options.expiryUrl);
          }
          c._expiring = !1;
        } else "pause" === c._hold && this._removeElem(b[0]);
      }
    },
    _resetExtraLabels: function (a, b) {
      var c = null;
      for (c in b) c.match(/[Ll]abels[02-9]|compactLabels1/) && (a[c] = b[c]);
      for (c in a)
        c.match(/[Ll]abels[02-9]|compactLabels1/) &&
          "undefined" == typeof b[c] &&
          (a[c] = null);
    },
    _eqNull: function (a) {
      return "undefined" == typeof a || null === a;
    },
    _adjustSettings: function (b, c, d) {
      for (var e = null, f = 0; f < this._serverSyncs.length; f++)
        if (this._serverSyncs[f][0] === c.options.serverSync) {
          e = this._serverSyncs[f][1];
          break;
        }
      var g = null,
        h = null;
      if (this._eqNull(e)) {
        var i = a.isFunction(c.options.serverSync)
          ? c.options.serverSync.apply(b[0], [])
          : null;
        (g = new Date()),
          (h = i ? g.getTime() - i.getTime() : 0),
          this._serverSyncs.push([c.options.serverSync, h]);
      } else (g = new Date()), (h = c.options.serverSync ? e : 0);
      var j = c.options.timezone;
      (j = this._eqNull(j) ? -g.getTimezoneOffset() : j),
        (d || (!d && this._eqNull(c._until) && this._eqNull(c._since))) &&
          ((c._since = c.options.since),
          this._eqNull(c._since) ||
            ((c._since = this.UTCDate(j, this._determineTime(c._since, null))),
            c._since &&
              h &&
              c._since.setMilliseconds(c._since.getMilliseconds() + h)),
          (c._until = this.UTCDate(j, this._determineTime(c.options.until, g))),
          h && c._until.setMilliseconds(c._until.getMilliseconds() + h)),
        (c._show = this._determineShow(c));
    },
    _preDestroy: function (a, b) {
      this._removeElem(a[0]), a.empty();
    },
    pause: function (a) {
      this._hold(a, "pause");
    },
    lap: function (a) {
      this._hold(a, "lap");
    },
    resume: function (a) {
      this._hold(a, null);
    },
    toggle: function (b) {
      var c = a.data(b, this.name) || {};
      this[c._hold ? "resume" : "pause"](b);
    },
    toggleLap: function (b) {
      var c = a.data(b, this.name) || {};
      this[c._hold ? "resume" : "lap"](b);
    },
    _hold: function (b, c) {
      var d = a.data(b, this.name);
      if (d) {
        if ("pause" === d._hold && !c) {
          d._periods = d._savePeriods;
          var e = d._since ? "-" : "+";
          (d[d._since ? "_since" : "_until"] = this._determineTime(
            e +
              d._periods[0] +
              "y" +
              e +
              d._periods[1] +
              "o" +
              e +
              d._periods[2] +
              "w" +
              e +
              d._periods[3] +
              "d" +
              e +
              d._periods[4] +
              "h" +
              e +
              d._periods[5] +
              "m" +
              e +
              d._periods[6] +
              "s"
          )),
            this._addElem(b);
        }
        (d._hold = c),
          (d._savePeriods = "pause" === c ? d._periods : null),
          a.data(b, this.name, d),
          this._updateCountdown(b, d);
      }
    },
    getTimes: function (b) {
      var c = a.data(b, this.name);
      return c
        ? "pause" === c._hold
          ? c._savePeriods
          : c._hold
          ? this._calculatePeriods(
              c,
              c._show,
              c.options.significant,
              new Date()
            )
          : c._periods
        : null;
    },
    _determineTime: function (a, b) {
      var c = this,
        d = function (a) {
          var b = new Date();
          return b.setTime(b.getTime() + 1e3 * a), b;
        },
        e = function (a) {
          a = a.toLowerCase();
          for (
            var b = new Date(),
              d = b.getFullYear(),
              e = b.getMonth(),
              f = b.getDate(),
              g = b.getHours(),
              h = b.getMinutes(),
              i = b.getSeconds(),
              j = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,
              k = j.exec(a);
            k;

          ) {
            switch (k[2] || "s") {
              case "s":
                i += parseInt(k[1], 10);
                break;
              case "m":
                h += parseInt(k[1], 10);
                break;
              case "h":
                g += parseInt(k[1], 10);
                break;
              case "d":
                f += parseInt(k[1], 10);
                break;
              case "w":
                f += 7 * parseInt(k[1], 10);
                break;
              case "o":
                (e += parseInt(k[1], 10)),
                  (f = Math.min(f, c._getDaysInMonth(d, e)));
                break;
              case "y":
                (d += parseInt(k[1], 10)),
                  (f = Math.min(f, c._getDaysInMonth(d, e)));
            }
            k = j.exec(a);
          }
          return new Date(d, e, f, g, h, i, 0);
        },
        f = this._eqNull(a)
          ? b
          : "string" == typeof a
          ? e(a)
          : "number" == typeof a
          ? d(a)
          : a;
      return f && f.setMilliseconds(0), f;
    },
    _getDaysInMonth: function (a, b) {
      return 32 - new Date(a, b, 32).getDate();
    },
    _normalLabels: function (a) {
      return a;
    },
    _generateHTML: function (b) {
      var j = this;
      b._periods = b._hold
        ? b._periods
        : this._calculatePeriods(b, b._show, b.options.significant, new Date());
      var k = !1,
        l = 0,
        m = b.options.significant,
        n = a.extend({}, b._show),
        o = null;
      for (o = c; o <= i; o++)
        (k = k || ("?" === b._show[o] && b._periods[o] > 0)),
          (n[o] = "?" !== b._show[o] || k ? b._show[o] : null),
          (l += n[o] ? 1 : 0),
          (m -= b._periods[o] > 0 ? 1 : 0);
      var p = [!1, !1, !1, !1, !1, !1, !1];
      for (o = i; o >= c; o--)
        b._show[o] && (b._periods[o] ? (p[o] = !0) : ((p[o] = m > 0), m--));
      var q = b.options.compact ? b.options.compactLabels : b.options.labels,
        r = b.options.whichLabels || this._normalLabels,
        s = function (a) {
          var c = b.options["compactLabels" + r(b._periods[a])];
          return n[a]
            ? j._translateDigits(b, b._periods[a]) + (c ? c[a] : q[a]) + " "
            : "";
        },
        t = b.options.padZeroes ? 2 : 1,
        u = function (a) {
          var c = b.options["labels" + r(b._periods[a])];
          return (!b.options.significant && n[a]) ||
            (b.options.significant && p[a])
            ? '<span class="' +
                j._sectionClass +
                '"><span class="' +
                j._amountClass +
                '">' +
                j._minDigits(b, b._periods[a], t) +
                '</span><span class="' +
                j._periodClass +
                '">' +
                (c ? c[a] : q[a]) +
                "</span></span>"
            : "";
        };
      return b.options.layout
        ? this._buildLayout(
            b,
            n,
            b.options.layout,
            b.options.compact,
            b.options.significant,
            p
          )
        : (b.options.compact
            ? '<span class="' +
              this._rowClass +
              " " +
              this._amountClass +
              (b._hold ? " " + this._holdingClass : "") +
              '">' +
              s(c) +
              s(d) +
              s(e) +
              s(f) +
              (n[g] ? this._minDigits(b, b._periods[g], 2) : "") +
              (n[h]
                ? (n[g] ? b.options.timeSeparator : "") +
                  this._minDigits(b, b._periods[h], 2)
                : "") +
              (n[i]
                ? (n[g] || n[h] ? b.options.timeSeparator : "") +
                  this._minDigits(b, b._periods[i], 2)
                : "")
            : '<span class="' +
              this._rowClass +
              " " +
              this._showClass +
              (b.options.significant || l) +
              (b._hold ? " " + this._holdingClass : "") +
              '">' +
              u(c) +
              u(d) +
              u(e) +
              u(f) +
              u(g) +
              u(h) +
              u(i)) +
            "</span>" +
            (b.options.description
              ? '<span class="' +
                this._rowClass +
                " " +
                this._descrClass +
                '">' +
                b.options.description +
                "</span>"
              : "");
    },
    _buildLayout: function (b, j, k, l, m, n) {
      for (
        var o = b.options[l ? "compactLabels" : "labels"],
          p = b.options.whichLabels || this._normalLabels,
          q = function (a) {
            return (b.options[
              (l ? "compactLabels" : "labels") + p(b._periods[a])
            ] || o)[a];
          },
          r = function (a, c) {
            return b.options.digits[Math.floor(a / c) % 10];
          },
          s = {
            desc: b.options.description,
            sep: b.options.timeSeparator,
            yl: q(c),
            yn: this._minDigits(b, b._periods[c], 1),
            ynn: this._minDigits(b, b._periods[c], 2),
            ynnn: this._minDigits(b, b._periods[c], 3),
            y1: r(b._periods[c], 1),
            y10: r(b._periods[c], 10),
            y100: r(b._periods[c], 100),
            y1000: r(b._periods[c], 1e3),
            ol: q(d),
            on: this._minDigits(b, b._periods[d], 1),
            onn: this._minDigits(b, b._periods[d], 2),
            onnn: this._minDigits(b, b._periods[d], 3),
            o1: r(b._periods[d], 1),
            o10: r(b._periods[d], 10),
            o100: r(b._periods[d], 100),
            o1000: r(b._periods[d], 1e3),
            wl: q(e),
            wn: this._minDigits(b, b._periods[e], 1),
            wnn: this._minDigits(b, b._periods[e], 2),
            wnnn: this._minDigits(b, b._periods[e], 3),
            w1: r(b._periods[e], 1),
            w10: r(b._periods[e], 10),
            w100: r(b._periods[e], 100),
            w1000: r(b._periods[e], 1e3),
            dl: q(f),
            dn: this._minDigits(b, b._periods[f], 1),
            dnn: this._minDigits(b, b._periods[f], 2),
            dnnn: this._minDigits(b, b._periods[f], 3),
            d1: r(b._periods[f], 1),
            d10: r(b._periods[f], 10),
            d100: r(b._periods[f], 100),
            d1000: r(b._periods[f], 1e3),
            hl: q(g),
            hn: this._minDigits(b, b._periods[g], 1),
            hnn: this._minDigits(b, b._periods[g], 2),
            hnnn: this._minDigits(b, b._periods[g], 3),
            h1: r(b._periods[g], 1),
            h10: r(b._periods[g], 10),
            h100: r(b._periods[g], 100),
            h1000: r(b._periods[g], 1e3),
            ml: q(h),
            mn: this._minDigits(b, b._periods[h], 1),
            mnn: this._minDigits(b, b._periods[h], 2),
            mnnn: this._minDigits(b, b._periods[h], 3),
            m1: r(b._periods[h], 1),
            m10: r(b._periods[h], 10),
            m100: r(b._periods[h], 100),
            m1000: r(b._periods[h], 1e3),
            sl: q(i),
            sn: this._minDigits(b, b._periods[i], 1),
            snn: this._minDigits(b, b._periods[i], 2),
            snnn: this._minDigits(b, b._periods[i], 3),
            s1: r(b._periods[i], 1),
            s10: r(b._periods[i], 10),
            s100: r(b._periods[i], 100),
            s1000: r(b._periods[i], 1e3),
          },
          t = k,
          u = c;
        u <= i;
        u++
      ) {
        var v = "yowdhms".charAt(u),
          w = new RegExp("\\{" + v + "<\\}([\\s\\S]*)\\{" + v + ">\\}", "g");
        t = t.replace(w, (!m && j[u]) || (m && n[u]) ? "$1" : "");
      }
      return (
        a.each(s, function (a, b) {
          var c = new RegExp("\\{" + a + "\\}", "g");
          t = t.replace(c, b);
        }),
        t
      );
    },
    _minDigits: function (a, b, c) {
      return (
        (b = "" + b),
        b.length >= c
          ? this._translateDigits(a, b)
          : ((b = "0000000000" + b),
            this._translateDigits(a, b.substr(b.length - c)))
      );
    },
    _translateDigits: function (a, b) {
      return ("" + b).replace(/[0-9]/g, function (b) {
        return a.options.digits[b];
      });
    },
    _determineShow: function (a) {
      var b = a.options.format,
        j = [];
      return (
        (j[c] = b.match("y") ? "?" : b.match("Y") ? "!" : null),
        (j[d] = b.match("o") ? "?" : b.match("O") ? "!" : null),
        (j[e] = b.match("w") ? "?" : b.match("W") ? "!" : null),
        (j[f] = b.match("d") ? "?" : b.match("D") ? "!" : null),
        (j[g] = b.match("h") ? "?" : b.match("H") ? "!" : null),
        (j[h] = b.match("m") ? "?" : b.match("M") ? "!" : null),
        (j[i] = b.match("s") ? "?" : b.match("S") ? "!" : null),
        j
      );
    },
    _calculatePeriods: function (a, b, j, k) {
      (a._now = k), a._now.setMilliseconds(0);
      var l = new Date(a._now.getTime());
      a._since
        ? k.getTime() < a._since.getTime()
          ? (a._now = k = l)
          : (k = a._since)
        : (l.setTime(a._until.getTime()),
          k.getTime() > a._until.getTime() && (a._now = k = l));
      var m = [0, 0, 0, 0, 0, 0, 0];
      if (b[c] || b[d]) {
        var n = this._getDaysInMonth(k.getFullYear(), k.getMonth()),
          o = this._getDaysInMonth(l.getFullYear(), l.getMonth()),
          p =
            l.getDate() === k.getDate() ||
            (l.getDate() >= Math.min(n, o) && k.getDate() >= Math.min(n, o)),
          q = function (a) {
            return 60 * (60 * a.getHours() + a.getMinutes()) + a.getSeconds();
          },
          r = Math.max(
            0,
            12 * (l.getFullYear() - k.getFullYear()) +
              l.getMonth() -
              k.getMonth() +
              ((l.getDate() < k.getDate() && !p) || (p && q(l) < q(k)) ? -1 : 0)
          );
        (m[c] = b[c] ? Math.floor(r / 12) : 0),
          (m[d] = b[d] ? r - 12 * m[c] : 0),
          (k = new Date(k.getTime()));
        var s = k.getDate() === n,
          t = this._getDaysInMonth(k.getFullYear() + m[c], k.getMonth() + m[d]);
        k.getDate() > t && k.setDate(t),
          k.setFullYear(k.getFullYear() + m[c]),
          k.setMonth(k.getMonth() + m[d]),
          s && k.setDate(t);
      }
      var u = Math.floor((l.getTime() - k.getTime()) / 1e3),
        v = null,
        w = function (a, c) {
          (m[a] = b[a] ? Math.floor(u / c) : 0), (u -= m[a] * c);
        };
      if (
        (w(e, 604800),
        w(f, 86400),
        w(g, 3600),
        w(h, 60),
        w(i, 1),
        u > 0 && !a._since)
      ) {
        var x = [1, 12, 4.3482, 7, 24, 60, 60],
          y = i,
          z = 1;
        for (v = i; v >= c; v--)
          b[v] &&
            (m[y] >= z && ((m[y] = 0), (u = 1)),
            u > 0 && (m[v]++, (u = 0), (y = v), (z = 1))),
            (z *= x[v]);
      }
      if (j) for (v = c; v <= i; v++) j && m[v] ? j-- : j || (m[v] = 0);
      return m;
    },
  });
})(jQuery);

/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */ (function () {
  "use strict";
  var f,
    g = [];
  function l(a) {
    g.push(a);
    1 == g.length && f();
  }
  function m() {
    for (; g.length; ) g[0](), g.shift();
  }
  f = function () {
    setTimeout(m);
  };
  function n(a) {
    this.a = p;
    this.b = void 0;
    this.f = [];
    var b = this;
    try {
      a(
        function (a) {
          q(b, a);
        },
        function (a) {
          r(b, a);
        }
      );
    } catch (c) {
      r(b, c);
    }
  }
  var p = 2;
  function t(a) {
    return new n(function (b, c) {
      c(a);
    });
  }
  function u(a) {
    return new n(function (b) {
      b(a);
    });
  }
  function q(a, b) {
    if (a.a == p) {
      if (b == a) throw new TypeError();
      var c = !1;
      try {
        var d = b && b.then;
        if (null != b && "object" == typeof b && "function" == typeof d) {
          d.call(
            b,
            function (b) {
              c || q(a, b);
              c = !0;
            },
            function (b) {
              c || r(a, b);
              c = !0;
            }
          );
          return;
        }
      } catch (e) {
        c || r(a, e);
        return;
      }
      a.a = 0;
      a.b = b;
      v(a);
    }
  }
  function r(a, b) {
    if (a.a == p) {
      if (b == a) throw new TypeError();
      a.a = 1;
      a.b = b;
      v(a);
    }
  }
  function v(a) {
    l(function () {
      if (a.a != p)
        for (; a.f.length; ) {
          var b = a.f.shift(),
            c = b[0],
            d = b[1],
            e = b[2],
            b = b[3];
          try {
            0 == a.a
              ? "function" == typeof c
                ? e(c.call(void 0, a.b))
                : e(a.b)
              : 1 == a.a &&
                ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b));
          } catch (h) {
            b(h);
          }
        }
    });
  }
  n.prototype.g = function (a) {
    return this.c(void 0, a);
  };
  n.prototype.c = function (a, b) {
    var c = this;
    return new n(function (d, e) {
      c.f.push([a, b, d, e]);
      v(c);
    });
  };
  function w(a) {
    return new n(function (b, c) {
      function d(c) {
        return function (d) {
          h[c] = d;
          e += 1;
          e == a.length && b(h);
        };
      }
      var e = 0,
        h = [];
      0 == a.length && b(h);
      for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c);
    });
  }
  function x(a) {
    return new n(function (b, c) {
      for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c);
    });
  }
  window.Promise ||
    ((window.Promise = n),
    (window.Promise.resolve = u),
    (window.Promise.reject = t),
    (window.Promise.race = x),
    (window.Promise.all = w),
    (window.Promise.prototype.then = n.prototype.c),
    (window.Promise.prototype["catch"] = n.prototype.g));
})();

(function () {
  function l(a, b) {
    document.addEventListener
      ? a.addEventListener("scroll", b, !1)
      : a.attachEvent("scroll", b);
  }
  function m(a) {
    document.body
      ? a()
      : document.addEventListener
      ? document.addEventListener("DOMContentLoaded", function c() {
          document.removeEventListener("DOMContentLoaded", c);
          a();
        })
      : document.attachEvent("onreadystatechange", function k() {
          if (
            "interactive" == document.readyState ||
            "complete" == document.readyState
          )
            document.detachEvent("onreadystatechange", k), a();
        });
  }
  function r(a) {
    this.a = document.createElement("div");
    this.a.setAttribute("aria-hidden", "true");
    this.a.appendChild(document.createTextNode(a));
    this.b = document.createElement("span");
    this.c = document.createElement("span");
    this.h = document.createElement("span");
    this.f = document.createElement("span");
    this.g = -1;
    this.b.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.c.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.f.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.h.style.cssText =
      "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
    this.b.appendChild(this.h);
    this.c.appendChild(this.f);
    this.a.appendChild(this.b);
    this.a.appendChild(this.c);
  }
  function t(a, b) {
    a.a.style.cssText =
      "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
      b +
      ";";
  }
  function y(a) {
    var b = a.a.offsetWidth,
      c = b + 100;
    a.f.style.width = c + "px";
    a.c.scrollLeft = c;
    a.b.scrollLeft = a.b.scrollWidth + 100;
    return a.g !== b ? ((a.g = b), !0) : !1;
  }
  function z(a, b) {
    function c() {
      var a = k;
      y(a) && a.a.parentNode && b(a.g);
    }
    var k = a;
    l(a.b, c);
    l(a.c, c);
    y(a);
  }
  function A(a, b) {
    var c = b || {};
    this.family = a;
    this.style = c.style || "normal";
    this.weight = c.weight || "normal";
    this.stretch = c.stretch || "normal";
  }
  var B = null,
    C = null,
    E = null,
    F = null;
  function G() {
    if (null === C)
      if (J() && /Apple/.test(window.navigator.vendor)) {
        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
          window.navigator.userAgent
        );
        C = !!a && 603 > parseInt(a[1], 10);
      } else C = !1;
    return C;
  }
  function J() {
    null === F && (F = !!document.fonts);
    return F;
  }
  function K() {
    if (null === E) {
      var a = document.createElement("div");
      try {
        a.style.font = "condensed 100px sans-serif";
      } catch (b) {}
      E = "" !== a.style.font;
    }
    return E;
  }
  function L(a, b) {
    return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
  }
  A.prototype.load = function (a, b) {
    var c = this,
      k = a || "BESbswy",
      q = 0,
      D = b || 3e3,
      H = new Date().getTime();
    return new Promise(function (a, b) {
      if (J() && !G()) {
        var M = new Promise(function (a, b) {
            function e() {
              new Date().getTime() - H >= D
                ? b()
                : document.fonts.load(L(c, '"' + c.family + '"'), k).then(
                    function (c) {
                      1 <= c.length ? a() : setTimeout(e, 25);
                    },
                    function () {
                      b();
                    }
                  );
            }
            e();
          }),
          N = new Promise(function (a, c) {
            q = setTimeout(c, D);
          });
        Promise.race([N, M]).then(
          function () {
            clearTimeout(q);
            a(c);
          },
          function () {
            b(c);
          }
        );
      } else
        m(function () {
          function u() {
            var b;
            if (
              (b =
                (-1 != f && -1 != g) ||
                (-1 != f && -1 != h) ||
                (-1 != g && -1 != h))
            )
              (b = f != g && f != h && g != h) ||
                (null === B &&
                  ((b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                    window.navigator.userAgent
                  )),
                  (B =
                    !!b &&
                    (536 > parseInt(b[1], 10) ||
                      (536 === parseInt(b[1], 10) &&
                        11 >= parseInt(b[2], 10))))),
                (b =
                  B &&
                  ((f == v && g == v && h == v) ||
                    (f == w && g == w && h == w) ||
                    (f == x && g == x && h == x)))),
                (b = !b);
            b &&
              (d.parentNode && d.parentNode.removeChild(d),
              clearTimeout(q),
              a(c));
          }
          function I() {
            if (new Date().getTime() - H >= D)
              d.parentNode && d.parentNode.removeChild(d), b(c);
            else {
              var a = document.hidden;
              if (!0 === a || void 0 === a)
                (f = e.a.offsetWidth),
                  (g = n.a.offsetWidth),
                  (h = p.a.offsetWidth),
                  u();
              q = setTimeout(I, 50);
            }
          }
          var e = new r(k),
            n = new r(k),
            p = new r(k),
            f = -1,
            g = -1,
            h = -1,
            v = -1,
            w = -1,
            x = -1,
            d = document.createElement("div");
          d.dir = "ltr";
          t(e, L(c, "sans-serif"));
          t(n, L(c, "serif"));
          t(p, L(c, "monospace"));
          d.appendChild(e.a);
          d.appendChild(n.a);
          d.appendChild(p.a);
          document.body.appendChild(d);
          v = e.a.offsetWidth;
          w = n.a.offsetWidth;
          x = p.a.offsetWidth;
          I();
          z(e, function (a) {
            f = a;
            u();
          });
          t(e, L(c, '"' + c.family + '",sans-serif'));
          z(n, function (a) {
            g = a;
            u();
          });
          t(n, L(c, '"' + c.family + '",serif'));
          z(p, function (a) {
            h = a;
            u();
          });
          t(p, L(c, '"' + c.family + '",monospace'));
        });
    });
  };
  "object" === typeof module
    ? (module.exports = A)
    : ((window.FontFaceObserver = A),
      (window.FontFaceObserver.prototype.load = A.prototype.load));
})();

/*jquery.mb.YTPlayer 25-02-2019
 _ jquery.mb.components 
 _ email: matbicoc@gmail.com 
 _ Copyright (c) 2001-2019. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */

var ytp = ytp || {};
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady ||
    ((ytp.YTAPIReady = !0), jQuery(document).trigger("YTAPIReady"));
}
var getYTPVideoID = function (e) {
  var r, t;
  return (
    0 < e.indexOf("youtu.be") || 0 < e.indexOf("youtube.com/embed")
      ? (r = (t =
          0 < (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=")
            ? r.substr(r.lastIndexOf("="), r.length)
            : null)
          ? r.substr(0, r.lastIndexOf("?"))
          : r)
      : (t =
          -1 < e.indexOf("http")
            ? ((r = e.match(/[\\?&]v=([^&#]*)/)[1]),
              0 < e.indexOf("list=") ? e.match(/[\\?&]list=([^&#]*)/)[1] : null)
            : (r = 15 < e.length ? null : e)
            ? null
            : e),
    { videoID: r, playlistID: t }
  );
};
function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)];
  }
}
!(function (jQuery, ytp) {
  (jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.2.9",
    build: "7420",
    author: "Matteo Bicocchi (pupunzi)",
    apiKey: "",
    defaults: {
      videoURL: null,
      containment: "body",
      ratio: "auto",
      fadeOnStartTime: 1e3,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      coverImage: !1,
      loop: !0,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "default",
      vol: 50,
      mute: !1,
      showControls: !0,
      anchor: "center,center",
      showAnnotations: !1,
      cc_load_policy: !1,
      showYTLogo: !0,
      useOnMobile: !0,
      mobileFallbackImage: null,
      playOnlyIfVisible: !1,
      onScreenPercentage: 30,
      stopMovieOnBlur: !0,
      realFullscreen: !0,
      optimizeDisplay: !0,
      abundance: 0.3,
      gaTrack: !0,
      remember_last_time: !1,
      addFilters: !1,
      onReady: function (e) {},
      onError: function (e, r) {},
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y",
    },
    controlBar: null,
    locationProtocol: "https:",
    defaultFilters: {
      grayscale: { value: 0, unit: "%" },
      hue_rotate: { value: 0, unit: "deg" },
      invert: { value: 0, unit: "%" },
      opacity: { value: 0, unit: "%" },
      saturate: { value: 0, unit: "%" },
      sepia: { value: 0, unit: "%" },
      brightness: { value: 0, unit: "%" },
      contrast: { value: 0, unit: "%" },
      blur: { value: 0, unit: "px" },
    },
    buildPlayer: function (options) {
      if (ytp.YTAPIReady || void 0 !== window.YT)
        setTimeout(function () {
          jQuery(document).trigger("YTAPIReady"), (ytp.YTAPIReady = !0);
        }, 100);
      else {
        jQuery("#YTAPI").remove();
        var tag = jQuery("<script>").attr({
          src:
            jQuery.mbYTPlayer.locationProtocol +
            "//www.youtube.com/iframe_api?v=" +
            jQuery.mbYTPlayer.version,
          id: "YTAPI",
        });
        jQuery("head").prepend(tag);
      }
      function isIframe() {
        var r = !1;
        try {
          self.location.href != top.location.href && (r = !0);
        } catch (e) {
          r = !0;
        }
        return r;
      }
      return this.each(function () {
        var YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        $YTPlayer.hide(),
          (YTPlayer.loop = 0),
          (YTPlayer.state = 0),
          (YTPlayer.filters = jQuery.extend(
            !0,
            {},
            jQuery.mbYTPlayer.defaultFilters
          )),
          (YTPlayer.filtersEnabled = !0),
          (YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime()),
          $YTPlayer.addClass("mb_YTPlayer");
        var property =
          $YTPlayer.data("property") &&
          "string" == typeof $YTPlayer.data("property")
            ? eval("(" + $YTPlayer.data("property") + ")")
            : $YTPlayer.data("property");
        "object" != typeof property && (property = {}),
          (YTPlayer.opt = jQuery.extend(
            !0,
            {},
            jQuery.mbYTPlayer.defaults,
            YTPlayer.opt,
            options,
            property
          )),
          (YTPlayer.opt.elementId = YTPlayer.id),
          0 === YTPlayer.opt.vol &&
            ((YTPlayer.opt.vol = 1), (YTPlayer.opt.mute = !0)),
          YTPlayer.opt.autoPlay &&
            0 == YTPlayer.opt.mute &&
            jQuery.mbBrowser.chrome &&
            (jQuery(document).one("mousedown.YTPstart", function () {
              $YTPlayer.YTPPlay();
            }),
            console.info(
              "YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on."
            )),
          YTPlayer.opt.loop &&
            "boolean" == typeof YTPlayer.opt.loop &&
            (YTPlayer.opt.loop = 9999);
        var fullScreenAvailable =
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled;
        (YTPlayer.opt.realFullscreen =
          !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realFullscreen),
          (YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations
            ? "1"
            : "3"),
          (YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy
            ? "1"
            : "0"),
          (YTPlayer.opt.coverImage =
            YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage),
          jQuery.mbBrowser.msie &&
            jQuery.mbBrowser.version < 9 &&
            (YTPlayer.opt.opacity = 1),
          (YTPlayer.opt.containment =
            "self" === YTPlayer.opt.containment
              ? $YTPlayer
              : jQuery(YTPlayer.opt.containment)),
          (YTPlayer.isRetina = window.retina || 1 < window.devicePixelRatio),
          (YTPlayer.opt.ratio =
            "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (YTPlayer.orig_containment_background =
            YTPlayer.opt.containment.css("background-image")),
          $YTPlayer.attr("id") ||
            $YTPlayer.attr("id", "ytp_" + new Date().getTime()),
          (YTPlayer.playerID = "iframe_" + YTPlayer.id),
          (YTPlayer.isAlone = !1),
          (YTPlayer.hasFocus = !0),
          (YTPlayer.videoID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).videoID
            : !!$YTPlayer.attr("href") &&
              getYTPVideoID($YTPlayer.attr("href")).videoID),
          (YTPlayer.playlistID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID
            : !!$YTPlayer.attr("href") &&
              getYTPVideoID($YTPlayer.attr("href")).playlistID);
        var start_from_last = 0;
        if (
          (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) &&
            (start_from_last = parseFloat(
              jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID)
            )),
          YTPlayer.opt.remember_last_time &&
            start_from_last &&
            ((YTPlayer.start_from_last = start_from_last),
            jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)),
          (YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment)),
          (YTPlayer.isBackground = YTPlayer.opt.containment.is("body")),
          !YTPlayer.isBackground || !ytp.backgroundIsInited)
        ) {
          if (
            (YTPlayer.isPlayer && $YTPlayer.show(),
            (YTPlayer.overlay = jQuery("<div/>")
              .css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              })
              .addClass("YTPOverlay")),
            YTPlayer.opt.coverImage ||
              "none" != YTPlayer.orig_containment_background)
          ) {
            var bgndURL = YTPlayer.opt.coverImage
              ? "url(" + YTPlayer.opt.coverImage + ") center center"
              : YTPlayer.orig_containment_background;
            YTPlayer.opt.containment.css({
              background: bgndURL,
              backgroundColor: "#000",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            });
          }
          (YTPlayer.wrapper = jQuery("<div/>")
            .attr("id", "wrapper_" + YTPlayer.id)
            .css({
              position: "absolute",
              zIndex: 0,
              minWidth: "100%",
              minHeight: "100%",
              left: 0,
              top: 0,
              overflow: "hidden",
              opacity: 0,
            })
            .addClass("mbYTP_wrapper")),
            YTPlayer.isPlayer &&
              ((YTPlayer.inlinePlayButton = jQuery("<div/>")
                .addClass("inlinePlayButton")
                .html(jQuery.mbYTPlayer.controls.play)),
              $YTPlayer.append(YTPlayer.inlinePlayButton),
              YTPlayer.inlinePlayButton.on("click", function (e) {
                $YTPlayer.YTPPlay(), e.stopPropagation();
              }),
              YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(),
              YTPlayer.overlay
                .on("click", function () {
                  $YTPlayer.YTPTogglePlay();
                })
                .css({ cursor: "pointer" }));
          var playerBox = jQuery("<div/>")
            .attr("id", YTPlayer.playerID)
            .addClass("playerBox");
          if (
            (playerBox.css({
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              overflow: "hidden",
              opacity: 1,
            }),
            YTPlayer.wrapper.append(playerBox),
            playerBox.after(YTPlayer.overlay),
            YTPlayer.isPlayer &&
              ((YTPlayer.inlineWrapper =
                jQuery("<div/>").addClass("inline-YTPlayer")),
              YTPlayer.inlineWrapper.css({
                position: "relative",
                maxWidth: YTPlayer.opt.containment.css("width"),
              }),
              YTPlayer.opt.containment.css({
                position: "relative",
                paddingBottom: "56.25%",
                overflow: "hidden",
                height: 0,
              }),
              YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),
            YTPlayer.opt.containment
              .children()
              .not("script, style")
              .each(function () {
                "static" == jQuery(this).css("position") &&
                  jQuery(this).css("position", "relative");
              }),
            YTPlayer.isBackground
              ? (jQuery("body").css({ boxSizing: "border-box" }),
                YTPlayer.wrapper.css({
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                }))
              : "static" == YTPlayer.opt.containment.css("position") &&
                (YTPlayer.opt.containment.css({ position: "relative" }),
                $YTPlayer.show()),
            YTPlayer.opt.containment.prepend(YTPlayer.wrapper),
            YTPlayer.isBackground ||
              YTPlayer.overlay
                .on("mouseenter", function () {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.addClass("visible");
                })
                .on("mouseleave", function () {
                  YTPlayer.controlBar &&
                    YTPlayer.controlBar.length &&
                    YTPlayer.controlBar.removeClass("visible");
                }),
            jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile)
          )
            return (
              YTPlayer.opt.mobileFallbackImage &&
                (YTPlayer.wrapper.css({
                  backgroundImage:
                    "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  opacity: 1,
                }),
                YTPlayer.wrapper.css({ opacity: 1 })),
              $YTPlayer
            );
          jQuery.mbBrowser.mobile &&
            YTPlayer.opt.autoPlay &&
            YTPlayer.opt.useOnMobile &&
            jQuery("body").one("touchstart", function () {
              YTPlayer.player.playVideo();
            }),
            jQuery(document).one("YTAPIReady", function () {
              $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id),
                (ytp.YTAPIReady = !0);
            }),
            (YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(
              YTPlayer,
              YTPlayer.opt.onScreenPercentage
            )),
            $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function () {
              var o = this,
                t = jQuery(o);
              (o.isBackground && ytp.backgroundIsInited) ||
                o.isInit ||
                (o.isBackground && (ytp.backgroundIsInited = !0),
                (o.opt.autoPlay =
                  void 0 === o.opt.autoPlay
                    ? !!o.isBackground
                    : o.opt.autoPlay),
                (o.opt.vol = o.opt.vol ? o.opt.vol : 100),
                jQuery.mbYTPlayer.getDataFromAPI(o),
                jQuery(o).on("YTPChanged", function (e) {
                  if (!o.isInit) {
                    o.isInit = !0;
                    var r = {
                      modestbranding: 1,
                      autoplay: 0,
                      controls: 0,
                      showinfo: 0,
                      rel: 0,
                      enablejsapi: 1,
                      version: 3,
                      playerapiid: o.playerID,
                      origin: "*",
                      allowfullscreen: !0,
                      wmode: "transparent",
                      iv_load_policy: o.opt.showAnnotations,
                      cc_load_policy: o.opt.cc_load_policy,
                      playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
                      html5: document.createElement("video").canPlayType
                        ? 1
                        : 0,
                    };
                    new YT.Player(o.playerID, {
                      playerVars: r,
                      events: {
                        onReady: function (e) {
                          (o.player = e.target),
                            o.player.loadVideoById({
                              videoId: o.videoID.toString(),
                              suggestedQuality: o.opt.quality,
                            }),
                            t.trigger("YTPlayerIsReady_" + o.id);
                        },
                        onStateChange: function (e) {
                          if ("function" == typeof e.target.getPlayerState) {
                            var r = e.target.getPlayerState();
                            if (o.preventTrigger || o.isStarting)
                              o.preventTrigger = !1;
                            else {
                              var t;
                              switch (
                                ((o.state = r),
                                e.data == YT.PlayerState.PLAYING &&
                                  e.target.setPlaybackQuality(o.opt.quality),
                                r)
                              ) {
                                case -1:
                                  t = "YTPUnstarted";
                                  break;
                                case 0:
                                  t = "YTPRealEnd";
                                  break;
                                case 1:
                                  (t = "YTPPlay"),
                                    o.controlBar.length &&
                                      o.controlBar
                                        .find(".mb_YTPPlayPause")
                                        .html(jQuery.mbYTPlayer.controls.pause),
                                    o.isPlayer && o.inlinePlayButton.hide(),
                                    jQuery(document).off("mousedown.YTPstart");
                                  break;
                                case 2:
                                  (t = "YTPPause"),
                                    o.controlBar.length &&
                                      o.controlBar
                                        .find(".mb_YTPPlayPause")
                                        .html(jQuery.mbYTPlayer.controls.play),
                                    o.isPlayer && o.inlinePlayButton.show();
                                  break;
                                case 3:
                                  o.player.setPlaybackQuality(o.opt.quality),
                                    (t = "YTPBuffering"),
                                    o.controlBar.length &&
                                      o.controlBar
                                        .find(".mb_YTPPlayPause")
                                        .html(jQuery.mbYTPlayer.controls.play);
                                  break;
                                case 5:
                                  t = "YTPCued";
                              }
                              var a = jQuery.Event(t);
                              (a.time = o.currentTime), jQuery(o).trigger(a);
                            }
                          }
                        },
                        onPlaybackQualityChange: function (e) {
                          var r = e.target.getPlaybackQuality(),
                            t = jQuery.Event("YTPQualityChange");
                          (t.quality = r), jQuery(o).trigger(t);
                        },
                        onError: function (e) {
                          switch (
                            ("function" == typeof o.opt.onError &&
                              o.opt.onError(t, e),
                            e.data)
                          ) {
                            case 2:
                              console.error(
                                "video ID:: " +
                                  o.videoID +
                                  ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks."
                              );
                              break;
                            case 5:
                              console.error(
                                "video ID:: " +
                                  o.videoID +
                                  ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred."
                              );
                              break;
                            case 100:
                              console.error(
                                "video ID:: " +
                                  o.videoID +
                                  ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private."
                              );
                              break;
                            case 101:
                            case 150:
                              console.error(
                                "video ID:: " +
                                  o.videoID +
                                  ": The owner of the requested video does not allow it to be played in embedded players."
                              );
                          }
                          o.isList && jQuery(o).YTPPlayNext();
                        },
                      },
                    }),
                      t.on("YTPlayerIsReady_" + o.id, function () {
                        if (o.isReady) return this;
                        (o.playerEl = o.player.getIframe()),
                          jQuery(o.playerEl).unselectable(),
                          t.optimizeDisplay(),
                          jQuery(window)
                            .off("resize.YTP_" + o.id)
                            .on("resize.YTP_" + o.id, function () {
                              t.optimizeDisplay();
                            }),
                          o.opt.remember_last_time &&
                            jQuery(window).on(
                              "unload.YTP_" + o.id,
                              function () {
                                var e = o.player.getCurrentTime();
                                jQuery.mbCookie.set(
                                  "YTPlayer_start_from" + o.videoID,
                                  e,
                                  0
                                );
                              }
                            ),
                          t.YTPCheckForState();
                      });
                  }
                }));
            }),
            $YTPlayer.off("YTPTime.mask"),
            jQuery.mbYTPlayer.applyMask(YTPlayer);
        }
      });
    },
    isOnScreen: function (e, r) {
      r = r || 10;
      var t = e.wrapper,
        a = jQuery(window).scrollTop(),
        o = a + jQuery(window).height(),
        n = (t.height() * r) / 100,
        i = t.offset().top + n;
      return t.offset().top + (t.height() - n) <= o && a <= i;
    },
    getDataFromAPI: function (n) {
      (n.videoData = jQuery.mbStorage.get("YTPlayer_data_" + n.videoID)),
        n.videoData
          ? (setTimeout(function () {
              n.dataReceived = !0;
              var e = jQuery.Event("YTPChanged");
              (e.time = n.currentTime),
                (e.videoId = n.videoID),
                (e.opt = n.opt),
                jQuery(n).trigger(e);
              var r = jQuery.Event("YTPData");
              for (var t in ((r.prop = {}), n.videoData))
                r.prop[t] = n.videoData[t];
              jQuery(n).trigger(r);
            }, n.opt.fadeOnStartTime),
            (n.hasData = !0))
          : jQuery.mbYTPlayer.apiKey
          ? jQuery.getJSON(
              jQuery.mbYTPlayer.locationProtocol +
                "//www.googleapis.com/youtube/v3/videos?id=" +
                n.videoID +
                "&key=" +
                jQuery.mbYTPlayer.apiKey +
                "&part=snippet",
              function (e) {
                n.dataReceived = !0;
                var r,
                  t = jQuery.Event("YTPChanged");
                (t.time = n.currentTime),
                  (t.videoId = n.videoID),
                  jQuery(n).trigger(t),
                  e.items[0]
                    ? ((r = e.items[0].snippet),
                      (n.videoData = {}),
                      (n.videoData.id = n.videoID),
                      (n.videoData.channelTitle = r.channelTitle),
                      (n.videoData.title = r.title),
                      (n.videoData.description =
                        r.description.length < 400
                          ? r.description
                          : r.description.substring(0, 400) + " ..."),
                      (n.videoData.thumb_max = r.thumbnails.maxres
                        ? r.thumbnails.maxres.url
                        : null),
                      (n.videoData.thumb_high = r.thumbnails.high
                        ? r.thumbnails.high.url
                        : null),
                      (n.videoData.thumb_medium = r.thumbnails.medium
                        ? r.thumbnails.medium.url
                        : null),
                      jQuery.mbStorage.set(
                        "YTPlayer_data_" + n.videoID,
                        n.videoData
                      ),
                      (n.hasData = !0))
                    : ((n.videoData = {}), (n.hasData = !1));
                var a = jQuery.Event("YTPData");
                for (var o in ((a.prop = {}), n.videoData))
                  a.prop[o] = n.videoData[o];
                jQuery(n).trigger(a);
              }
            )
          : (setTimeout(function () {
              var e = jQuery.Event("YTPChanged");
              (e.time = n.currentTime),
                (e.videoId = n.videoID),
                jQuery(n).trigger(e);
            }, 10),
            (n.videoData = null)),
        (n.opt.ratio = "auto" == n.opt.ratio ? 16 / 9 : n.opt.ratio),
        n.isPlayer &&
          !n.opt.autoPlay &&
          ((n.loading = jQuery("<div/>")
            .addClass("loading")
            .html("Loading")
            .hide()),
          jQuery(n).append(n.loading),
          n.loading.fadeIn());
    },
    removeStoredData: function () {
      jQuery.mbStorage.remove();
    },
    getVideoData: function () {
      return this.get(0).videoData;
    },
    getVideoID: function () {
      return this.get(0).videoID || !1;
    },
    getPlaylistID: function () {
      return this.get(0).playlistID || !1;
    },
    setVideoQuality: function (e) {
      var r = this.get(0);
      return (
        jQuery(r).YTPPause(),
        (r.opt.quality = e),
        r.player.setPlaybackQuality(e),
        jQuery(r).YTPPlay(),
        this
      );
    },
    getVideoQuality: function () {
      return this.get(0).player.getPlaybackQuality();
    },
    playlist: function (e, r, t) {
      var a = this.get(0);
      return (
        (a.isList = !0),
        r && (e = jQuery.shuffle(e)),
        a.videoID ||
          ((a.videos = e),
          (a.videoCounter = 1),
          (a.videoLength = e.length),
          jQuery(a).data("property", e[0]),
          jQuery(a).YTPlayer()),
        "function" == typeof t &&
          jQuery(a).on("YTPChanged", function () {
            t(a);
          }),
        jQuery(a).on("YTPEnd", function () {
          jQuery(a).YTPPlayNext();
        }),
        this
      );
    },
    playNext: function () {
      var e = this.get(0);
      return (
        e.videoCounter++,
        e.videoCounter > e.videoLength && (e.videoCounter = 1),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playPrev: function () {
      var e = this.get(0);
      return (
        e.videoCounter--,
        e.videoCounter <= 0 && (e.videoCounter = e.videoLength),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playIndex: function (e) {
      var r = this.get(0);
      r.checkForStartAt &&
        (clearInterval(r.checkForStartAt), clearInterval(r.getState)),
        (r.videoCounter = e),
        r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
      var t = r.videos[r.videoCounter - 1];
      return jQuery(r).YTPChangeVideo(t), this;
    },
    changeVideo: function (e) {
      var r = this,
        t = r.get(0);
      (t.opt.startAt = 0),
        (t.opt.stopAt = 0),
        (t.opt.mask = !1),
        (t.opt.mute = !0),
        (t.opt.autoPlay = !0),
        (t.opt.addFilters = !1),
        (t.opt.coverImage = !1),
        (t.hasData = !1),
        (t.hasChanged = !0),
        (t.player.loopTime = void 0),
        e && jQuery.extend(t.opt, e),
        (t.videoID = getYTPVideoID(t.opt.videoURL).videoID),
        t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999),
        t.wrapper.css({ background: "none" }),
        jQuery(t.playerEl).CSSAnimate(
          { opacity: 0 },
          t.opt.fadeOnStartTime,
          function () {
            jQuery.mbYTPlayer.getDataFromAPI(t),
              r
                .YTPGetPlayer()
                .loadVideoById({
                  videoId: t.videoID,
                  suggestedQuality: t.opt.quality,
                }),
              r.YTPPause(),
              r.optimizeDisplay(),
              r.YTPCheckForState();
          }
        );
      var a = jQuery.Event("YTPChangeVideo");
      return (
        (a.time = t.currentTime),
        jQuery(t).trigger(a),
        jQuery.mbYTPlayer.applyMask(t),
        this
      );
    },
    getPlayer: function () {
      var e = this.get(0);
      return (e.isReady && e.player) || null;
    },
    playerDestroy: function () {
      var e = this.get(0);
      return (
        e.isReady &&
          ((ytp.YTAPIReady = !0),
          (ytp.backgroundIsInited = !1),
          (e.isInit = !1),
          (e.videoID = null),
          (e.isReady = !1),
          e.wrapper.remove(),
          jQuery("#controlBar_" + e.id).remove(),
          clearInterval(e.checkForStartAt),
          clearInterval(e.getState)),
        this
      );
    },
    fullscreen: function (real) {
      var YTPlayer = this.get(0);
      void 0 === real && (real = eval(YTPlayer.opt.realFullscreen));
      var controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isPlayer
          ? YTPlayer.opt.containment
          : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.mbBrowser.mozilla
          ? "mozfullscreenchange"
          : jQuery.mbBrowser.webkit
          ? "webkitfullscreenchange"
          : "fullscreenchange";
        jQuery(document)
          .off(fullscreenchange)
          .on(fullscreenchange, function () {
            RunPrefixMethod(document, "IsFullScreen") ||
            RunPrefixMethod(document, "FullScreen")
              ? (jQuery(YTPlayer).YTPSetVideoQuality("default"),
                jQuery(YTPlayer).trigger("YTPFullScreenStart"))
              : ((YTPlayer.isAlone = !1),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                videoWrapper.removeClass("YTPFullscreen"),
                videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime
                ),
                videoWrapper.css({ zIndex: 0 }),
                YTPlayer.isBackground
                  ? jQuery("body").after(controls)
                  : YTPlayer.wrapper.before(controls),
                jQuery(window).resize(),
                jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
          });
      }
      if (YTPlayer.isAlone)
        jQuery(document).off("mousemove.YTPlayer"),
          clearTimeout(YTPlayer.hideCursor),
          YTPlayer.overlay.css({ cursor: "auto" }),
          real
            ? cancelFullscreen()
            : (videoWrapper.CSSAnimate(
                { opacity: YTPlayer.opt.opacity },
                YTPlayer.opt.fadeOnStartTime
              ),
              videoWrapper.css({ zIndex: 0 })),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
          (YTPlayer.isAlone = !1);
      else {
        function hideMouse() {
          YTPlayer.overlay.css({ cursor: "none" });
        }
        jQuery(document).on("mousemove.YTPlayer", function (e) {
          YTPlayer.overlay.css({ cursor: "auto" }),
            clearTimeout(YTPlayer.hideCursor),
            jQuery(e.target).parents().is(".mb_YTPBar") ||
              (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
        }),
          hideMouse(),
          real
            ? (videoWrapper.css({ opacity: 0 }),
              videoWrapper.addClass("YTPFullscreen"),
              launchFullscreen(videoWrapper.get(0)),
              setTimeout(function () {
                videoWrapper.CSSAnimate(
                  { opacity: 1 },
                  2 * YTPlayer.opt.fadeOnStartTime
                ),
                  videoWrapper.append(controls),
                  jQuery(YTPlayer).optimizeDisplay(),
                  YTPlayer.player.seekTo(
                    YTPlayer.player.getCurrentTime() + 0.1,
                    !0
                  );
              }, YTPlayer.opt.fadeOnStartTime))
            : videoWrapper
                .css({ zIndex: 1e4 })
                .CSSAnimate({ opacity: 1 }, 2 * YTPlayer.opt.fadeOnStartTime),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
          (YTPlayer.isAlone = !0);
      }
      function RunPrefixMethod(e, r) {
        for (
          var t, a, o = ["webkit", "moz", "ms", "o", ""], n = 0;
          n < o.length && !e[t];

        ) {
          if (
            ((t = r),
            "" == o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)),
            "undefined" != (a = typeof e[(t = o[n] + t)]))
          )
            return (o = [o[n]]), "function" == a ? e[t]() : e[t];
          n++;
        }
      }
      function launchFullscreen(e) {
        RunPrefixMethod(e, "RequestFullScreen");
      }
      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") ||
          RunPrefixMethod(document, "IsFullScreen")) &&
          RunPrefixMethod(document, "CancelFullScreen");
      }
      return this;
    },
    toggleLoops: function () {
      var e = this.get(0),
        r = e.opt;
      return (
        1 == r.loop
          ? (r.loop = 0)
          : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(),
            (r.loop = 1)),
        this
      );
    },
    play: function () {
      var e = this.get(0),
        r = jQuery(e);
      return (
        e.isReady &&
          (setTimeout(function () {
            r.YTPSetAbundance(e.opt.abundance);
          }, 300),
          e.player.playVideo(),
          jQuery(e.playerEl).css({ opacity: 1 }),
          e.wrapper.css({ backgroundImage: "none" }),
          e.wrapper.CSSAnimate(
            { opacity: e.isAlone ? 1 : e.opt.opacity },
            e.opt.fadeOnStartTime
          ),
          jQuery("#controlBar_" + e.id)
            .find(".mb_YTPPlayPause")
            .html(jQuery.mbYTPlayer.controls.pause),
          (e.state = 1)),
        this
      );
    },
    togglePlay: function (e) {
      var r = this.get(0);
      return (
        r.isReady &&
          (1 == r.state ? this.YTPPause() : this.YTPPlay(),
          "function" == typeof e && e(r.state)),
        this
      );
    },
    stop: function () {
      var e = this.get(0);
      return (
        e.isReady &&
          (jQuery("#controlBar_" + e.id)
            .find(".mb_YTPPlayPause")
            .html(jQuery.mbYTPlayer.controls.play),
          e.player.stopVideo()),
        this
      );
    },
    pause: function () {
      var e = this.get(0);
      return (
        e.isReady &&
          (e.opt.abundance < 0.2 && this.YTPSetAbundance(0.2),
          e.player.pauseVideo(),
          (e.state = 2)),
        this
      );
    },
    seekTo: function (e) {
      var r = this.get(0);
      return r.isReady && r.player.seekTo(e, !0), this;
    },
    setVolume: function (e) {
      var r = this.get(0);
      return (
        r.isReady &&
          ((r.opt.vol = e),
          this.YTPUnmute(),
          r.player.setVolume(r.opt.vol),
          r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e)),
        this
      );
    },
    getVolume: function () {
      var e = this.get(0);
      return e.isReady ? e.player.getVolume() : this;
    },
    toggleVolume: function () {
      var e = this.get(0);
      return (
        e.isReady &&
          (e.isMute
            ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol),
              this.YTPUnmute())
            : this.YTPMute()),
        this
      );
    },
    mute: function () {
      var e = this.get(0);
      if (!e.isReady) return this;
      if (e.isMute) return this;
      e.player.mute(),
        (e.isMute = !0),
        e.player.setVolume(0),
        e.volumeBar &&
          e.volumeBar.length &&
          10 < e.volumeBar.width() &&
          e.volumeBar.updateSliderVal(0),
        jQuery("#controlBar_" + e.id)
          .find(".mb_YTPMuteUnmute")
          .html(jQuery.mbYTPlayer.controls.unmute),
        jQuery(e).addClass("isMuted"),
        e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
      var r = jQuery.Event("YTPMuted");
      return (
        (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this
      );
    },
    unmute: function () {
      var e = this.get(0);
      if (!e.isReady) return this;
      if (!e.isMute) return this;
      e.player.unMute(),
        (e.isMute = !1),
        jQuery(e).YTPSetVolume(e.opt.vol),
        e.volumeBar &&
          e.volumeBar.length &&
          e.volumeBar.updateSliderVal(10 < e.opt.vol ? e.opt.vol : 10),
        jQuery("#controlBar_" + e.id)
          .find(".mb_YTPMuteUnmute")
          .html(jQuery.mbYTPlayer.controls.mute),
        jQuery(e).removeClass("isMuted"),
        e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
      var r = jQuery.Event("YTPUnmuted");
      return (
        (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this
      );
    },
    applyFilter: function (e, r) {
      var t = this.get(0);
      if (!t.isReady) return this;
      (t.filters[e].value = r), t.filtersEnabled && this.YTPEnableFilters();
    },
    applyFilters: function (e) {
      var r = this,
        t = r.get(0);
      if (!t.isReady) return this;
      if (!t.isReady)
        return (
          jQuery(t).on("YTPReady", function () {
            r.YTPApplyFilters(e);
          }),
          this
        );
      for (var a in e) r.YTPApplyFilter(a, e[a]);
      r.trigger("YTPFiltersApplied");
    },
    toggleFilter: function (e, r) {
      var t = this.get(0);
      return (
        t.isReady &&
          (t.filters[e].value
            ? (t.filters[e].value = 0)
            : (t.filters[e].value = r),
          t.filtersEnabled && jQuery(t).YTPEnableFilters()),
        this
      );
    },
    toggleFilters: function (e) {
      var r = this.get(0);
      return (
        r.isReady &&
          (r.filtersEnabled
            ? (jQuery(r).trigger("YTPDisableFilters"),
              jQuery(r).YTPDisableFilters())
            : (jQuery(r).YTPEnableFilters(),
              jQuery(r).trigger("YTPEnableFilters")),
          "function" == typeof e && e(r.filtersEnabled)),
        this
      );
    },
    disableFilters: function () {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e.playerEl);
      return (
        r.css("-webkit-filter", ""),
        r.css("filter", ""),
        (e.filtersEnabled = !1),
        this
      );
    },
    enableFilters: function () {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e.playerEl),
        t = "";
      for (var a in e.filters)
        e.filters[a].value &&
          (t +=
            a.replace("_", "-") +
            "(" +
            e.filters[a].value +
            e.filters[a].unit +
            ") ");
      return (
        r.css("-webkit-filter", t),
        r.css("filter", t),
        (e.filtersEnabled = !0),
        this
      );
    },
    removeFilter: function (e, r) {
      var t = this.get(0);
      if (!t.isReady) return this;
      if (("function" == typeof e && ((r = e), (e = null)), e))
        this.YTPApplyFilter(e, 0), "function" == typeof r && r(e);
      else {
        for (var a in t.filters) this.YTPApplyFilter(a, 0);
        "function" == typeof r && r(a),
          (t.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters));
      }
      var o = jQuery.Event("YTPFiltersApplied");
      return this.trigger(o), this;
    },
    getFilters: function () {
      var e = this.get(0);
      return e.isReady ? e.filters : this;
    },
    addMask: function (e) {
      var r = this.get(0);
      if (!r.isReady) return this;
      e || (e = r.actualMask);
      var t = jQuery("<img/>")
        .attr("src", e)
        .on("load", function () {
          r.overlay.CSSAnimate(
            { opacity: 0 },
            r.opt.fadeOnStartTime,
            function () {
              (r.hasMask = !0),
                t.remove(),
                r.overlay.css({
                  backgroundImage: "url(" + e + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }),
                r.overlay.CSSAnimate({ opacity: 1 }, r.opt.fadeOnStartTime);
            }
          );
        });
      return this;
    },
    removeMask: function () {
      var e = this.get(0);
      return (
        e.isReady &&
          e.overlay.CSSAnimate(
            { opacity: 0 },
            e.opt.fadeOnStartTime,
            function () {
              (e.hasMask = !1),
                e.overlay.css({
                  backgroundImage: "",
                  backgroundRepeat: "",
                  backgroundPosition: "",
                  backgroundSize: "",
                }),
                e.overlay.CSSAnimate({ opacity: 1 }, e.opt.fadeOnStartTime);
            }
          ),
        this
      );
    },
    applyMask: function (t) {
      var a = jQuery(t);
      if (!t.isReady) return this;
      if ((a.off("YTPTime.mask"), t.opt.mask))
        if ("string" == typeof t.opt.mask)
          a.YTPAddMask(t.opt.mask), (t.actualMask = t.opt.mask);
        else if ("object" == typeof t.opt.mask) {
          for (var e in t.opt.mask)
            if (t.opt.mask[e]) jQuery("<img/>").attr("src", t.opt.mask[e]);
          t.opt.mask[0] && a.YTPAddMask(t.opt.mask[0]),
            a.on("YTPTime.mask", function (e) {
              for (var r in t.opt.mask)
                e.time == r &&
                  (t.opt.mask[r]
                    ? (a.YTPAddMask(t.opt.mask[r]),
                      (t.actualMask = t.opt.mask[r]))
                    : a.YTPRemoveMask());
            });
        }
    },
    toggleMask: function () {
      var e = this.get(0);
      if (!e.isReady) return this;
      var r = jQuery(e);
      return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this;
    },
    manageProgress: function () {
      var e = this.get(0),
        r = jQuery("#controlBar_" + e.id),
        t = r.find(".mb_YTPProgress"),
        a = r.find(".mb_YTPLoaded"),
        o = r.find(".mb_YTPseekbar"),
        n = t.outerWidth(),
        i = Math.floor(e.player.getCurrentTime()),
        l = Math.floor(e.player.getDuration()),
        s = (i * n) / l,
        u = 100 * e.player.getVideoLoadedFraction();
      return (
        a.css({ left: 0, width: u + "%" }),
        o.css({ left: 0, width: s }),
        { totalTime: l, currentTime: i }
      );
    },
    buildControls: function (YTPlayer) {
      if (
        (jQuery("#controlBar_" + YTPlayer.id).remove(),
        YTPlayer.opt.showControls)
      ) {
        if (
          ((YTPlayer.opt.showYTLogo =
            YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl),
          !jQuery("#controlBar_" + YTPlayer.id).length)
        ) {
          YTPlayer.controlBar = jQuery("<div/>")
            .attr("id", "controlBar_" + YTPlayer.id)
            .addClass("mb_YTPBar")
            .css({
              whiteSpace: "noWrap",
              position: YTPlayer.isBackground ? "fixed" : "absolute",
              zIndex: YTPlayer.isBackground ? 1e4 : 1e3,
            })
            .hide()
            .on("click", function (e) {
              e.stopPropagation();
            });
          var buttonBar = jQuery("<div/>").addClass("buttonBar"),
            playpause = jQuery(
              "<span>" + jQuery.mbYTPlayer.controls.play + "</span>"
            )
              .addClass("mb_YTPPlayPause ytpicon")
              .on("click", function (e) {
                e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay();
              }),
            MuteUnmute = jQuery(
              "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>"
            )
              .addClass("mb_YTPMuteUnmute ytpicon")
              .on("click", function (e) {
                e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume();
              }),
            volumeBar = jQuery("<div/>")
              .addClass("mb_YTPVolumeBar")
              .css({ display: "inline-block" });
          YTPlayer.volumeBar = volumeBar;
          var idx = jQuery("<span/>").addClass("mb_YTPTime"),
            vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
          vURL.indexOf("http") < 0 &&
            (vURL =
              jQuery.mbYTPlayer.locationProtocol +
              "//www.youtube.com/watch?v=" +
              YTPlayer.opt.videoURL);
          var movieUrl = jQuery("<span/>")
              .html(jQuery.mbYTPlayer.controls.ytLogo)
              .addClass("mb_YTPUrl ytpicon")
              .attr("title", "view on YouTube")
              .on("click", function () {
                window.open(vURL, "viewOnYT");
              }),
            onlyVideo = jQuery("<span/>")
              .html(jQuery.mbYTPlayer.controls.onlyYT)
              .addClass("mb_OnlyYT ytpicon")
              .on("click", function (e) {
                e.stopPropagation(),
                  jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen);
              }),
            progressBar = jQuery("<div/>")
              .addClass("mb_YTPProgress")
              .css("position", "absolute")
              .on("click", function (e) {
                e.stopPropagation(),
                  timeBar.css({ width: e.clientX - timeBar.offset().left }),
                  (YTPlayer.timeW = e.clientX - timeBar.offset().left),
                  YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
                var r = Math.floor(YTPlayer.player.getDuration());
                (YTPlayer.goto =
                  (timeBar.outerWidth() * r) / progressBar.outerWidth()),
                  YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0),
                  YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
              }),
            loadedBar = jQuery("<div/>")
              .addClass("mb_YTPLoaded")
              .css("position", "absolute"),
            timeBar = jQuery("<div/>")
              .addClass("mb_YTPseekbar")
              .css("position", "absolute");
          progressBar.append(loadedBar).append(timeBar),
            buttonBar
              .append(playpause)
              .append(MuteUnmute)
              .append(volumeBar)
              .append(idx),
            YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl),
            (YTPlayer.isBackground ||
              (eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground)) &&
              buttonBar.append(onlyVideo),
            YTPlayer.controlBar.append(buttonBar).append(progressBar),
            YTPlayer.isBackground
              ? jQuery("body").after(YTPlayer.controlBar)
              : (YTPlayer.controlBar.addClass("inlinePlayer"),
                YTPlayer.wrapper.before(YTPlayer.controlBar)),
            volumeBar.simpleSlider({
              initialval: YTPlayer.opt.vol,
              scale: 100,
              orientation: "h",
              callback: function (e) {
                0 == e.value
                  ? jQuery(YTPlayer).YTPMute()
                  : jQuery(YTPlayer).YTPUnmute(),
                  YTPlayer.player.setVolume(e.value),
                  YTPlayer.isMute || (YTPlayer.opt.vol = e.value);
              },
            });
        }
      } else YTPlayer.controlBar = !1;
    },
    checkForState: function () {
      var YTPlayer = this.get(0),
        $YTPlayer = jQuery(YTPlayer);
      clearInterval(YTPlayer.getState);
      var interval = 100;
      if (!jQuery.contains(document, YTPlayer))
        return (
          $YTPlayer.YTPPlayerDestroy(),
          clearInterval(YTPlayer.getState),
          void clearInterval(YTPlayer.checkForStartAt)
        );
      jQuery.mbYTPlayer.checkForStart(YTPlayer),
        (YTPlayer.getState = setInterval(function () {
          var $YTPlayer = jQuery(YTPlayer);
          if (YTPlayer.isReady) {
            var prog = jQuery(YTPlayer).YTPManageProgress(),
              stopAt =
                YTPlayer.opt.stopAt > YTPlayer.opt.startAt
                  ? YTPlayer.opt.stopAt
                  : 0;
            if (
              ((stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0),
              YTPlayer.currentTime != prog.currentTime)
            ) {
              var YTPEvent = jQuery.Event("YTPTime");
              (YTPEvent.time = YTPlayer.currentTime),
                jQuery(YTPlayer).trigger(YTPEvent);
            }
            if (
              ((YTPlayer.currentTime = prog.currentTime),
              (YTPlayer.totalTime = YTPlayer.player.getDuration()),
              0 == YTPlayer.player.getVolume()
                ? $YTPlayer.addClass("isMuted")
                : $YTPlayer.removeClass("isMuted"),
              YTPlayer.opt.showControls &&
                (prog.totalTime
                  ? YTPlayer.controlBar
                      .find(".mb_YTPTime")
                      .html(
                        jQuery.mbYTPlayer.formatTime(prog.currentTime) +
                          " / " +
                          jQuery.mbYTPlayer.formatTime(prog.totalTime)
                      )
                  : YTPlayer.controlBar
                      .find(".mb_YTPTime")
                      .html("-- : -- / -- : --")),
              eval(YTPlayer.opt.stopMovieOnBlur) &&
                (document.hasFocus()
                  ? document.hasFocus() &&
                    !YTPlayer.hasFocus &&
                    -1 != YTPlayer.state &&
                    0 != YTPlayer.state &&
                    ((YTPlayer.hasFocus = !0),
                    (YTPlayer.preventTrigger = !0),
                    $YTPlayer.YTPPlay())
                  : 1 == YTPlayer.state &&
                    ((YTPlayer.hasFocus = !1),
                    (YTPlayer.preventTrigger = !0),
                    $YTPlayer.YTPPause())),
              YTPlayer.opt.playOnlyIfVisible)
            ) {
              var isOnScreen = jQuery.mbYTPlayer.isOnScreen(
                YTPlayer,
                YTPlayer.opt.onScreenPercentage
              );
              isOnScreen || 1 != YTPlayer.state
                ? isOnScreen &&
                  !YTPlayer.isOnScreen &&
                  ((YTPlayer.isOnScreen = !0), YTPlayer.player.playVideo())
                : ((YTPlayer.isOnScreen = !1), $YTPlayer.YTPPause());
            }
            if (
              (YTPlayer.controlBar.length &&
              YTPlayer.controlBar.outerWidth() <= 400 &&
              !YTPlayer.isCompact
                ? (YTPlayer.controlBar.addClass("compact"),
                  (YTPlayer.isCompact = !0),
                  !YTPlayer.isMute &&
                    YTPlayer.volumeBar &&
                    YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol))
                : YTPlayer.controlBar.length &&
                  400 < YTPlayer.controlBar.outerWidth() &&
                  YTPlayer.isCompact &&
                  (YTPlayer.controlBar.removeClass("compact"),
                  (YTPlayer.isCompact = !1),
                  !YTPlayer.isMute &&
                    YTPlayer.volumeBar &&
                    YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
              0 < YTPlayer.player.getPlayerState() &&
                (parseFloat(
                  YTPlayer.player.getDuration() -
                    YTPlayer.opt.fadeOnStartTime / 1e3
                ) < YTPlayer.player.getCurrentTime() ||
                  (0 < stopAt &&
                    parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)))
            ) {
              if (YTPlayer.isEnded) return;
              if (
                ((YTPlayer.isEnded = !0),
                setTimeout(function () {
                  YTPlayer.isEnded = !1;
                }, 1e3),
                YTPlayer.isList)
              ) {
                if (
                  !YTPlayer.opt.loop ||
                  (0 < YTPlayer.opt.loop &&
                    YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
                ) {
                  (YTPlayer.player.loopTime = void 0),
                    clearInterval(YTPlayer.getState);
                  var YTPEnd = jQuery.Event("YTPEnd");
                  return (
                    (YTPEnd.time = YTPlayer.currentTime),
                    void jQuery(YTPlayer).trigger(YTPEnd)
                  );
                }
              } else if (
                !YTPlayer.opt.loop ||
                (0 < YTPlayer.opt.loop &&
                  YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
              ) {
                (YTPlayer.player.loopTime = void 0), (YTPlayer.state = 2);
                var bgndURL = YTPlayer.opt.coverImage
                  ? "url(" + YTPlayer.opt.coverImage + ") center center"
                  : YTPlayer.orig_containment_background;
                return (
                  YTPlayer.opt.containment.css({
                    background: bgndURL,
                    backgroundSize: "cover",
                  }),
                  jQuery(YTPlayer).YTPPause(),
                  void YTPlayer.wrapper.CSSAnimate(
                    { opacity: 0 },
                    YTPlayer.opt.fadeOnStartTime,
                    function () {
                      YTPlayer.controlBar.length &&
                        YTPlayer.controlBar
                          .find(".mb_YTPPlayPause")
                          .html(jQuery.mbYTPlayer.controls.play);
                      var e = jQuery.Event("YTPEnd");
                      (e.time = YTPlayer.currentTime),
                        jQuery(YTPlayer).trigger(e),
                        YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                      var r = YTPlayer.opt.coverImage
                        ? "url(" + YTPlayer.opt.coverImage + ") center center"
                        : YTPlayer.orig_containment_background;
                      YTPlayer.opt.containment.css({
                        background: r,
                        backgroundSize: "cover",
                      });
                    }
                  )
                );
              }
              (YTPlayer.player.loopTime = YTPlayer.player.loopTime
                ? ++YTPlayer.player.loopTime
                : 1),
                (YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1),
                (YTPlayer.preventTrigger = !0),
                (YTPlayer.state = 2),
                YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
            }
          }
        }, interval));
    },
    checkForStart: function (YTPlayer) {
      var $YTPlayer = jQuery(YTPlayer);
      if (jQuery.contains(document, YTPlayer)) {
        if ((jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay))
          if (YTPlayer.opt.addRaster) {
            var classN =
              "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
            YTPlayer.overlay.addClass(
              YTPlayer.isRetina ? classN + " retina" : classN
            );
          } else
            YTPlayer.overlay.removeClass(function (e, r) {
              var t = r.split(" "),
                a = [];
              return (
                jQuery.each(t, function (e, r) {
                  /raster.*/.test(r) && a.push(r);
                }),
                a.push("retina"),
                a.join(" ")
              );
            });
        (YTPlayer.preventTrigger = !0),
          (YTPlayer.state = 2),
          (YTPlayer.preventTrigger = !0),
          YTPlayer.player.mute(),
          YTPlayer.player.playVideo(),
          (YTPlayer.isStarting = !0);
        var startAt = YTPlayer.start_from_last
          ? YTPlayer.start_from_last
          : YTPlayer.opt.startAt
          ? YTPlayer.opt.startAt
          : 1;
        return (
          (YTPlayer.preventTrigger = !0),
          (YTPlayer.checkForStartAt = setInterval(function () {
            YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
            var canPlayVideo =
              YTPlayer.player.getVideoLoadedFraction() >=
              startAt / YTPlayer.player.getDuration();
            if (
              0 < YTPlayer.player.getDuration() &&
              YTPlayer.player.getCurrentTime() >= startAt &&
              canPlayVideo
            ) {
              (YTPlayer.start_from_last = null),
                (YTPlayer.preventTrigger = !0),
                $YTPlayer.YTPPause(),
                clearInterval(YTPlayer.checkForStartAt),
                "function" == typeof YTPlayer.opt.onReady &&
                  YTPlayer.opt.onReady(YTPlayer),
                (YTPlayer.isReady = !0),
                $YTPlayer.YTPRemoveFilter(),
                YTPlayer.opt.addFilters
                  ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters)
                  : $YTPlayer.YTPApplyFilters(),
                $YTPlayer.YTPEnableFilters();
              var YTPready = jQuery.Event("YTPReady");
              if (
                ((YTPready.time = YTPlayer.currentTime),
                $YTPlayer.trigger(YTPready),
                (YTPlayer.state = 2),
                YTPlayer.opt.mute
                  ? $YTPlayer.YTPMute()
                  : (YTPlayer.player.unMute(),
                    YTPlayer.opt.autoPlay &&
                      console.debug(
                        "To make the video 'auto-play' you must mute the audio according with the new vendor policy"
                      )),
                "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack)
                  ? _gaq.push([
                      "_trackEvent",
                      "YTPlayer",
                      "Play",
                      YTPlayer.hasData
                        ? YTPlayer.videoData.title
                        : YTPlayer.videoID.toString(),
                    ])
                  : "undefined" != typeof ga &&
                    eval(YTPlayer.opt.gaTrack) &&
                    ga(
                      "send",
                      "event",
                      "YTPlayer",
                      "play",
                      YTPlayer.hasData
                        ? YTPlayer.videoData.title
                        : YTPlayer.videoID.toString()
                    ),
                YTPlayer.opt.autoPlay)
              ) {
                var YTPStart = jQuery.Event("YTPStart");
                (YTPStart.time = YTPlayer.currentTime),
                  jQuery(YTPlayer).trigger(YTPStart),
                  (YTPlayer.isStarting = !1),
                  "mac" == jQuery.mbBrowser.os.name &&
                    jQuery.mbBrowser.safari &&
                    jQuery("body").one("mousedown.YTPstart", function () {
                      $YTPlayer.YTPPlay();
                    }),
                  $YTPlayer.YTPPlay();
              } else
                (YTPlayer.preventTrigger = !0),
                  $YTPlayer.YTPPause(),
                  YTPlayer.start_from_last &&
                    YTPlayer.player.seekTo(startAt, !0),
                  setTimeout(function () {
                    (YTPlayer.preventTrigger = !0),
                      $YTPlayer.YTPPause(),
                      YTPlayer.isPlayer ||
                        (YTPlayer.opt.coverImage
                          ? (YTPlayer.wrapper.css({ opacity: 0 }),
                            setTimeout(function () {
                              var e = YTPlayer.opt.coverImage
                                ? "url(" +
                                  YTPlayer.opt.coverImage +
                                  ") center center"
                                : YTPlayer.orig_containment_background;
                              YTPlayer.wrapper.css({
                                background: e,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                              });
                            }, YTPlayer.opt.fadeOnStartTime))
                          : (jQuery(YTPlayer.playerEl).CSSAnimate(
                              { opacity: 1 },
                              YTPlayer.opt.fadeOnStartTime
                            ),
                            YTPlayer.wrapper.CSSAnimate(
                              {
                                opacity: YTPlayer.isAlone
                                  ? 1
                                  : YTPlayer.opt.opacity,
                              },
                              YTPlayer.opt.fadeOnStartTime
                            ))),
                      (YTPlayer.isStarting = !1);
                  }, 500),
                  YTPlayer.controlBar.length &&
                    YTPlayer.controlBar
                      .find(".mb_YTPPlayPause")
                      .html(jQuery.mbYTPlayer.controls.play);
              YTPlayer.isPlayer &&
                !YTPlayer.opt.autoPlay &&
                YTPlayer.loading &&
                YTPlayer.loading.length &&
                (YTPlayer.loading.html("Ready"),
                setTimeout(function () {
                  YTPlayer.loading.fadeOut();
                }, 100)),
                YTPlayer.controlBar &&
                  YTPlayer.controlBar.length &&
                  YTPlayer.controlBar.slideDown(1e3);
            }
            "mac" == jQuery.mbBrowser.os.name &&
              jQuery.mbBrowser.safari &&
              (YTPlayer.player.playVideo(),
              0 <= startAt && YTPlayer.player.seekTo(startAt, !0));
          }, 100)),
          $YTPlayer
        );
      }
      $YTPlayer.YTPPlayerDestroy();
    },
    getTime: function () {
      var e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.currentTime);
    },
    getTotalTime: function (e) {
      var r = this.get(0);
      return jQuery.mbYTPlayer.formatTime(r.totalTime);
    },
    formatTime: function (e) {
      var r = Math.floor(e / 60),
        t = Math.floor(e - 60 * r);
      return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t);
    },
    setAnchor: function (e) {
      this.optimizeDisplay(e);
    },
    getAnchor: function () {
      return this.get(0).opt.anchor;
    },
    setAbundance: function (e, r) {
      var t = this.get(0);
      return (
        r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
      );
    },
    getAbundance: function () {
      return this.get(0).opt.abundance;
    },
    setOption: function (e, r) {
      var t = this.get(0);
      return (t.opt[e] = r), this;
    },
  }),
    (jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {
      var YTPlayer = this.get(0),
        vid = {},
        el = YTPlayer.wrapper,
        iframe = jQuery(YTPlayer.playerEl);
      (YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor),
        (YTPlayer.opt.anchor =
          "undefined " != typeof YTPlayer.opt.anchor
            ? YTPlayer.opt.anchor
            : "center,center");
      var YTPAlign = YTPlayer.opt.anchor.split(","),
        ab = abundanceX || YTPlayer.opt.abundance;
      if (YTPlayer.opt.optimizeDisplay) {
        var abundance = el.height() * ab,
          win = {};
        (win.width = el.outerWidth()),
          (win.height = el.outerHeight() + abundance),
          (YTPlayer.opt.ratio =
            "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (vid.width = win.width + abundance),
          (vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio)),
          (vid.marginTop = Math.ceil(
            -(vid.height - win.height + abundance) / 2
          )),
          (vid.marginLeft = -abundance / 2);
        var lowest = vid.height < win.height;
        for (var a in (lowest &&
          ((vid.height = win.height + abundance),
          (vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio)),
          (vid.marginTop = -abundance / 2),
          (vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2))),
        YTPAlign))
          if (YTPAlign.hasOwnProperty(a)) {
            var al = YTPAlign[a].replace(/ /g, "");
            switch (al) {
              case "top":
                vid.marginTop = -abundance;
                break;
              case "bottom":
                vid.marginTop = Math.ceil(
                  -(vid.height - win.height) - abundance / 2
                );
                break;
              case "left":
                vid.marginLeft = -abundance;
                break;
              case "right":
                vid.marginLeft = Math.ceil(
                  -(vid.width - win.width) + abundance / 2
                );
            }
          }
      } else
        (vid.width = "100%"),
          (vid.height = "100%"),
          (vid.marginTop = 0),
          (vid.marginLeft = 0);
      iframe.css({
        width: vid.width,
        height: vid.height,
        marginTop: vid.marginTop,
        marginLeft: vid.marginLeft,
        maxWidth: "initial",
      });
    }),
    (jQuery.shuffle = function (e) {
      for (var r = e.slice(), t = r.length, a = t; a--; ) {
        var o = parseInt(Math.random() * t),
          n = r[a];
        (r[a] = r[o]), (r[o] = n);
      }
      return r;
    }),
    (jQuery.fn.unselectable = function () {
      return this.each(function () {
        jQuery(this)
          .css({
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          })
          .attr("unselectable", "on");
      });
    }),
    (jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState),
    (jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID),
    (jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie =
      jQuery.mbYTPlayer.changeVideo),
    (jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play),
    (jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay),
    (jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop),
    (jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause),
    (jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist),
    (jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex),
    (jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute),
    (jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume),
    (jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume),
    (jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData),
    (jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality),
    (jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter),
    (jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters),
    (jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter),
    (jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters),
    (jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter),
    (jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters),
    (jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters),
    (jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters),
    (jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime),
    (jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime),
    (jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask),
    (jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask),
    (jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask),
    (jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance),
    (jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance),
    (jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor),
    (jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor),
    (jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption);
})(jQuery, ytp);
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r);
}
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function () {
    var e = { version: "Unknown version", name: "Unknown OS" };
    return (
      -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"),
      -1 != navigator.appVersion.indexOf("Mac") &&
        navigator.appVersion.indexOf("Mobile") < 0 &&
        (e.name = "Mac"),
      -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, ".").substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"),
      /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"),
      /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"),
      /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"),
      /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"),
      /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"),
      /Linux/.test(nAgt) &&
        /Linux/.test(nAgt) &&
        (e.version = "Unknown.Unknown"),
      (e.name = e.name.toLowerCase()),
      (e.major_version = "Unknown"),
      (e.minor_version = "Unknown"),
      "Unknown.Unknown" != e.version &&
        ((e.major_version = parseFloat(e.version.split(".")[0])),
        (e.minor_version = parseFloat(e.version.split(".")[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf("Opera")))
)
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = "Microsoft Edge"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = "Chrome"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = "androidStock"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = "Firefox"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
function uncamel(e) {
  return e.replace(/([A-Z])/g, function (e) {
    return "-" + e.toLowerCase();
  });
}
function setUnit(e, r) {
  return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e;
}
function setFilter(e, r, t) {
  var a = uncamel(r),
    o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
  (e[o + "filter"] = e[o + "filter"] || ""),
    (t = setUnit(
      t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t,
      jQuery.CSS.filters[r].unit
    )),
    (e[o + "filter"] += a + "(" + t + ") "),
    delete e[r];
}
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (
      var t = e.split("."),
        a = r.split("."),
        o = 0,
        n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if (
        (t[o] && !a[o] && 0 < parseInt(t[o])) ||
        parseInt(t[o]) > parseInt(a[o])
      )
        return 1;
      if (
        (a[o] && !t[o] && 0 < parseInt(a[o])) ||
        parseInt(t[o]) < parseInt(a[o])
      )
        return -1;
    }
    return 0;
  }),
  (jQuery.support.CSStransition = (function () {
    var e = (document.body || document.documentElement).style;
    return (
      void 0 !== e.transition ||
      void 0 !== e.WebkitTransition ||
      void 0 !== e.MozTransition ||
      void 0 !== e.MsTransition ||
      void 0 !== e.OTransition
    );
  })()),
  (jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
      blur: { min: 0, max: 100, unit: "px" },
      brightness: { min: 0, max: 400, unit: "%" },
      contrast: { min: 0, max: 400, unit: "%" },
      grayscale: { min: 0, max: 100, unit: "%" },
      hueRotate: { min: 0, max: 360, unit: "deg" },
      invert: { min: 0, max: 100, unit: "%" },
      saturate: { min: 0, max: 400, unit: "%" },
      sepia: { min: 0, max: 100, unit: "%" },
    },
    normalizeCss: function (e) {
      var r = jQuery.extend(!0, {}, e);
      for (var t in (jQuery.browser.webkit || jQuery.browser.opera
        ? (jQuery.CSS.sfx = "-webkit-")
        : jQuery.browser.mozilla
        ? (jQuery.CSS.sfx = "-moz-")
        : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"),
      (jQuery.CSS.sfx = ""),
      r)) {
        if (
          ("transform" === t &&
            ((r[jQuery.CSS.sfx + "transform"] = r[t]), delete r[t]),
          "transform-origin" === t &&
            ((r[jQuery.CSS.sfx + "transform-origin"] = e[t]), delete r[t]),
          "filter" !== t ||
            jQuery.browser.mozilla ||
            ((r[jQuery.CSS.sfx + "filter"] = e[t]), delete r[t]),
          "blur" === t && setFilter(r, "blur", e[t]),
          "brightness" === t && setFilter(r, "brightness", e[t]),
          "contrast" === t && setFilter(r, "contrast", e[t]),
          "grayscale" === t && setFilter(r, "grayscale", e[t]),
          "hueRotate" === t && setFilter(r, "hueRotate", e[t]),
          "invert" === t && setFilter(r, "invert", e[t]),
          "saturate" === t && setFilter(r, "saturate", e[t]),
          "sepia" === t && setFilter(r, "sepia", e[t]),
          "x" === t)
        ) {
          var a = jQuery.CSS.sfx + "transform";
          (r[a] = r[a] || ""),
            (r[a] += " translateX(" + setUnit(e[t], "px") + ")"),
            delete r[t];
        }
        "y" === t &&
          ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
          (r[a] += " translateY(" + setUnit(e[t], "px") + ")"),
          delete r[t]),
          "z" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " translateZ(" + setUnit(e[t], "px") + ")"),
            delete r[t]),
          "rotate" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotate(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateX(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateY(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateZ" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "scale" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scale(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleX(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleY(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleZ" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleZ(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "skew" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skew(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "skewX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skewX(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "skewY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skewY(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "perspective" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " perspective(" + setUnit(e[t], "px") + ")"),
            delete r[t]);
      }
      return r;
    },
    getProp: function (e) {
      var r,
        t = [];
      for (r in e) t.indexOf(r) < 0 && t.push(uncamel(r));
      return t.join(",");
    },
    animate: function (l, s, u, y, d) {
      return this.each(function () {
        function e() {
          (r.called = !0),
            (r.CSSAIsRunning = !1),
            t.off(jQuery.CSS.transitionEnd + "." + r.id),
            clearTimeout(r.timeout),
            t.css(jQuery.CSS.sfx + "transition", ""),
            "function" == typeof d && d.apply(r),
            "function" == typeof r.CSSqueue &&
              (r.CSSqueue(), (r.CSSqueue = null));
        }
        var r = this,
          t = jQuery(this);
        r.id = r.id || "CSSA_" + new Date().getTime();
        var a = a || { type: "noEvent" };
        if (
          r.CSSAIsRunning &&
          r.eventType == a.type &&
          !jQuery.browser.msie &&
          jQuery.browser.version <= 9
        )
          r.CSSqueue = function () {
            t.CSSAnimate(l, s, u, y, d);
          };
        else if (
          ((r.CSSqueue = null), (r.eventType = a.type), 0 !== t.length && l)
        ) {
          if (
            ((l = jQuery.normalizeCss(l)),
            (r.CSSAIsRunning = !0),
            "function" == typeof s &&
              ((d = s), (s = jQuery.fx.speeds._default)),
            "function" == typeof u && ((y = u), (u = 0)),
            "string" == typeof u && ((d = u), (u = 0)),
            "function" == typeof y &&
              ((d = y), (y = "cubic-bezier(0.65,0.03,0.36,0.72)")),
            "string" == typeof s)
          )
            for (var o in jQuery.fx.speeds) {
              if (s == o) {
                s = jQuery.fx.speeds[o];
                break;
              }
              s = jQuery.fx.speeds._default;
            }
          if (
            (s || (s = jQuery.fx.speeds._default),
            "string" == typeof d && ((y = d), (d = null)),
            jQuery.support.CSStransition)
          ) {
            var n = {
              default: "ease",
              in: "ease-in",
              out: "ease-out",
              "in-out": "ease-in-out",
              snap: "cubic-bezier(0,1,.5,1)",
              easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
              easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
              easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
              easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
              easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
              easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
              easeOutExpo: "cubic-bezier(.19,1,.22,1)",
              easeInOutExpo: "cubic-bezier(1,0,0,1)",
              easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
              easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
              easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
              easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
              easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
              easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
              easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
              easeOutQuint: "cubic-bezier(.23,1,.32,1)",
              easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
              easeInSine: "cubic-bezier(.47,0,.745,.715)",
              easeOutSine: "cubic-bezier(.39,.575,.565,1)",
              easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
              easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
              easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
              easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            };
            n[y] && (y = n[y]),
              t.off(jQuery.CSS.transitionEnd + "." + r.id),
              (n = jQuery.CSS.getProp(l));
            var i = {};
            jQuery.extend(i, l),
              (i[jQuery.CSS.sfx + "transition-property"] = n),
              (i[jQuery.CSS.sfx + "transition-duration"] = s + "ms"),
              (i[jQuery.CSS.sfx + "transition-delay"] = u + "ms"),
              (i[jQuery.CSS.sfx + "transition-timing-function"] = y),
              setTimeout(function () {
                t.one(jQuery.CSS.transitionEnd + "." + r.id, e), t.css(i);
              }, 1),
              (r.timeout = setTimeout(function () {
                r.called || !d
                  ? ((r.called = !1), (r.CSSAIsRunning = !1))
                  : (t.css(jQuery.CSS.sfx + "transition", ""),
                    d.apply(r),
                    (r.CSSAIsRunning = !1),
                    "function" == typeof r.CSSqueue &&
                      (r.CSSqueue(), (r.CSSqueue = null)));
              }, s + u + 10));
          } else {
            for (n in l)
              "transform" === n && delete l[n],
                "filter" === n && delete l[n],
                "transform-origin" === n && delete l[n],
                "auto" === l[n] && delete l[n],
                "x" === n && ((a = l[n]), (l[(o = "left")] = a), delete l[n]),
                "y" === n && ((a = l[n]), (l[(o = "top")] = a), delete l[n]),
                ("-ms-transform" !== n && "-ms-filter" !== n) || delete l[n];
            t.delay(u).animate(l, s, d);
          }
        }
      });
    },
  }),
  (jQuery.fn.CSSAnimate = jQuery.CSS.animate),
  (jQuery.normalizeCss = jQuery.CSS.normalizeCss),
  (jQuery.fn.css3 = function (t) {
    return this.each(function () {
      var e = jQuery(this),
        r = jQuery.normalizeCss(t);
      e.css(r);
    });
  });
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r);
}
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function () {
    var e = { version: "Unknown version", name: "Unknown OS" };
    return (
      -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"),
      -1 != navigator.appVersion.indexOf("Mac") &&
        navigator.appVersion.indexOf("Mobile") < 0 &&
        (e.name = "Mac"),
      -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, ".").substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"),
      /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"),
      /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"),
      /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"),
      /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"),
      /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"),
      /Linux/.test(nAgt) &&
        /Linux/.test(nAgt) &&
        (e.version = "Unknown.Unknown"),
      (e.name = e.name.toLowerCase()),
      (e.major_version = "Unknown"),
      (e.minor_version = "Unknown"),
      "Unknown.Unknown" != e.version &&
        ((e.major_version = parseFloat(e.version.split(".")[0])),
        (e.minor_version = parseFloat(e.version.split(".")[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf("Opera")))
)
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = "Microsoft Edge"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = "Chrome"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = "androidStock"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = "Firefox"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (
      var t = e.split("."),
        a = r.split("."),
        o = 0,
        n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if (
        (t[o] && !a[o] && 0 < parseInt(t[o])) ||
        parseInt(t[o]) > parseInt(a[o])
      )
        return 1;
      if (
        (a[o] && !t[o] && 0 < parseInt(a[o])) ||
        parseInt(t[o]) < parseInt(a[o])
      )
        return -1;
    }
    return 0;
  }),
  (function (o) {
    (o.simpleSlider = {
      defaults: {
        initialval: 0,
        scale: 100,
        orientation: "h",
        readonly: !1,
        callback: !1,
      },
      events: {
        start: o.browser.mobile ? "touchstart" : "mousedown",
        end: o.browser.mobile ? "touchend" : "mouseup",
        move: o.browser.mobile ? "touchmove" : "mousemove",
      },
      init: function (a) {
        return this.each(function () {
          var r = this,
            t = o(r);
          t.addClass("simpleSlider"),
            (r.opt = {}),
            o.extend(r.opt, o.simpleSlider.defaults, a),
            o.extend(r.opt, t.data());
          var e = "h" == r.opt.orientation ? "horizontal" : "vertical";
          (e = o("<div/>").addClass("level").addClass(e)),
            t.prepend(e),
            (r.level = e),
            t.css({ cursor: "default" }),
            "auto" == r.opt.scale && (r.opt.scale = o(r).outerWidth()),
            t.updateSliderVal(),
            r.opt.readonly ||
              (t.on(o.simpleSlider.events.start, function (e) {
                o.browser.mobile && (e = e.changedTouches[0]),
                  (r.canSlide = !0),
                  t.updateSliderVal(e),
                  "h" == r.opt.orientation
                    ? t.css({ cursor: "col-resize" })
                    : t.css({ cursor: "row-resize" }),
                  o.browser.mobile || (e.preventDefault(), e.stopPropagation());
              }),
              o(document)
                .on(o.simpleSlider.events.move, function (e) {
                  o.browser.mobile && (e = e.changedTouches[0]),
                    r.canSlide &&
                      (o(document).css({ cursor: "default" }),
                      t.updateSliderVal(e),
                      o.browser.mobile ||
                        (e.preventDefault(), e.stopPropagation()));
                })
                .on(o.simpleSlider.events.end, function () {
                  o(document).css({ cursor: "auto" }),
                    (r.canSlide = !1),
                    t.css({ cursor: "auto" });
                }));
        });
      },
      updateSliderVal: function (e) {
        var r = this.get(0);
        if (r.opt) {
          r.opt.initialval =
            "number" == typeof r.opt.initialval
              ? r.opt.initialval
              : r.opt.initialval(r);
          var t = o(r).outerWidth(),
            a = o(r).outerHeight();
          (r.x =
            "object" == typeof e
              ? e.clientX + document.body.scrollLeft - this.offset().left
              : "number" == typeof e
              ? (e * t) / r.opt.scale
              : (r.opt.initialval * t) / r.opt.scale),
            (r.y =
              "object" == typeof e
                ? e.clientY + document.body.scrollTop - this.offset().top
                : "number" == typeof e
                ? ((r.opt.scale - r.opt.initialval - e) * a) / r.opt.scale
                : (r.opt.initialval * a) / r.opt.scale),
            (r.y = this.outerHeight() - r.y),
            (r.scaleX = (r.x * r.opt.scale) / t),
            (r.scaleY = (r.y * r.opt.scale) / a),
            (r.outOfRangeX =
              r.scaleX > r.opt.scale
                ? r.scaleX - r.opt.scale
                : r.scaleX < 0
                ? r.scaleX
                : 0),
            (r.outOfRangeY =
              r.scaleY > r.opt.scale
                ? r.scaleY - r.opt.scale
                : r.scaleY < 0
                ? r.scaleY
                : 0),
            (r.outOfRange =
              "h" == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY),
            (r.value =
              void 0 !== e
                ? "h" == r.opt.orientation
                  ? r.x >= this.outerWidth()
                    ? r.opt.scale
                    : r.x <= 0
                    ? 0
                    : r.scaleX
                  : r.y >= this.outerHeight()
                  ? r.opt.scale
                  : r.y <= 0
                  ? 0
                  : r.scaleY
                : "h" == r.opt.orientation
                ? r.scaleX
                : r.scaleY),
            "h" == r.opt.orientation
              ? r.level.width(Math.floor((100 * r.x) / t) + "%")
              : r.level.height(Math.floor((100 * r.y) / a)),
            "function" == typeof r.opt.callback && r.opt.callback(r);
        }
      },
    }),
      (o.fn.simpleSlider = o.simpleSlider.init),
      (o.fn.updateSliderVal = o.simpleSlider.updateSliderVal);
  })(jQuery),
  (function (r) {
    (r.mbCookie = {
      set: function (e, r, t, a) {
        "object" == typeof r && (r = JSON.stringify(r)),
          (a = a ? "; domain=" + a : "");
        var o = new Date(),
          n = "";
        0 < t &&
          (o.setTime(o.getTime() + 864e5 * t),
          (n = "; expires=" + o.toGMTString())),
          (document.cookie = e + "=" + r + n + "; path=/" + a);
      },
      get: function (r) {
        r += "=";
        for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
          for (var a = e[t]; " " == a.charAt(0); ) a = a.substring(1, a.length);
          if (0 == a.indexOf(r))
            try {
              return JSON.parse(a.substring(r.length, a.length));
            } catch (e) {
              return a.substring(r.length, a.length);
            }
        }
        return null;
      },
      remove: function (e) {
        r.mbCookie.set(e, "", -1);
      },
    }),
      (r.mbStorage = {
        set: function (e, r) {
          "object" == typeof r && (r = JSON.stringify(r)),
            localStorage.setItem(e, r);
        },
        get: function (r) {
          if (!localStorage[r]) return null;
          try {
            return JSON.parse(localStorage[r]);
          } catch (e) {
            return localStorage[r];
          }
        },
        remove: function (e) {
          e ? localStorage.removeItem(e) : localStorage.clear();
        },
      });
  })(jQuery);

// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// 2016-07-07, Brian Grinstead, MIT License
!(function (t) {
  function e(t, n) {
    if (((t = t ? t : ""), (n = n || {}), t instanceof e)) return t;
    if (!(this instanceof e)) return new e(t, n);
    var a = r(t);
    (this._originalInput = t),
      (this._r = a.r),
      (this._g = a.g),
      (this._b = a.b),
      (this._a = a.a),
      (this._roundA = $(100 * this._a) / 100),
      (this._format = n.format || a.format),
      (this._gradientType = n.gradientType),
      this._r < 1 && (this._r = $(this._r)),
      this._g < 1 && (this._g = $(this._g)),
      this._b < 1 && (this._b = $(this._b)),
      (this._ok = a.ok),
      (this._tc_id = P++);
  }
  function r(t) {
    var e = { r: 0, g: 0, b: 0 },
      r = 1,
      a = null,
      s = null,
      f = null,
      h = !1,
      l = !1;
    return (
      "string" == typeof t && (t = E(t)),
      "object" == typeof t &&
        (z(t.r) && z(t.g) && z(t.b)
          ? ((e = n(t.r, t.g, t.b)),
            (h = !0),
            (l = "%" === String(t.r).substr(-1) ? "prgb" : "rgb"))
          : z(t.h) && z(t.s) && z(t.v)
          ? ((a = I(t.s)),
            (s = I(t.v)),
            (e = o(t.h, a, s)),
            (h = !0),
            (l = "hsv"))
          : z(t.h) &&
            z(t.s) &&
            z(t.l) &&
            ((a = I(t.s)),
            (f = I(t.l)),
            (e = i(t.h, a, f)),
            (h = !0),
            (l = "hsl")),
        t.hasOwnProperty("a") && (r = t.a)),
      (r = S(r)),
      {
        ok: h,
        format: t.format || l,
        r: D(255, U(e.r, 0)),
        g: D(255, U(e.g, 0)),
        b: D(255, U(e.b, 0)),
        a: r,
      }
    );
  }
  function n(t, e, r) {
    return { r: 255 * H(t, 255), g: 255 * H(e, 255), b: 255 * H(r, 255) };
  }
  function a(t, e, r) {
    (t = H(t, 255)), (e = H(e, 255)), (r = H(r, 255));
    var n,
      a,
      i = U(t, e, r),
      s = D(t, e, r),
      o = (i + s) / 2;
    if (i == s) n = a = 0;
    else {
      var f = i - s;
      switch (((a = o > 0.5 ? f / (2 - i - s) : f / (i + s)), i)) {
        case t:
          n = (e - r) / f + (r > e ? 6 : 0);
          break;
        case e:
          n = (r - t) / f + 2;
          break;
        case r:
          n = (t - e) / f + 4;
      }
      n /= 6;
    }
    return { h: n, s: a, l: o };
  }
  function i(t, e, r) {
    function n(t, e, r) {
      return (
        0 > r && (r += 1),
        r > 1 && (r -= 1),
        1 / 6 > r
          ? t + 6 * (e - t) * r
          : 0.5 > r
          ? e
          : 2 / 3 > r
          ? t + (e - t) * (2 / 3 - r) * 6
          : t
      );
    }
    var a, i, s;
    if (((t = H(t, 360)), (e = H(e, 100)), (r = H(r, 100)), 0 === e))
      a = i = s = r;
    else {
      var o = 0.5 > r ? r * (1 + e) : r + e - r * e,
        f = 2 * r - o;
      (a = n(f, o, t + 1 / 3)), (i = n(f, o, t)), (s = n(f, o, t - 1 / 3));
    }
    return { r: 255 * a, g: 255 * i, b: 255 * s };
  }
  function s(t, e, r) {
    (t = H(t, 255)), (e = H(e, 255)), (r = H(r, 255));
    var n,
      a,
      i = U(t, e, r),
      s = D(t, e, r),
      o = i,
      f = i - s;
    if (((a = 0 === i ? 0 : f / i), i == s)) n = 0;
    else {
      switch (i) {
        case t:
          n = (e - r) / f + (r > e ? 6 : 0);
          break;
        case e:
          n = (r - t) / f + 2;
          break;
        case r:
          n = (t - e) / f + 4;
      }
      n /= 6;
    }
    return { h: n, s: a, v: o };
  }
  function o(e, r, n) {
    (e = 6 * H(e, 360)), (r = H(r, 100)), (n = H(n, 100));
    var a = t.floor(e),
      i = e - a,
      s = n * (1 - r),
      o = n * (1 - i * r),
      f = n * (1 - (1 - i) * r),
      h = a % 6,
      l = [n, o, s, s, f, n][h],
      u = [f, n, n, o, s, s][h],
      c = [s, s, f, n, n, o][h];
    return { r: 255 * l, g: 255 * u, b: 255 * c };
  }
  function f(t, e, r, n) {
    var a = [M($(t).toString(16)), M($(e).toString(16)), M($(r).toString(16))];
    return n &&
      a[0].charAt(0) == a[0].charAt(1) &&
      a[1].charAt(0) == a[1].charAt(1) &&
      a[2].charAt(0) == a[2].charAt(1)
      ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
      : a.join("");
  }
  function h(t, e, r, n, a) {
    var i = [
      M($(t).toString(16)),
      M($(e).toString(16)),
      M($(r).toString(16)),
      M(L(n)),
    ];
    return a &&
      i[0].charAt(0) == i[0].charAt(1) &&
      i[1].charAt(0) == i[1].charAt(1) &&
      i[2].charAt(0) == i[2].charAt(1) &&
      i[3].charAt(0) == i[3].charAt(1)
      ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
      : i.join("");
  }
  function l(t, e, r, n) {
    var a = [
      M(L(n)),
      M($(t).toString(16)),
      M($(e).toString(16)),
      M($(r).toString(16)),
    ];
    return a.join("");
  }
  function u(t, r) {
    r = 0 === r ? 0 : r || 10;
    var n = e(t).toHsl();
    return (n.s -= r / 100), (n.s = R(n.s)), e(n);
  }
  function c(t, r) {
    r = 0 === r ? 0 : r || 10;
    var n = e(t).toHsl();
    return (n.s += r / 100), (n.s = R(n.s)), e(n);
  }
  function g(t) {
    return e(t).desaturate(100);
  }
  function b(t, r) {
    r = 0 === r ? 0 : r || 10;
    var n = e(t).toHsl();
    return (n.l += r / 100), (n.l = R(n.l)), e(n);
  }
  function d(t, r) {
    r = 0 === r ? 0 : r || 10;
    var n = e(t).toRgb();
    return (
      (n.r = U(0, D(255, n.r - $(255 * -(r / 100))))),
      (n.g = U(0, D(255, n.g - $(255 * -(r / 100))))),
      (n.b = U(0, D(255, n.b - $(255 * -(r / 100))))),
      e(n)
    );
  }
  function _(t, r) {
    r = 0 === r ? 0 : r || 10;
    var n = e(t).toHsl();
    return (n.l -= r / 100), (n.l = R(n.l)), e(n);
  }
  function p(t, r) {
    var n = e(t).toHsl(),
      a = (n.h + r) % 360;
    return (n.h = 0 > a ? 360 + a : a), e(n);
  }
  function m(t) {
    var r = e(t).toHsl();
    return (r.h = (r.h + 180) % 360), e(r);
  }
  function v(t) {
    var r = e(t).toHsl(),
      n = r.h;
    return [
      e(t),
      e({ h: (n + 120) % 360, s: r.s, l: r.l }),
      e({ h: (n + 240) % 360, s: r.s, l: r.l }),
    ];
  }
  function y(t) {
    var r = e(t).toHsl(),
      n = r.h;
    return [
      e(t),
      e({ h: (n + 90) % 360, s: r.s, l: r.l }),
      e({ h: (n + 180) % 360, s: r.s, l: r.l }),
      e({ h: (n + 270) % 360, s: r.s, l: r.l }),
    ];
  }
  function A(t) {
    var r = e(t).toHsl(),
      n = r.h;
    return [
      e(t),
      e({ h: (n + 72) % 360, s: r.s, l: r.l }),
      e({ h: (n + 216) % 360, s: r.s, l: r.l }),
    ];
  }
  function x(t, r, n) {
    (r = r || 6), (n = n || 30);
    var a = e(t).toHsl(),
      i = 360 / n,
      s = [e(t)];
    for (a.h = (a.h - ((i * r) >> 1) + 720) % 360; --r; )
      (a.h = (a.h + i) % 360), s.push(e(a));
    return s;
  }
  function k(t, r) {
    r = r || 6;
    for (
      var n = e(t).toHsv(), a = n.h, i = n.s, s = n.v, o = [], f = 1 / r;
      r--;

    )
      o.push(e({ h: a, s: i, v: s })), (s = (s + f) % 1);
    return o;
  }
  function w(t) {
    var e = {};
    for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
    return e;
  }
  function S(t) {
    return (t = parseFloat(t)), (isNaN(t) || 0 > t || t > 1) && (t = 1), t;
  }
  function H(e, r) {
    C(e) && (e = "100%");
    var n = q(e);
    return (
      (e = D(r, U(0, parseFloat(e)))),
      n && (e = parseInt(e * r, 10) / 100),
      t.abs(e - r) < 1e-6 ? 1 : (e % r) / parseFloat(r)
    );
  }
  function R(t) {
    return D(1, U(0, t));
  }
  function F(t) {
    return parseInt(t, 16);
  }
  function C(t) {
    return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t);
  }
  function q(t) {
    return "string" == typeof t && -1 != t.indexOf("%");
  }
  function M(t) {
    return 1 == t.length ? "0" + t : "" + t;
  }
  function I(t) {
    return 1 >= t && (t = 100 * t + "%"), t;
  }
  function L(e) {
    return t.round(255 * parseFloat(e)).toString(16);
  }
  function N(t) {
    return F(t) / 255;
  }
  function z(t) {
    return !!X.CSS_UNIT.exec(t);
  }
  function E(t) {
    t = t.replace(j, "").replace(O, "").toLowerCase();
    var e = !1;
    if (G[t]) (t = G[t]), (e = !0);
    else if ("transparent" == t)
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    var r;
    return (r = X.rgb.exec(t))
      ? { r: r[1], g: r[2], b: r[3] }
      : (r = X.rgba.exec(t))
      ? { r: r[1], g: r[2], b: r[3], a: r[4] }
      : (r = X.hsl.exec(t))
      ? { h: r[1], s: r[2], l: r[3] }
      : (r = X.hsla.exec(t))
      ? { h: r[1], s: r[2], l: r[3], a: r[4] }
      : (r = X.hsv.exec(t))
      ? { h: r[1], s: r[2], v: r[3] }
      : (r = X.hsva.exec(t))
      ? { h: r[1], s: r[2], v: r[3], a: r[4] }
      : (r = X.hex8.exec(t))
      ? {
          r: F(r[1]),
          g: F(r[2]),
          b: F(r[3]),
          a: N(r[4]),
          format: e ? "name" : "hex8",
        }
      : (r = X.hex6.exec(t))
      ? { r: F(r[1]), g: F(r[2]), b: F(r[3]), format: e ? "name" : "hex" }
      : (r = X.hex4.exec(t))
      ? {
          r: F(r[1] + "" + r[1]),
          g: F(r[2] + "" + r[2]),
          b: F(r[3] + "" + r[3]),
          a: N(r[4] + "" + r[4]),
          format: e ? "name" : "hex8",
        }
      : (r = X.hex3.exec(t))
      ? {
          r: F(r[1] + "" + r[1]),
          g: F(r[2] + "" + r[2]),
          b: F(r[3] + "" + r[3]),
          format: e ? "name" : "hex",
        }
      : !1;
  }
  function T(t) {
    var e, r;
    return (
      (t = t || { level: "AA", size: "small" }),
      (e = (t.level || "AA").toUpperCase()),
      (r = (t.size || "small").toLowerCase()),
      "AA" !== e && "AAA" !== e && (e = "AA"),
      "small" !== r && "large" !== r && (r = "small"),
      { level: e, size: r }
    );
  }
  var j = /^\s+/,
    O = /\s+$/,
    P = 0,
    $ = t.round,
    D = t.min,
    U = t.max,
    B = t.random;
  (e.prototype = {
    isDark: function () {
      return this.getBrightness() < 128;
    },
    isLight: function () {
      return !this.isDark();
    },
    isValid: function () {
      return this._ok;
    },
    getOriginalInput: function () {
      return this._originalInput;
    },
    getFormat: function () {
      return this._format;
    },
    getAlpha: function () {
      return this._a;
    },
    getBrightness: function () {
      var t = this.toRgb();
      return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
    },
    getLuminance: function () {
      var e,
        r,
        n,
        a,
        i,
        s,
        o = this.toRgb();
      return (
        (e = o.r / 255),
        (r = o.g / 255),
        (n = o.b / 255),
        (a = 0.03928 >= e ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)),
        (i = 0.03928 >= r ? r / 12.92 : t.pow((r + 0.055) / 1.055, 2.4)),
        (s = 0.03928 >= n ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4)),
        0.2126 * a + 0.7152 * i + 0.0722 * s
      );
    },
    setAlpha: function (t) {
      return (this._a = S(t)), (this._roundA = $(100 * this._a) / 100), this;
    },
    toHsv: function () {
      var t = s(this._r, this._g, this._b);
      return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
    },
    toHsvString: function () {
      var t = s(this._r, this._g, this._b),
        e = $(360 * t.h),
        r = $(100 * t.s),
        n = $(100 * t.v);
      return 1 == this._a
        ? "hsv(" + e + ", " + r + "%, " + n + "%)"
        : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
    },
    toHsl: function () {
      var t = a(this._r, this._g, this._b);
      return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
    },
    toHslString: function () {
      var t = a(this._r, this._g, this._b),
        e = $(360 * t.h),
        r = $(100 * t.s),
        n = $(100 * t.l);
      return 1 == this._a
        ? "hsl(" + e + ", " + r + "%, " + n + "%)"
        : "hsla(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")";
    },
    toHex: function (t) {
      return f(this._r, this._g, this._b, t);
    },
    toHexString: function (t) {
      return "#" + this.toHex(t);
    },
    toHex8: function (t) {
      return h(this._r, this._g, this._b, this._a, t);
    },
    toHex8String: function (t) {
      return "#" + this.toHex8(t);
    },
    toRgb: function () {
      return { r: $(this._r), g: $(this._g), b: $(this._b), a: this._a };
    },
    toRgbString: function () {
      return 1 == this._a
        ? "rgb(" + $(this._r) + ", " + $(this._g) + ", " + $(this._b) + ")"
        : "rgba(" +
            $(this._r) +
            ", " +
            $(this._g) +
            ", " +
            $(this._b) +
            ", " +
            this._roundA +
            ")";
    },
    toPercentageRgb: function () {
      return {
        r: $(100 * H(this._r, 255)) + "%",
        g: $(100 * H(this._g, 255)) + "%",
        b: $(100 * H(this._b, 255)) + "%",
        a: this._a,
      };
    },
    toPercentageRgbString: function () {
      return 1 == this._a
        ? "rgb(" +
            $(100 * H(this._r, 255)) +
            "%, " +
            $(100 * H(this._g, 255)) +
            "%, " +
            $(100 * H(this._b, 255)) +
            "%)"
        : "rgba(" +
            $(100 * H(this._r, 255)) +
            "%, " +
            $(100 * H(this._g, 255)) +
            "%, " +
            $(100 * H(this._b, 255)) +
            "%, " +
            this._roundA +
            ")";
    },
    toName: function () {
      return 0 === this._a
        ? "transparent"
        : this._a < 1
        ? !1
        : V[f(this._r, this._g, this._b, !0)] || !1;
    },
    toFilter: function (t) {
      var r = "#" + l(this._r, this._g, this._b, this._a),
        n = r,
        a = this._gradientType ? "GradientType = 1, " : "";
      if (t) {
        var i = e(t);
        n = "#" + l(i._r, i._g, i._b, i._a);
      }
      return (
        "progid:DXImageTransform.Microsoft.gradient(" +
        a +
        "startColorstr=" +
        r +
        ",endColorstr=" +
        n +
        ")"
      );
    },
    toString: function (t) {
      var e = !!t;
      t = t || this._format;
      var r = !1,
        n = this._a < 1 && this._a >= 0,
        a =
          !e &&
          n &&
          ("hex" === t ||
            "hex6" === t ||
            "hex3" === t ||
            "hex4" === t ||
            "hex8" === t ||
            "name" === t);
      return a
        ? "name" === t && 0 === this._a
          ? this.toName()
          : this.toRgbString()
        : ("rgb" === t && (r = this.toRgbString()),
          "prgb" === t && (r = this.toPercentageRgbString()),
          ("hex" !== t && "hex6" !== t) || (r = this.toHexString()),
          "hex3" === t && (r = this.toHexString(!0)),
          "hex4" === t && (r = this.toHex8String(!0)),
          "hex8" === t && (r = this.toHex8String()),
          "name" === t && (r = this.toName()),
          "hsl" === t && (r = this.toHslString()),
          "hsv" === t && (r = this.toHsvString()),
          r || this.toHexString());
    },
    clone: function () {
      return e(this.toString());
    },
    _applyModification: function (t, e) {
      var r = t.apply(null, [this].concat([].slice.call(e)));
      return (
        (this._r = r._r),
        (this._g = r._g),
        (this._b = r._b),
        this.setAlpha(r._a),
        this
      );
    },
    lighten: function () {
      return this._applyModification(b, arguments);
    },
    brighten: function () {
      return this._applyModification(d, arguments);
    },
    darken: function () {
      return this._applyModification(_, arguments);
    },
    desaturate: function () {
      return this._applyModification(u, arguments);
    },
    saturate: function () {
      return this._applyModification(c, arguments);
    },
    greyscale: function () {
      return this._applyModification(g, arguments);
    },
    spin: function () {
      return this._applyModification(p, arguments);
    },
    _applyCombination: function (t, e) {
      return t.apply(null, [this].concat([].slice.call(e)));
    },
    analogous: function () {
      return this._applyCombination(x, arguments);
    },
    complement: function () {
      return this._applyCombination(m, arguments);
    },
    monochromatic: function () {
      return this._applyCombination(k, arguments);
    },
    splitcomplement: function () {
      return this._applyCombination(A, arguments);
    },
    triad: function () {
      return this._applyCombination(v, arguments);
    },
    tetrad: function () {
      return this._applyCombination(y, arguments);
    },
  }),
    (e.fromRatio = function (t, r) {
      if ("object" == typeof t) {
        var n = {};
        for (var a in t)
          t.hasOwnProperty(a) && ("a" === a ? (n[a] = t[a]) : (n[a] = I(t[a])));
        t = n;
      }
      return e(t, r);
    }),
    (e.equals = function (t, r) {
      return t && r ? e(t).toRgbString() == e(r).toRgbString() : !1;
    }),
    (e.random = function () {
      return e.fromRatio({ r: B(), g: B(), b: B() });
    }),
    (e.mix = function (t, r, n) {
      n = 0 === n ? 0 : n || 50;
      var a = e(t).toRgb(),
        i = e(r).toRgb(),
        s = n / 100,
        o = {
          r: (i.r - a.r) * s + a.r,
          g: (i.g - a.g) * s + a.g,
          b: (i.b - a.b) * s + a.b,
          a: (i.a - a.a) * s + a.a,
        };
      return e(o);
    }),
    (e.readability = function (r, n) {
      var a = e(r),
        i = e(n);
      return (
        (t.max(a.getLuminance(), i.getLuminance()) + 0.05) /
        (t.min(a.getLuminance(), i.getLuminance()) + 0.05)
      );
    }),
    (e.isReadable = function (t, r, n) {
      var a,
        i,
        s = e.readability(t, r);
      switch (((i = !1), (a = T(n)), a.level + a.size)) {
        case "AAsmall":
        case "AAAlarge":
          i = s >= 4.5;
          break;
        case "AAlarge":
          i = s >= 3;
          break;
        case "AAAsmall":
          i = s >= 7;
      }
      return i;
    }),
    (e.mostReadable = function (t, r, n) {
      var a,
        i,
        s,
        o,
        f = null,
        h = 0;
      (n = n || {}), (i = n.includeFallbackColors), (s = n.level), (o = n.size);
      for (var l = 0; l < r.length; l++)
        (a = e.readability(t, r[l])), a > h && ((h = a), (f = e(r[l])));
      return e.isReadable(t, f, { level: s, size: o }) || !i
        ? f
        : ((n.includeFallbackColors = !1),
          e.mostReadable(t, ["#fff", "#000"], n));
    });
  var G = (e.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32",
    }),
    V = (e.hexNames = w(G)),
    X = (function () {
      var t = "[-\\+]?\\d+%?",
        e = "[-\\+]?\\d*\\.\\d+%?",
        r = "(?:" + e + ")|(?:" + t + ")",
        n =
          "[\\s|\\(]+(" + r + ")[,|\\s]+(" + r + ")[,|\\s]+(" + r + ")\\s*\\)?",
        a =
          "[\\s|\\(]+(" +
          r +
          ")[,|\\s]+(" +
          r +
          ")[,|\\s]+(" +
          r +
          ")[,|\\s]+(" +
          r +
          ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(r),
        rgb: new RegExp("rgb" + n),
        rgba: new RegExp("rgba" + a),
        hsl: new RegExp("hsl" + n),
        hsla: new RegExp("hsla" + a),
        hsv: new RegExp("hsv" + n),
        hsva: new RegExp("hsva" + a),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      };
    })();
  "undefined" != typeof module && module.exports
    ? (module.exports = e)
    : "function" == typeof define && define.amd
    ? define(function () {
        return e;
      })
    : (window.tinycolor = e);
})(Math);

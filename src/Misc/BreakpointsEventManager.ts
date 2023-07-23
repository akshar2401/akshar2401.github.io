import Utilities, { IDisposable } from "./Utilities";

export class BreakpointsEventManager {
  private static readonly breakpointsMediaQueries = {
    xs: "(min-width: 0px) and (max-width: 575px)",
    sm: "(min-width: 576px) and (max-width: 767px)",
    md: "(min-width: 768px) and (max-width: 991px)",
    lg: "(min-width: 992px) and (max-width: 1199px)",
    xl: "(min-width: 1200px) and (max-width: 1399px)",
    xxl: "(min-width: 1400px)",
  };

  private static readonly matchers = Object.fromEntries(
    Object.keys(this.breakpointsMediaQueries).map((breakpoint) => [
      breakpoint,
      window.matchMedia(this.breakpointsMediaQueries[breakpoint]),
    ])
  ) as {
    [Property in keyof typeof this.breakpointsMediaQueries]: MediaQueryList;
  };

  public static addListenerForExtraSmall(callback: () => void): IDisposable {
    return this.addListener("xs", callback);
  }

  public static removeListenerForExtraSmall(callback: () => void) {
    this.removeListener("xs", callback);
  }

  public static addListenerForSmall(callback: () => void): IDisposable {
    return this.addListener("sm", callback);
  }

  public static removeListenerForSmall(callback: () => void) {
    this.removeListener("sm", callback);
  }

  public static addListenerForMedium(callback: () => void): IDisposable {
    return this.addListener("md", callback);
  }

  public static removeListenerForMedium(callback: () => void) {
    this.removeListener("md", callback);
  }

  public static addListenerForLarge(callback: () => void): IDisposable {
    return this.addListener("lg", callback);
  }

  public static removeListenerForLarge(callback: () => void) {
    this.removeListener("lg", callback);
  }

  public static addListenerForExtraLarge(callback: () => void): IDisposable {
    return this.addListener("xl", callback);
  }

  public static removeListenerForExtraLarge(callback: () => void) {
    this.removeListener("xl", callback);
  }

  public static addListenerFor2ExtraLarge(callback: () => void): IDisposable {
    return this.addListener("xxl", callback);
  }

  public static removeListener2ExtraLarge(callback: () => void) {
    this.removeListener("xxl", callback);
  }

  public static matchesExtraSmall() {
    return this.matches("xs");
  }

  public static matchesSmall() {
    return this.matches("sm");
  }

  public static matchesMedium() {
    return this.matches("md");
  }

  public static matchesLarge() {
    return this.matches("lg");
  }

  public static matchesExtraLarge() {
    return this.matches("xl");
  }

  public static matches2ExtraLarge() {
    return this.matches("xxl");
  }

  private static matches(
    breakpoint: keyof typeof this.breakpointsMediaQueries
  ) {
    return this.matchers[breakpoint].matches;
  }

  private static addListener(
    breakpoint: keyof typeof this.breakpointsMediaQueries,
    callback: () => void
  ): IDisposable {
    this.matchers[breakpoint].addEventListener("change", callback);
    return Utilities.createGenericDisposable(() =>
      this.removeListener(breakpoint, callback)
    );
  }

  private static removeListener(
    breakpoint: keyof typeof this.breakpointsMediaQueries,
    callback: () => void
  ) {
    this.matchers[breakpoint].removeEventListener("change", callback);
  }
}

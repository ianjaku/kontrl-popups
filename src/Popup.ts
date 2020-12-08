import EventHandler from "./EventHandler";

abstract class KontrlPopup {

  /**
   * A string unique to this popup.
   * Can be used to uniquely identify the popup
   */
  private id: string;

  private eventHandler: EventHandler | null = null;

  constructor(params: { id?: string } = {}) {
    this.id = params.id != null ? params.id : this.generateId()
  }

  /**
   * Build the popup element
   */
  public abstract build(): HTMLElement;
  public abstract handleShow(): void;
  public abstract hide(): void;

  public show(eventHandler: EventHandler) {
    this.eventHandler = eventHandler;
    this.handleShow();
  }

  public getId() {
    return this.id;
  }

  protected throwEvent(name: string, context?: any) {
    if (this.eventHandler == null) return;
    this.eventHandler(name, context);
  }

  /**
   * Generates a random ID to uniquely identify this popup
   */
  private generateId() {
    return (Math.random() * 100000000).toString();
  }

}

export default KontrlPopup;